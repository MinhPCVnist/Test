const express = require("express");
const router = express.Router();

const ToDoController = require(`../toDo/toDo.controller`);

router.get('/', ToDoController.getToDoList);
// API lấy danh sách việc cần làm
router.post('/', ToDoController.addToDo);
// API tạo mới
router.patch('/:id', ToDoController.editToDo);
// APi sửa thông tin
router.delete('/:id', ToDoController.deleteToDo);
// API xóa 

router.get('/search', ToDoController.searchByName);
// API tìm kiếm theo tên

module.exports = router;