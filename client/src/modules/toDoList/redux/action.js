import { ToDoServices } from "./service";
import { ToDoConstants } from "./constants";

export const ToDoActions = {
    getToDoList,
    addToDoList,
    editToDoList,
    deleteToDoList,
    searchToDoList
};

function getToDoList() {
    return dispatch => {
        dispatch({ type: ToDoConstants.GET_TO_DO_LIST_REQUEST});
        ToDoServices.getToDoList()
           .then(res => {
               dispatch({
                   type: ToDoConstants.GET_TO_DO_LIST_SUCCESS,
                   payload: res.data.content
               })
           })
           .catch(err => { dispatch({ type: ToDoConstants.GET_TO_DO_LIST_FALSE})})
    }
}

function addToDoList(data) {
    return dispatch => {
        dispatch({ type: ToDoConstants.ADD_TO_DO_LIST_REQUEST });
        ToDoServices.addToDoList(data)
            .then(res => {
                dispatch({
                    type: ToDoConstants.ADD_TO_DO_LIST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => { dispatch({ type: ToDoConstants.ADD_TO_DO_LIST_FALSE})})
    }
}

function editToDoList(id, data) {
    return dispatch => {
        dispatch({ type: ToDoConstants.EDIT_TO_DO_LIST_REQUEST});
        ToDoServices.editToDoList(id, data)
            .then(res => {
                dispatch({
                    type: ToDoConstants.EDIT_TO_DO_LIST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => { dispatch({ type: ToDoConstants.EDIT_TO_DO_LIST_FALSE})})
    }
}

function deleteToDoList(id) {
    return dispatch => {
        dispatch({ type: ToDoConstants.DELETE_TO_DO_LIST_REQUEST});
        ToDoServices.deleteToDoList(id)
            .then(res => {
                dispatch({
                    type: ToDoConstants.DELETE_TO_DO_LIST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => { dispatch({ type: ToDoConstants.DELETE_TO_DO_LIST_FALSE})})
    }
}

function searchToDoList(data) {
    return dispatch => {
        dispatch({ type: ToDoConstants.SEARCH_TO_DO_LIST_REQUEST});
        ToDoServices.searchToDoList(data)
           .then(res => {
               dispatch({
                   type: ToDoConstants.SEARCH_TO_DO_LIST_SUCCESS,
                   payload: res.data.content
               })
           })
           .catch(err => { dispatch({ type: ToDoConstants.SEARCH_TO_DO_LIST_FALSE})})
    }
}