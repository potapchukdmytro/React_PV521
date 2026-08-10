const initialState = {
    tracks: [],
    isLoaded: false
}

export function playlistReducer(state = initialState, action) {
    switch(action.type) {
        case "loadTracks":
            return { ...state, isLoaded: true, tracks: action.payload }
        case "addTrack":
            return { ...state, isLoaded: false };
        default: 
            return state;
    }
}