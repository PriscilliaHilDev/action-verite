import { NB_PLAYERS, LIST_PLAYERS, CURRENT_PLAYER, SESSION_PLAYER } from "../Actions/types";

const initStatePlayers = {nbPlayers : 0, listPlayers: [], currentPlayer:null, session:[]};

const players = (state = initStatePlayers, action) => {
    // console.log(state)

    switch (action.type) {

        case NB_PLAYERS :
    
            return {...state, nbPlayers: action.payload, listPlayers: []};
            break;
        case LIST_PLAYERS:
                return {...state, listPlayers:[...state.listPlayers, action.payload] }
        
            break;
        case CURRENT_PLAYER:

            return {...state, currentPlayer:action.payload}
            break;
        case SESSION_PLAYER:

            return  {...state, session:[...state.session, action.payload]};
            break;

    
        default:
            return state
            break;
    }
    
    
}

export default players;
