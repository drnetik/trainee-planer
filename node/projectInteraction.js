let mysql = require('mysql');

module.exports = 
{
    createProject: function(description, trainerId, taskDescription, goalDescription, playBookDescription)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        connection.connect(function(err)
        {
            if(err)
            {
                return console.error(err.message);
            }
            var sql = `INSERT INTO project (id, description, trainerId, taskDescription, goalDescription, playbook) VALUES (\'${getProjectId()}\', \'${description}\', \'${trainerId}\', \'${taskDescription}\', \'${goalDescription}\', \'${playBookDescription}\')`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    
    },
    deleteProject: function(id,description, trainerId, taskDescription, goalDescription, playBookDescription)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        connection.connect(function(err)
        {
            if(err)
            {
                return console.error(err.message);
            }
            var sql = `DELETE FROM project WHERE id = \'${id}\'`;
            connection.query(sql, function (err, result, field) {
            if (err) throw err;
            });    
        });
    },
    changeGoal: function(id, goalDescription)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        let id = 0;
        const change = new Promise((resolve, reject) => {
            connection.connect(function(err)
            {
                if(err)
                {
                    reject(console.error(err.message));
                }
                var sql = `UPDATE project SET goalDescription = ${goalDescription} WHERE id = ${id}`;
                connection.query(sql, function (err, result, field) {
                if (err) throw err;
                if (err) reject(err);
                resolve(result);
                });
            });
        });
    },
    chnagePlayBook: function(id, newPlayBook)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        let id = 0;
        const change = new Promise((resolve, reject) => {
            connection.connect(function(err)
            {
                if(err)
                {
                    reject(console.error(err.message));
                }
                var sql = `UPDATE project SET playbook = ${newPlayBook} WHERE id = ${id}`;
                connection.query(sql, function (err, result, field) {
                if (err) throw err;
                if (err) reject(err);
                resolve(result);
                });
            });
        });
    },
    chnageTaskDescription: function(id, newTaskDescription)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        let id = 0;
        const change = new Promise((resolve, reject) => {
            connection.connect(function(err)
            {
                if(err)
                {
                    reject(console.error(err.message));
                }
                var sql = `UPDATE project SET taskDescription = ${newTaskDescription} WHERE id = ${id}`;
                connection.query(sql, function (err, result, field) {
                if (err) throw err;
                if (err) reject(err);
                resolve(result);
                });
            });
        });
    },
    changeDescription: function()
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        let id = 0;
        const change = new Promise((resolve, reject) => {
            connection.connect(function(err)
            {
                if(err)
                {
                    reject(console.error(err.message));
                }
                var sql = `UPDATE project SET description = ${newDescription} WHERE id = ${id}`;
                connection.query(sql, function (err, result, field) {
                if (err) throw err;
                if (err) reject(err);
                resolve(result);
                });
            });
        });
    },
    chnageTrainer: function(id, newTrainerId)
    {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'lukas',
            password: 'none',
            database: "main"
        });
        let id = 0;
        const change = new Promise((resolve, reject) => {
            connection.connect(function(err)
            {
                if(err)
                {
                    reject(console.error(err.message));
                }
                var sql = `UPDATE project SET trainerId = ${newTrainerId} WHERE id = ${id}`;
                connection.query(sql, function (err, result, field) {
                if (err) throw err;
                if (err) reject(err);
                resolve(result);
                });
            });
        });
    }
}

class project
{
    id;
    description;
    trainerId;
    taskDescription;
    goalDescription;
    playBookDescription;
};

function getProjectId()
{
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'lukas',
        password: 'none',
        database: "main"
    });
    let id = 0;
    const getid = new Promise((resolve, reject) => {
        connection.connect(function(err)
        {
        	if(err)
        	{
                reject(console.error(err.message));
        	}
            var sql = "SELECT id FROM project";
            //gets all id's from the projects and makes a new one (last +1)
            connection.query(sql, function (err, result, field) {
            if (err) throw err;
            if (err) reject(err);
            //array of numbers 1 - result.length
            var used = new Array(result.length);
            for(let i = 0; i < result.length; i++)
            {
                used[i] = i;
            }
            //go through result --> delete all in used that are in result --> first in used = unused
            for(let i = 0; i < result.length; i++)
            {
                const index = used.indexOf(result[i]);
                used.splice(index,1);
            }
            if(result.length > 0)
            {
                id = (used[0]);
            }else 
            {
                id = 0;
            }
            resolve(id);
            });
        });
    });
    return getid;
}