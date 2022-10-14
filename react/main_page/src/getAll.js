import { content_page } from "./App.js";
import { currentId, sideData } from "./sideView.js";
import fs from 'fs';
import { currentId_context, sideData_context } from "./sideView.js";
import React from "react";
import axios from "axios";

export var full_list = [];

export default function getAllTrainer()
{
    fetch('/trainer/?id=all')
    .then((response) => response.json())
    .then((data) => { 
        full_list = data 
        current_state = web_state[2];
    });
    //window.location.reload();
}

export function getAllTrainee()
{
    axios.get(`http://localhost:3001/trainee/?id=all`)
    .then(res => {
        full_list = res.data;
    }).then(()=>{
        current_state = web_state[4];
        window.location.reload();
    });
}

export function getAllCurrentProjects()
{
    fetch('/currentProject/?id=all')
    .then((response) => response.json())
    .then((data) => { 
        full_list = data 
        current_state = web_state[0];
    });
    //window.location.reload();
}

export function getAllProjects()
{
    fetch('/project/?id=all')
    .then((response) => response.json())
    .then((data) => { 
        full_list = data 
        current_state = web_state[3];
    });
    //window.location.reload();
}

export function getAllAbilitys()
{
    fetch('/ability/?id=all')
    .then((response) => response.json())
    .then((data) => { 
        full_list = data 
        current_state = web_state[4];
    });
    //window.location.reload();
}

export let web_state = ["ProjectsNow", "Trainee", "Trainer", "Projects", "Abilitys"];
export let current_state = web_state[0];

export function getByIdTrainer(id)
{
    currentId = id;
    fetch(`/trainer/?id=${id}`)
    .then((response) => response.json())
    .then((data) => { sideData = data; });
    window.location.reload();
}

export function getByIdTrainee(id)
{
    currentId = id;
    fetch(`/trainee/?id=${id}`)
    .then((response) => response.json())
    .then((data) => { sideData = data; });
    window.location.reloads();
}

export function getByIdCurrentProjects(id)
{
    currentId = id;
    fetch(`/currentProject/?id=${id}`)
    .then((response) => response.json())
    .then((data) => { sideData = data; });
    window.location.reload();
}

export function getByIdProjects(id)
{
    currentId = id;
    fetch(`/project/?id=${id}`)
    .then((response) => response.json())
    .then((data) => { sideData = data; });
    window.location.reload();
}

export function getByIdAbilitys(id)
{
    currentId = id;
    fetch(`/ability/?id=${id}`)
    .then((response) => response.json())
    .then((data) => { sideData = data; });
    window.location.reload();
}