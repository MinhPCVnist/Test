const openApi_toDoRoute = require("../modules/toDo/_openapi/index");

const allAppRoute = {
    ...openApi_toDoRoute,
}

const openApiData = {
    openapi: "3.0.3",
    info: {
        title: "Api documentation",
        version: "1.0.0",
        description: "Api Doc for server",
        contact: {"email": "minhctthvn2@gmail.com"},
    },
    servers: [{
        url: "http://localhost:8000",
        description: 'Localhost server'
    }],
    tags: [
        { name: "ToDoList", description: "Api module To Do List"},
    ],
    components: {
        schemas: {},
        securitySchema: {
            bearerAuth: {
                type: "http",
                schema: "bearer",
                bearerFormat: "JWT"
            }
            /*ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "utk"
            }*/
        }
    }, 
    security: [{"bearerAuth": []}],
    paths: allAppRoute
}

module.exports = { openApiData, allAppRoute };