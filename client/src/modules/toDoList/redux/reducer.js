import { ToDoConstants } from "./constants";

const initState = {
    list: [],
    isLoading: true
}

export function toDoList(state = initState, action) {
    
    switch(action.type) {
        case ToDoConstants.GET_TO_DO_LIST_REQUEST:
        case ToDoConstants.ADD_TO_DO_LIST_REQUEST:
        case ToDoConstants.EDIT_TO_DO_LIST_REQUEST:
        case ToDoConstants.DELETE_TO_DO_LIST_REQUEST:
        case ToDoConstants.SEARCH_TO_DO_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case ToDoConstants.GET_TO_DO_LIST_FALSE:
        case ToDoConstants.ADD_TO_DO_LIST_FALSE:
        case ToDoConstants.EDIT_TO_DO_LIST_FALSE:
        case ToDoConstants.DELETE_TO_DO_LIST_FALSE:       
        case ToDoConstants.SEARCH_TO_DO_LIST_FALSE:           
            return {
                ...state,
                isLoading: false
            }

        case ToDoConstants.GET_TO_DO_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isLoading: false
            }

        case ToDoConstants.ADD_TO_DO_LIST_SUCCESS:
            return {
                ...state,                    
                list: [action.payload, ...state.list],
                isLoading: false
            }

        case ToDoConstants.EDIT_TO_DO_LIST_SUCCESS:
            return {
                ...state,
                list: state.list.map(o => ((o._id === action.payload._id) ? action.payload : o)),
                isLoading: false
            }

         case ToDoConstants.DELETE_TO_DO_LIST_SUCCESS:
            return {
                ...state,
                list: state.list.filter(o => (o._id !== action.payload._id)),
                isLoading: false
            }

        case ToDoConstants.SEARCH_TO_DO_LIST_SUCCESS:
            return {
                ...state,                    
                list: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}