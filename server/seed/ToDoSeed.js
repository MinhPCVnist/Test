const { ToDo } = require("../models");
const mongoose = require("mongoose");

let dbConnect = () => {
    let connectOptions = process.env.DB_AUTHENTICATION === 'true' ?
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: process.env.DB_USERNAME,
            pass: process.env.DB_PASSWORD,
        } : {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    
    let db =  mongoose.createConnection('mongodb://localhost:27017/toDoList',
         connectOptions);
    
    return db;
}

const db = dbConnect();

ToDoSeed = async function () {
    ToDo(db).deleteMany().then(function () {
        console.log("user data is cleared");
    }).catch(function (error) {
        console.log(error);
    });

    await ToDo(db).create([
        {
            name: "Đi thực tập",
            description: "Đi thực thực tập",
            dueDate: new Date("06/06/2022"),
            status: false,
            piority: 1
        },
        {
            name: "Đi thực tập 2",
            description: "Đi thực thực tập 2",
            dueDate: new Date("06/06/2022"),
            status: false,
            piority: 1
        }
    ]);

    console.log("seeded todo ok");
    await db.close();
}

ToDoSeed().then(() => {
    console.log("seed todo ok");
}).catch( err => {
    console.log(err);
})