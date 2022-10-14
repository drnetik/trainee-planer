const { createTrainee , createTrainer, deleteTrainee, deleteTrainer } = require('./userInteraction');
const {getTrainer, getTrainee} = require('./userInteraction');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000']
}));

const port = 3001

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('port: ', port);
    }
})

app.get('/', function(req, res) {/*leere Request bekommt nichts zurück*/});

var none_output = {
	"result":"none"
}

app.get('/trainer', function(req, res){
	id = req.query.id;
	console.log(id);
	getTrainer(id).then((value)=>{
		res.send(value);
	}).catch(err=>{
		console.log(err);
	})
});

app.get('/trainee', function(req, res) {
	id = req.query.id;
	console.log(id);
	getTrainee(id).then((value)=>{
		console.log(value);
		res.send(value);
	}).catch(err=>{
		console.log(err);
	})
});

app.get('/currentProject', function(req, res) {
	id = req.query.id;
	res.send(none_output);
});

app.get('/project', function(req, res) {
	id = req.query.id;
	res.send(none_output);
});

app.get('/ability', function(req, res) {
	id = req.query.id;
	res.send(none_output);
});
