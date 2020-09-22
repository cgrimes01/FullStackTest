import { actionCreators, AddInputAction, ClearInputAction, InputState, reducer } from './input';

describe('input', () => {

    it('reducer with add action does when empty', () => {
        const state = {input: []} as InputState;
        const action = actionCreators.add(1);
        const result = reducer(state, action);
        expect(result.input.length).toBe(1);
    });

    it('reducer with add action does when inputs already exists', () => {
        const state = {input: [1, 2, 3]} as InputState;
        const action = actionCreators.add(4);
        const result = reducer(state, action);
        expect(result.input.length).toBe(4);
    });

    it('reducer with clear action clears when inputs empty', () => {
        const state = {input: []} as InputState;
        const action = actionCreators.clear();
        const result = reducer(state, action);
        expect(result.input.length).toBe(0);
    });

    it('reducer with clear action clears when inputs exists', () => {
        const state = {input: [1, 2, 3]} as InputState;
        const action = actionCreators.clear();
        const result = reducer(state, action);
        expect(result.input.length).toBe(0);
    });

});