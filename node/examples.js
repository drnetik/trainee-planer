const { createTrainee , createTrainer, deleteTrainee} = require('./userInteraction');

//make a Trainer or a trainee
createTrainee("paul", "Schmid", "etwas@gmail.com","nichts", "2022-01-10", "2022-01-11");
createTrainer("paul", "Schmid", "etwas@gmail.com");

//delete Trainee
deleteTrainee("etwas@gmail.com");
deleteTrainer("etwas@gmail.com");