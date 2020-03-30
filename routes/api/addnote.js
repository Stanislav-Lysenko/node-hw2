const express = require('express');
const router = express.Router();

const { getTasks, rewriteTasks } = require('../../helpers/functions');

router.post('/addnote', (req, res) => {
    let newTask = req.body.addNote;
    let tasks = getTasks(req.user.id);

    if (newTask.length){
        tasks.push({
            check: false,
            text: newTask
        });
    }

    rewriteTasks(req.user.id, tasks);

    res.redirect("/");
})

module.exports = router;