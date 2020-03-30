const fs = require('fs');
const path = require('path');

const path_to_user = path.join(__dirname, '../data/users.json');
const path_to_tasks = path.join(__dirname, '../data/tasks.json');

const getTasks = (userId) => {
    console.log('gettask');
    let tasks = [];
    if (fs.existsSync(path_to_user)) {
        const file = fs.readFileSync(path_to_tasks, 'utf-8');

        if(file.length) {
            tasks = JSON.parse(file).find(task => task.userId == userId).tasks;
        }

        if(tasks) {
            return tasks;
        } else {
            return [];
        }
    }
}

const rewriteTasks = (id, tasks) => {
    let json = [];

    if (fs.existsSync(path_to_tasks)) {
        const file = fs.readFileSync(path_to_tasks, 'utf8');

        if (file.length) {
            json = JSON.parse(file);
        }
    }

    json[json.findIndex(task => task.userId === id)].tasks = tasks;

    json = JSON.stringify(json, null, 4);

    fs.writeFileSync(path_to_tasks, json, 'utf8');
}

module.exports.getTasks = getTasks;
module.exports.rewriteTasks = rewriteTasks;