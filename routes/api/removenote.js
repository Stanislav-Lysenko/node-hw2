const express = require('express');
const router = express.Router();

const { getTasks, rewriteTasks } = require('../../helpers/functions');

router.post('/removenote', (req, res) => {
    console.log('remove');
    let userId = req.user.id;
    let taskId = req.body.taskId;
    let tasks = getTasks(userId);

    tasks.splice(taskId, 1);

    rewriteTasks(userId, tasks);

    res.redirect('/');
})

module.exports = router;