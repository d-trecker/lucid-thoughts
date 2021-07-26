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

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions').delete(removeReaction);

module.exports = router;