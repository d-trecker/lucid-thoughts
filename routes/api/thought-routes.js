const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, removeThought } = require('../../controllers/thought-controller');

//, addReaction, removeReaction

//Get all thoughts at: /api/thoughts
router.route('/').get(getAllThought);

//Get one thought at: /api/thoughts/<thoughtId>
router.route('/:id').get(getThoughtById);

//Add thought at: /api/thoughts/<userId>
router.route('/:userId').post(addThought);

//Update thought at: /api/thoughts/<thoughtId>
router.route('/:id').put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:id').delete(removeThought);

// router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

// router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;