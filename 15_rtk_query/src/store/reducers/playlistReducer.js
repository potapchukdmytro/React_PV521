const initialState = {
    tracks: [],
    isLoaded: false,
    isLoading: false,
    isSuccess: false,
    isError: false
}

export function playlistReducer(state = initialState, action) {
    switch(action.type) {
        case "startLoad":
            return { ...state, isLoaded: false, isLoading: true, isSuccess: false, isError: false }
        case "loadSuccess": 
            return { 
                ...state, 
                isLoaded: true,
                isLoading: false, 
                isSuccess: true, 
                isError: false, 
                tracks: action.payload 
            }
        case "loadError": 
            return { 
                ...state,
                isLoaded: false,
                isLoading: false, 
                isSuccess: false, 
                isError: true
            }
        case "deleteTrack":
            return { ...state, isLoaded: false };
        case "updateTrack":
            return { ...state, isLoaded: false };
        case "addTrack":
            return { ...state, isLoaded: false };

        case "loadTracks":
            return { ...state, isLoaded: true, tracks: action.payload }
        default: 
            return state;
    }
}