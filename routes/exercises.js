const router = require("express").Router();
let Exercise = require("../models/exercise.model");
/**
 * @api {GET} /exercises get all exercises
 * @apiName GetExercises
 * @apiGroup Exercises
 * @apiVersion  0.0.1
 *
 * @apiSuccess (200) {String-Hash} _id collection id
 * @apiSuccess (200) {String} username description
 * @apiSuccess (200) {String} description exercise's description
 * @apiSuccess (200) {Number} duration exercise duration
 * @apiSuccess (200) {Date} date user's inserted date
 * @apiSuccess (200) {Date} createdAt creation date
 * @apiSuccess (200) {Date} updatedAt update date
 *
 * @apiSuccessExample {type} Success-Response:
 *        {
 *        "_id": "5ff4fe9cd2ecbe46af084000",
 *        "username": "hazem",
 *        "description": "run",
 *        "duration": 9,
 *        "date": "2021-01-05T23:59:10.600Z",
 *        "createdAt": "2021-01-06T00:04:44.754Z",
 *        "updatedAt": "2021-01-06T00:04:44.754Z",
 *        "__v": 0
 *        }
 */
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});
/**
 * @api {POST} /exercises/add add new exercise
 * @apiName AddExercise
 * @apiGroup Exercises
 * @apiVersion  0.0.1
 *
 * @apiParam  {String} username description
 * @apiParam  {String} description exercise's description
 * @apiParam  {Number} duration exercise duration
 * @apiParam  {Date} date user's inserted date
 *
 * @apiParamExample  {type} Request-Example:
 *
 * {
 *  "username": "kol",
 *  "description": "asss",
 *  "duration": "10",
 *  "date": "2022-01-05T23:59:10.600Z"
 * }
 *
 * @apiSuccessExample {String} Success-Response:
 * Exercise added!
 */
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
/**
 * @api {GET} /exercises/:id Select a specific exercise
 * @apiName SelectExercise
 * @apiGroup Exercises
 * @apiVersion  0.0.1
 *
 * @apiSuccess (200) {String-Hash} _id collection id
 * @apiSuccess (200) {String} username description
 * @apiSuccess (200) {String} description exercise's description
 * @apiSuccess (200) {Number} duration exercise duration
 * @apiSuccess (200) {Date} date user's inserted date
 * @apiSuccess (200) {Date} createdAt creation date
 * @apiSuccess (200) {Date} updatedAt update date
 *
 * @apiSuccessExample {type} Success-Response:
 *     {
 *     "_id": "5ff4fe9cd2ecbe46af084000",
 *     "username": "hazem",
 *     "description": "run",
 *     "duration": 9,
 *     "date": "2021-01-05T23:59:10.600Z",
 *     "createdAt": "2021-01-06T00:04:44.754Z",
 *     "updatedAt": "2021-01-06T00:04:44.754Z",
 *     "__v": 0
 *     }
 */
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});
/**
 *
 * @api {DELETE} /exercises/:id Delete Exercise
 * @apiName DeleteExercise
 * @apiGroup Exercises
 * @apiVersion  0.0.1
 *
 * @apiSuccessExample {type} Success-Response:
 * Exercise deleted.
 */
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

/**
 * @api {POST} /exercises/update/:id Update Exercise
 * @apiName UpdateExercise
 * @apiGroup Exercises
 * @apiVersion  0.0.1
 *
 * @apiParam  {String} username description
 * @apiParam  {String} description exercise's description
 * @apiParam  {Number} duration exercise duration
 * @apiParam  {Date} date user's inserted date
 *
 * @apiParamExample  {String-Hash} Request-Example:
 *  {
 *  "username": "walkin",
 *  "description": "as",
 *  "duration": "152",
 *  "date": "2023-01-05T23:59:10.600Z"
 *  }
 *
 * @apiSuccessExample {String} Success-Response:
 * Exercise updated!
 */
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
