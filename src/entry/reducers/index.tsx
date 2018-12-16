export const countReducer = (state = 0, action: any) => {
    if (action.type === 'increase') {
        return state+1;
    } else {
        return state;
    }
}