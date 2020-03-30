const express = require('express');
const router = express.Router();

const { getTasks, rewriteTasks } = require('../../helpers/functions');

router.post('/editnote', (req, res) => {
    let editedTaskId = req.body.taskId;
    let userId = req.body.userId;
    let taskNewText = req.body.new;
    let tasks = getTasks(userId);

    tasks.forEach((task, index) => {
        if (index === editedTaskId) {
            task.text = taskNewText;
        }
    });

    rewriteTasks(userId, tasks);

    res.redirect("/");
})

module.exports = router;