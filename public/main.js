let fetchFunc = async (url, info) => {
    await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(info)
    })
}

let  saveNote = async (event, userId, taskId) => {
    let info = {
        userId: userId,
        taskId: taskId,
        new: event.target.value
    }
    fetchFunc('/api/editnote', info);
}

let  checkNote = async (event, userId, taskId) => {
    let info = {
        userId: userId,
        taskId: taskId,
    }
    fetchFunc('/api/checknote', info);
}

let removeNote = async(event, userId, taskId) => {
    let info = {
        userId: userId,
        taskId: taskId,
    }
    // If you are using AJAX to send the POST request,
    // it is specifically designed to not change your url.
    fetchFunc('/api/removenote', info)
        .then(window.location.href = '/');
}




