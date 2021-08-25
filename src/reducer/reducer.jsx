
import {UPDATEPAGESIZE, CHANGEPAGENUMBER, PREVIOUSPAGE, NEXTPAGE} from '../actions/actions'

const reducer = (state, action) => {
    if (action.type === UPDATEPAGESIZE) {
        return{...state, pageSize:action.payload.id, pageNumber:1}
    }
    if (action.type === CHANGEPAGENUMBER) {
        return{...state, pageNumber:action.payload.id}
    }
    if (action.type === PREVIOUSPAGE) {
        if (state.pageNumber === 1) return {...state, pageNumber:action.payload.id};
        return{...state, pageNumber:action.payload.id-1}
    }
    if (action.type === NEXTPAGE) {
        if (state.pageNumber === action.payload.id) return {...state, pageNumber:action.payload.id};
        return{...state, pageNumber:state.pageNumber+1}
    }
    return state;
}

export default reducer;