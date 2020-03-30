const express = require('express');
const router = express.Router();

const { getTasks, rewriteTasks } = require('../../helpers/functions');

router.post('/checknote', (req, res) => {
    let editedTaskId = req.body.taskId;
    let userId = req.body.userId;
    let tasks = getTasks(userId);

    tasks.forEach((task, index) => {
        if (index === editedTaskId) {
            task.check = !task.check;
        }
    });

    rewriteTasks(userId, tasks);

    res.redirect("/");
})

module.exports = router;