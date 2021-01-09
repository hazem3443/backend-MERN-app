const router = require('express').Router();
let User = require('../models/user.model');
{
/**
 * @api {get} /users 1.Request Users Data
 * @apiName GetUsers
 * @apiGroup 1. User
 *
 * @apiVersion  0.0.1
 *
 * @apiSuccess {String} username  username of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "5ff4fd4ed2ecbe46af083ffe",
 *         "username": "hazem",
 *         "createdAt": "2021-01-05T23:59:10.600Z",
 *         "updatedAt": "2021-01-05T23:59:10.600Z",
 *         "__v": 0
 *     }     
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     
 *     Error: string
 */
}

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
{
/**
 * @api {post} /users/add 2.Add new User
 * @apiName AddUser
 * @apiGroup 1. User
 * 
 * @apiVersion  0.0.1
 * 
 * @apiParam  {String} username username string
 * 
 * @apiParamExample  {string} Example:
 * {
 *     "username" : name String
 * }
 * @apiSuccessExample {type} Success-Response:
 * status : user added
 * 
 * @apiErrorExample Error-Response:
 * Error: string
 */
 }

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  console.log("new username: "+ req.body.username);

  newUser.save()
    .then(() => res.json('status : user added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;