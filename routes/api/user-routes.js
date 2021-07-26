const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

//Add friend at: /api/<:userId>/friends
router.route('/:userId/friends/:friendId').post(addFriend);

//Delete friend at: /api/<:userId>/friends/<:friendId>
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;