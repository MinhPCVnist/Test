const openApi_toDoRoute = {
    "/toDo": {
        "get": {
            "tags": ["ToDoList"],
            "description": "Get all To do list",
            "operationId": "getToDoList",
            "parameters": [],
            "responses": {
                "200": {
                    "description": "get to do list success",
                    "content": {
                        "application/json" : {
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                },
                "400": {
                    "description": "get to do list false",
                    "content": {}
                } 
            }
        },
        "post": {
            "tags": ["ToDoList"],
            "description": "Create a To do",
            "operationId": "createToDo",
            "parameters": [],
            "requestBody": {
                "description": "Create to do",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object"
                        }
                    },
                    "application/xml": {
                        "schema": {
                            "type": "object"
                        }
                    }
                },
                "required": true
            },
            "responses": {
                "200": {
                    "description": "create to do success",
                    "content": {
                        "application/json" : {
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                },
                "400": {
                    "description": "create to do false",
                    "content": {}
                } 
            },
            "x-codegen-request-body-name": "body"
        },
    },
    "/toDo/{id}": {
        "patch": {
            "tags": ["ToDoList"],
            "description": "Edit a To do",
            "operationId": "editToDo",
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "Enter id to edit",
                "required": true,
                "schema": {
                    "type": "string"
                }
            }],
            "requestBody": {
                "description": "Edit to do",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object"
                        }
                    },
                    "application/xml": {
                        "schema": {
                            "type": "object"
                        }
                    }
                },
                "required": true
            },
            "responses": {
                "200": {
                    "description": "edit to do success",
                    "content": {
                        "application/json" : {
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                },
                "400": {
                    "description": "edit to do false",
                    "content": {}
                } 
            },
            "x-codegen-request-body-name": "body"
        },
        "delete": {
            "tags": ["ToDoList"],
            "description": "Delete a To do",
            "operationId": "deleteToDo",
            "parameters": [{
                "name": "id",
                "in": "path",
                "description": "Enter id to delete",
                "required": true,
                "schema": {
                    "type": "string"
                }
            }],
            "responses": {
                "200": {
                    "description": "delete to do success",
                    "content": {
                        "application/json" : {
                            "schema": {
                                "type": "object"
                            }
                        }
                    }
                },
                "400": {
                    "description": "delete to do false",
                    "content": {}
                } 
            },
            "x-codegen-request-body-name": "body"
        }
    }
}

module.exports = openApi_toDoRoute;