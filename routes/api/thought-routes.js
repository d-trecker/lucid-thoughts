const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');



//Get all thoughts at: /api/thoughts
router.route('/').get(getAllThought);

//Get one thought at: /api/thoughts/<thoughtId>
router.route('/:id').get(getThoughtById);

//Add thought at: /api/thoughts/<userId>
router.route('/:userId').post(addThought);

//Update thought at: /api/thoughts/<thoughtId>
router.route('/:id').put(updateThought);

//Delete thought at: /api/thoughts/<userId>/<thoughtId>
router.route('/:id').delete(removeThought);

//Add reaction at: /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//Delete reaction at: /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;