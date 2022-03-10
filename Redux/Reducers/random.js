import {RANDOM_QUESTION_BY_PLAYERS} from "../Actions/types";

const initStateRandom = [];

const random = (state = initStateRandom, action) => {
    console.log(action)

    switch (action.type) {

        case RANDOM_QUESTION_BY_PLAYERS:

            return [...state, action.payload]
            break;
    
        default:
            return state
            break;
    }
    
}

export default random;
