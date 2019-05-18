
export const addPlayer = (name, initiative, type) => {
    return {
        type: 'ADD_PLAYER',
        payload: {
            name, initiative, type
        }
    }
}

export const removePlayer = (playerId) => {
    return {
        type: 'REMOVE_PLAYER',
        payload: playerId
    }
}