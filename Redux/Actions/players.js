import {NB_PLAYERS, LIST_PLAYERS, CURRENT_PLAYER, SESSION_PLAYER} from './types'

export const NbOfPlayers = (payload) => ({
    type: NB_PLAYERS,
    payload
})
export const AllPlayers = (payload) => ({
    type: LIST_PLAYERS,
    payload
})
export const CurrentPlayer = (payload) => ({
    type: CURRENT_PLAYER,
    payload
})
export const Session = (payload) => ({
    type: SESSION_PLAYER,
    payload
})



