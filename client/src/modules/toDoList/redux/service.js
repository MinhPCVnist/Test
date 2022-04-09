import axios from 'axios';

export const ToDoServices = {
    getToDoList,
    addToDoList,
    editToDoList,
    deleteToDoList,
    searchToDoList
}

function getToDoList() {
    return axios({
        url: `${process.env.REACT_APP_SERVER}/toDo`,
        method: 'GET'
    });
}

function addToDoList(data) {
    return axios({
        url: `${process.env.REACT_APP_SERVER}/toDo`,
        method: 'POST',
        data
    });
}

function editToDoList(id, data) {
    return axios({
        url: `${process.env.REACT_APP_SERVER}/toDo/${id}`,
        method: 'PATCH',
        data
    });
}

function deleteToDoList(id) {
    return axios({
        url: `${process.env.REACT_APP_SERVER}/toDo/${id}`,
        method: 'DELETE'
    });
}

function searchToDoList(params) {
    return axios({
        url: `${process.env.REACT_APP_SERVER}/toDo/search`,
        method: 'GET',
        params
    });
}