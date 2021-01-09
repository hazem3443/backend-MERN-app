define({ "api": [
  {
    "type": "post",
    "url": "/users/add",
    "title": "2.Add new User",
    "name": "AddUser",
    "group": "1._User",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username string</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "{\n    \"username\" : name String\n}",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "status : user added",
          "type": "type"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "Error: string",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "1._User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "1.Request Users Data",
    "name": "GetUsers",
    "group": "1._User",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"5ff4fd4ed2ecbe46af083ffe\",\n    \"username\": \"hazem\",\n    \"createdAt\": \"2021-01-05T23:59:10.600Z\",\n    \"updatedAt\": \"2021-01-05T23:59:10.600Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n\nError: string",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "1._User"
  },
  {
    "type": "POST",
    "url": "/exercises/add",
    "title": "3.Add new exercise",
    "name": "AddExercise",
    "group": "2._Exercises",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>exercise's description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>exercise duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>user's inserted date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n \"username\": \"kol\",\n \"description\": \"asss\",\n \"duration\": \"10\",\n \"date\": \"2022-01-05T23:59:10.600Z\"\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Exercise added!",
          "type": "String"
        }
      ]
    },
    "filename": "routes/exercises.js",
    "groupTitle": "2._Exercises"
  },
  {
    "type": "DELETE",
    "url": "/exercises/:id",
    "title": "5.Delete Exercise",
    "name": "DeleteExercise",
    "group": "2._Exercises",
    "version": "0.0.1",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Exercise deleted.",
          "type": "type"
        }
      ]
    },
    "filename": "routes/exercises.js",
    "groupTitle": "2._Exercises"
  },
  {
    "type": "GET",
    "url": "/exercises",
    "title": "1.Get all exercises",
    "name": "GetExercises",
    "group": "2._Exercises",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String-Hash",
            "optional": false,
            "field": "_id",
            "description": "<p>collection id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>exercise's description</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>exercise duration</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>user's inserted date</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\": \"5ff4fe9cd2ecbe46af084000\",\n\"username\": \"hazem\",\n\"description\": \"run\",\n\"duration\": 9,\n\"date\": \"2021-01-05T23:59:10.600Z\",\n\"createdAt\": \"2021-01-06T00:04:44.754Z\",\n\"updatedAt\": \"2021-01-06T00:04:44.754Z\",\n\"__v\": 0\n}",
          "type": "type"
        }
      ]
    },
    "filename": "routes/exercises.js",
    "groupTitle": "2._Exercises"
  },
  {
    "type": "GET",
    "url": "/exercises/:id",
    "title": "2.Select a specific exercise",
    "name": "SelectExercise",
    "group": "2._Exercises",
    "version": "0.0.1",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String-Hash",
            "optional": false,
            "field": "_id",
            "description": "<p>collection id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>exercise's description</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>exercise duration</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>user's inserted date</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>creation date</p>"
          },
          {
            "group": "200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>update date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\": \"5ff4fe9cd2ecbe46af084000\",\n\"username\": \"hazem\",\n\"description\": \"run\",\n\"duration\": 9,\n\"date\": \"2021-01-05T23:59:10.600Z\",\n\"createdAt\": \"2021-01-06T00:04:44.754Z\",\n\"updatedAt\": \"2021-01-06T00:04:44.754Z\",\n\"__v\": 0\n}",
          "type": "type"
        }
      ]
    },
    "filename": "routes/exercises.js",
    "groupTitle": "2._Exercises"
  },
  {
    "type": "POST",
    "url": "/exercises/update/:id",
    "title": "4.Update Exercise",
    "name": "UpdateExercise",
    "group": "2._Exercises",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>exercise's description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>exercise duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>user's inserted date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"username\": \"walkin\",\n\"description\": \"as\",\n\"duration\": \"152\",\n\"date\": \"2023-01-05T23:59:10.600Z\"\n}",
          "type": "String-Hash"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Exercise updated!",
          "type": "String"
        }
      ]
    },
    "filename": "routes/exercises.js",
    "groupTitle": "2._Exercises"
  }
] });
