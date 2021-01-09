# APIDOC

## **apidoc.json** file [optional]
```
{
  "name": "example",
  "version": "0.1.0",
  "description": "A basic apiDoc example"
}
```
From **apidoc.json** apiDoc get the **name**, **version** and **description** of your project.
The file is `optional` (it depend on your template if the data is required).

<hr>

## **example.js**

```
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
```

A documentation block starts with /** and end with */.

This example describes a GET Method to request the User Information by the user's id.

@api {get} /user/:id Request User information is mandatory, without @api apiDoc ignores a documentation block.

@apiName must be a unique name and should always be used.
Format: method + path (e.g. Get + User)

@apiGroup should always be used, and is used to group related APIs together.

for more info about **apidocs params** you can [check here](https://apidocjs.com/#params)

