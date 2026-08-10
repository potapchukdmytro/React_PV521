const initialState = {
    balance: 0
}

export function balanceReducer(state = initialState, action) {
    switch(action.type) {
        case "deposit":
            return { ...state, balance: state.balance + action.payload }
        case "withdraw":
            if(action.payload > state.balance) {
                return state;
            } else {
                return { ...state, balance: state.balance - action.payload }
            }
        default:
            return state;
    }
}