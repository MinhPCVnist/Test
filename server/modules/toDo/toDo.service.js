const mongoose = require("mongoose");
const { ToDo } = require("../../models");
const { db } = require('../../helpers/dbHelper');

// Lấy danh sách toàn bộ các việc cần làm
exports.getToDoList = async () => {
    //console.log("get to do list");
    let toDoList =  await ToDo(db).find();
    //console.log(toDoList);
    return toDoList;
}

// Phục vụ cho thanh tìm kiếm theo tên việc cần làm
exports.searchByName = async (data) => {
    //console.log(data[0]);
    let toDoList =  await ToDo(db).find();
    
    return toDoList.filter((e) => { 
        let nameList = e.name;
        return nameList.includes(data[0]);
    });
}

// Thêm việc cần làm mới
exports.addToDo = async (data) => {
    const { name, description, dueDate, status, piority } = data;

    const newToDo = await ToDo(db).create({
        name: name,
        description: description,
        dueDate: dueDate,
        status: status,
        piority: piority
    })

    const addedToDo = await ToDo(db).findById(newToDo._id);

    return addedToDo;
}

// Sửa việc cần làm
exports.editToDo = async(id, data) => {
    const { name, description, dueDate, status, piority } = data;

    await ToDo(db).findByIdAndUpdate(id, 
        {
            $set: {
                name: name,
                description: description,
                dueDate: dueDate,
                status: status,
                piority: piority
            }
        }, { new: true });

    const editedToDo = await ToDo(db).findById(id);

    return editedToDo;
}

// Xóa việc cần làm
exports.deleteToDo = async (id) => {
    const deletedToDo = await ToDo(db).findOneAndDelete({ _id: id });
    return deletedToDo;
}