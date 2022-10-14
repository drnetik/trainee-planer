let mysql = require('mysql');

module.exports = 
{
    createTrainee: function(firstName, lastName, eMail, description, startDate, endDate)
    {
        //make id (get last from table --> make new one)
        var newTrainee = new Trainee;
        newTrainee.firstName = firstName;
        newTrainee.lastName = lastName
        newTrainee.eMail = eMail;
        newTrainee.description = description;
        newTrainee.startDate = startDate;   //YYYY-MM-DD
        newTrainee.endDate = endDate;       //YYYY-MM-DD
        newTrainee.id = getTraineeId();
        insertTrainee(newTrainee);
    },
    createTrainer: function(firstName, lastName, eMail)
    {
        //make id (get last from table --> make new one)
        var newTrainer = new Trainer;
        newTrainer.firstName = firstName;
        newTrainer.lastName = lastName
        newTrainer.eMail = eMail;
        newTrainer.id = getTrainerId();
        insertTrainer(newTrainer);
    },
    deleteTrainee: function(id)
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
            var sql = `DELETE FROM trainee WHERE id = \'${id}\'`;
            connection.query(sql, function (err, result) {
            if (err) throw err;
            });    
        });
    },
    deleteTrainer: function(id)
    {
        var sql = "SELECT * FROM trainer";
        if(String(id) != "all")
        {
            sql += ` WHERE id = ${id}`;
        }
        const getdata = new Promise((resolve, reject) => {
            let connection = mysql.createConnection({
                host: 'localhost',
                user: 'lukas',
                password: 'none',
                database: "main"
            });
            connection.connect( function(err)
            {
                if(err)
                {
                    return console.error(err.message);
                }
                connection.query(sql, function (err, result) {
                if (err) throw err;
                if(result != undefined)
                {
                    resolve(result);
                }else
                {
                    reject(new error("failed to load data"));
                }
                });    
            });
        });
        return getdata;
    },
    getTrainee: function(id)
    {
        var sql = "SELECT * FROM trainee";
        if(String(id) != "all")
        {
            sql += ` WHERE id = ${id}`;
        }
        const getdata = new Promise((resolve, reject) => {
            let connection = mysql.createConnection({
                host: 'localhost',
                user: 'lukas',
                password: 'none',
                database: "main"
            });
            connection.connect( function(err)
            {
                if(err)
                {
                    return console.error(err.message);
                }
                connection.query(sql, function (err, result) {
                if (err) throw err;
                if(result != undefined)
                {
                    resolve(result);
                }else
                {
                    reject(new error("failed to load data"));
                }
                });    
            });
        });
        return getdata;
    },
    getTrainer: function(id)
    {
        var sql = "SELECT * FROM trainer";
        if(String(id) != "all")
        {
            sql += ` WHERE id = ${id}`;
        }
        const getdata = new Promise((resolve, reject) => {
            let connection = mysql.createConnection({
                host: 'localhost',
                user: 'lukas',
                password: 'none',
                database: "main"
            });
            connection.connect( function(err)
            {
                if(err)
                {
                    return console.error(err.message);
                }
                connection.query(sql, function (err, result) {
                if (err) throw err;
                if(result != undefined)
                {
                    resolve(result);
                }else
                {
                    reject(new error("failed to load data"));
                }
                });    
            });
        });
        return getdata;
    },
    addTraineeAbility: function(abilityId, traineeId){
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
            var sql = `INSERT INTO completed_ability (abilityId, TraineeId) VALUES ('${abilityId}','${traineeId}')`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    },
    addTraineeAbility: function(abilityId, traineeId){
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
            var sql = `DELETE FROM completed_ability WHERE abilityId = '${abilityId}' AND TraineeId = '${traineeId}'`;
            connection.query(sql, function (err, result, field) {
                if (err) throw err;
            });
        });
    }
}

class Person
{
    firstName;
    lastName;
    eMail;
    id;
};

class Trainee extends Person
{
    startDate;
    endDate;
    description;
}

class Trainer extends Person
{

}

function getTraineeId()
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
            var sql = "SELECT id FROM trainee";
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
    return id;
}

function getTrainerId()
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
            var sql = "SELECT id FROM trainer";
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
    return id;
}

function insertTrainee(traineeIn)
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
        var sql = `INSERT INTO trainee (id, firstName, lastName, eMail, description, startDate, endDate) VALUES (${traineeIn.id}, \'${traineeIn.firstName}\', \'${traineeIn.lastName}\', \'${traineeIn.eMail}\', \'${traineeIn.description}\', \'${traineeIn.startDate}\', \'${traineeIn.endDate}\')`;
        //sql string for trainee as seen in beschreibung.txt
        connection.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}

function insertTrainer(trainerIn)
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
        var sql = `INSERT INTO trainer (id, firstName, lastName, eMail) VALUES (${trainerIn.id}, \'${trainerIn.firstName}\', \'${trainerIn.lastName}\', \'${trainerIn.eMail}\')`;
        //sql string for trainer as seen in beschreibung.txt
        connection.query(sql, function (err, result) {
            if (err) throw err;
        });
    });
}
