const router = require('express').Router();
let User = require('../models/user.model');

/**
 * @api {get} / Request Users information
 * @apiName GetUsers
 * @apiGroup User
 *
 *
 * @apiSuccess {String-Hash} id id of the user.
 * @apiSuccess {String} username  username of the User.
 * @apiSuccess {Date} CreatedAt  Created date of the User.
 * @apiSuccess {Date} UpdatedAt  Updated date of the User.
 * @apiSuccess {Number} __v  version of the user model.
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
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     
 *     []
 *     
 */
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;