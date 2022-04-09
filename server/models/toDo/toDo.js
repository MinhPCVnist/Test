const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String
        },
        dueDate: {
            type: Date
        },
        status: {
            type: Boolean,
            default: false
        },
        piority: {
            type: Number,
            default: 1
        }
    }
)

module.exports = (db) => {
    if (!db.models.ToDo) return db.model("ToDo", ToDoSchema);
    return db.models.ToDo;
}