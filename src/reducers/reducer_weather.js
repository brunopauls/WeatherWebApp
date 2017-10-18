import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        // Never mutate the state directly
        // Don't do this: return state.push(action.payload.data)

        // Return a new state
        // DO this: return state.concat([action.payload.data]);

        // ES6 Syntax
        return [ action.payload.data, ...state];
    }

    return state;
}