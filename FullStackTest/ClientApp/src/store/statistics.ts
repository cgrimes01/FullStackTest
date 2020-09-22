import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface StatisticsState {
    isLoading: boolean;
    sum: number | null;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestStatisticsAction {
    type: 'REQUEST_STATISTICS';
}

interface ReceiveStatisticsAction {
    type: 'RECEIVE_STATISTICS';
    sum: number;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestStatisticsAction | ReceiveStatisticsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestStatistics: (input: number[]): AppThunkAction<KnownAction> => (dispatch, getState) => {
        let url = 'statistics?'
        input.forEach(x => {
            url += `inputs=${x}&`;
        });
        fetch(url)
            .then(response => response.json() as Promise<number>)
            .then(data => {
                if (data) {
                    // Error path default to 0
                    if (typeof(data) === 'object') {
                        dispatch({ type: 'RECEIVE_STATISTICS', sum: 0 });
                    } else {
                        dispatch({ type: 'RECEIVE_STATISTICS', sum: data });
                    }
                }
            });

        dispatch({ type: 'REQUEST_STATISTICS' });
    }

};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: StatisticsState = { sum: null, isLoading: false };

export const reducer: Reducer<StatisticsState> = (state: StatisticsState | undefined, incomingAction: Action): StatisticsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_STATISTICS':
            return {
                ...state, 
                isLoading: true
            };
        case 'RECEIVE_STATISTICS':
            return {
                sum: action.sum,
                isLoading: false
            };
        default:
            return state;
    }


};
