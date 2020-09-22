import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface InputState {
    input: Array<number>;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface AddInputAction { type: 'ADD_INPUT', payload: number }
export interface ClearInputAction { type: 'CLEAR_INPUT' }

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = AddInputAction | ClearInputAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    add: (payload: number) => ({ type: 'ADD_INPUT', payload } as AddInputAction),
    clear: () => ({ type: 'CLEAR_INPUT' } as ClearInputAction)
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<InputState> = (state: InputState | undefined, incomingAction: Action): InputState => {
    if (state === undefined) {
        return { input: [] };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'ADD_INPUT':
            return { ...state };
        case 'CLEAR_INPUT':
            return { ...state };
        default:
            return state;
    }
};
