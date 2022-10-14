import React, { Component }  from 'react';
import './App.css';
import './list.css';
import getAllTrainer, {getAllTrainee, getAllCurrentProjects, getAllProjects, getAllAbilitys } from './getAll.js';
import { SideViewTrainee, SideViewTrainer, SideViewCurrentProject, SideViewProject, SideViewAbility } from './sideView.js';
import { web_state, current_state } from './getAll.js';
import { Trainee } from './list_pages';

function App() {
  document.title = 'Ausbildungsübersicht';
  return (
    <div id="body">
      <div id="side_bar">
        <button className="side_btn" role="button" id="currentProjects" onClick = {getAllCurrentProjects}>
          <p className="sideText">
            current projects
          </p>
        </button>
        <button className="side_btn" role="button" id="Trainee" onClick = {getAllTrainee}>
          <p className="sideText">
            Trainee
          </p>
        </button>
        <button className="side_btn" role="button" id="Trainer" onClick = {getAllTrainer}>
          <p className="sideText">
            Trainer
          </p>
        </button>
        <button className="side_btn" role="button" id="Projects" onClick = {getAllProjects}>
          <p className="sideText">
            Projects
          </p>
        </button>
        <button className="side_btn" role="button" id="Abilitys" onClick = {getAllAbilitys}>
          <p className="sideText">
            Abilitys
          </p>
        </button>
      </div>
      <div id="content">
        <ul id="mainList">
          {content_page()}
        </ul>
      </div>
      <div id="sideView">
        {sideViewContent()}
      </div>
    </div>
  );
}

export default App;

export function content_page(){
  switch(current_state)
  {
    case "Trainee":
      return(Trainee());
    default:
      return(Trainee());
  }
}

function sideViewContent(){
  switch(current_state)
  {
    case "ProjectNow":
      return(SideViewTrainee());
    case "Trainee":
      return(SideViewTrainee());
    default:
      return(SideViewTrainee());
  }
}