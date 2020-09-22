import { ApplicationState } from '.';
import { StatisticsState, reducer, actionCreators } from './statistics';

describe('Statistics', () => {

    it('requestStatistics with empty input builds no params in url', () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: () => null}));
        actionCreators.requestStatistics([])(obj.dispatch, () => state);
        expect(window.fetch).toHaveBeenCalledWith('statistics?');
    });

    it('requestStatistics with single input builds params in url', () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: () => null}));
        actionCreators.requestStatistics([1])(obj.dispatch, () => state);
        expect(window.fetch).toHaveBeenCalledWith('statistics?inputs=1&');
    });

    it('requestStatistics with multiple input builds params in url', () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: () => null}));
        actionCreators.requestStatistics([1, 2, 3])(obj.dispatch, () => state);
        expect(window.fetch).toHaveBeenCalledWith('statistics?inputs=1&inputs=2&inputs=3&');
    });

    it('requestStatistics calls dispatch with REQUEST_STATISTICS', () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: () => null}));
        actionCreators.requestStatistics([])(obj.dispatch, () => state);
        expect(obj.dispatch).toHaveBeenCalledWith({ type: 'REQUEST_STATISTICS' });
    });

    it('requestStatistics calls dispatch with REQUEST_STATISTICS', () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        spyOn(window, 'fetch').and.returnValue(Promise.resolve({ json: () => null}));
        actionCreators.requestStatistics([])(obj.dispatch, () => state);
        expect(obj.dispatch).toHaveBeenCalledWith({ type: 'REQUEST_STATISTICS' });
    });

    it('requestStatistics calls dispatch with RECEIVE_STATISTICS and 0 when fetch returns error', async () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        const jsonPromise = Promise.resolve({status: 400})
        const promise = Promise.resolve({ json: () => jsonPromise});
        spyOn(window, 'fetch').and.returnValue(promise);
        actionCreators.requestStatistics([])(obj.dispatch, () => state);
        setTimeout(() => {
            expect(obj.dispatch).toHaveBeenCalledWith({ type: 'REQUEST_STATISTICS' }, { type: 'RECEIVE_STATISTICS', sum: 0 });
        }, 0);
    });

    it('requestStatistics calls dispatch with RECEIVE_STATISTICS and value when fetch returns value', async () => {
        const state = {} as ApplicationState;
        const obj = { dispatch: () => null };
        spyOn(obj, 'dispatch')
        const jsonPromise = Promise.resolve(21);
        const promise = Promise.resolve({ json: () => jsonPromise});
        spyOn(window, 'fetch').and.returnValue(promise);
        actionCreators.requestStatistics([])(obj.dispatch, () => state);
        setTimeout(() => {
          expect(obj.dispatch).toHaveBeenCalledWith({ type: 'REQUEST_STATISTICS' }, { type: 'RECEIVE_STATISTICS', sum: 21 });
        }, 0);
    });
});