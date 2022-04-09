const ToDoService = require("./toDo.service");

exports.getToDoList = async (req, res) => {
    try {
        const toDoList = await ToDoService.getToDoList();
        res.status(200).json({
            success: true,
            content: toDoList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.searchByName = async (req, res) => {
    try {
        const toDoList = await ToDoService.searchByName(req.query);
        res.status(200).json({
            success: true,
            content: toDoList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.addToDo = async (req, res) => {
    try {
        const addDo = await ToDoService.addToDo(req.body);
        res.status(200).json({
            success: true,
            content: addDo 
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.editToDo = async (req, res) => {
    try {
        const editDo = await ToDoService.editToDo(req.params.id, req.body);
        res.status(200).json({
            success: true,
            content: editDo 
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        const deleteDo = await ToDoService.deleteToDo(req.params.id);    
        res.status(200).json({
            success: true,
            content: deleteDo
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            content: error
        })
    }
}