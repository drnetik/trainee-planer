let mysql = require('mysql');

module.exports = {
    createProjectRealization: function(projectId, trainerId, traineeId, smester){
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
            var sql = `INSERT INTO project_realization (trainerId, traineeId, projectId, semester) VALUES (\'${trainerId}\', \'${traineeId}\', \'${projectId}\', \'${smester}\')`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },
    deleteProjectRealization: function(projectId, trainerId, traineeId, smester){
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
            var sql = `DELETE FROM project_realization WHERE trainerId = ${trainerId} AND traineeId = ${traineeId} AND projectId = ${projectId} and semester = ${smester}`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },



    changeProjectRealizationSemester: function(projectId, trainerId, traineeId, smester, newSemester){
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
            var sql = `UPDATE project_realization SET semester = ${newSemester} WHERE trainerId = ${traineeId} AND projectId = ${projectId} AND trainerId = ${trainerId} and semester = ${smester}`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },
    chnageProjectRealizationTrainer: function(projectId, trainerId, traineeId, smester, newTrainer){
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
            var sql = `UPDATE project_realization SET trainerId = ${newTrainer} WHERE trainerId = ${traineeId} AND projectId = ${projectId} AND trainerId = ${trainerId} and semester = ${smester}`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },
    changeProjectRealizationTrainee: function(projectId, trainerId, traineeId, smester, newTrainee){
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
            var sql = `UPDATE project_realization SET traineeId = ${newTrainee} WHERE trainerId = ${traineeId} AND projectId = ${projectId} AND trainerId = ${trainerId} and semester = ${smester}`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },
    changeProjectRealizationProject: function(projectId, trainerId, traineeId, smester, newProject){
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
            var sql = `UPDATE project_realization SET projectId = ${newProject} WHERE trainerId = ${traineeId} AND projectId = ${projectId} AND trainerId = ${trainerId} and semester = ${smester}`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    }       
}