import React, { Component, useEffect }  from 'react';
//import { full_list } from "./getAll.js";
import { getByIdTrainer, getByIdTrainee, getIdByCurrentProjects, getByIdProjects, getByIdAbilitys } from "./getAll.js";
import './list.css';
import axios from 'axios';
import { useAsync } from "react-async"

//build page get datafrom full list --> get called by content_page --> function dependent on state

export function Trainee()
{   
    var full_list = [];

    const getreq = new Promise((resolve, reject) =>{
        axios.get(`http://localhost:3001/trainee/?id=all`)
        .then(res => {
            full_list = res.data;
        }).then(()=>{
            resolve(full_list)
        }).catch(()=>{
            reject(console.error("failed to load data"));
        });
        /*
        fetch('http://localhost:3001/trainee/?id=all')
        .then((response) => response.json())
        .then((data) => { 
            //console.log(data);
            full_list = data;
            if(full_list != [] || full_list == undefined){
                resolve(data);
            }else{
                reject(console.error("failed to load data"));
            }
        });
        */
    });

    //useEffect(async ()=>{
    //    await getreq.then((value)=>{console.log(value);});
    //});

    getreq.then((value)=>{console.log(value);});

    var trainee_list; //html
    
    var trainee_class_list = new Array(full_list.length);
    for(let i = 0; i < full_list.length; i++)
    {
        trainee_class_list[i] = new trainee();
    }
    for(let i = 0; i < full_list.length; i++)
    {
        trainee_class_list[i].id = full_list[i]["id"];
        trainee_class_list[i].lastName = full_list[i]["lastName"];
        trainee_class_list[i].firstName = full_list[i]["fristName"];
        trainee_class_list[i].eMail = full_list[i]["eMail"];
        trainee_class_list[i].description = full_list[i]["description"];
        trainee_class_list[i].startDate = full_list[i]["startDate"];
        trainee_class_list[i].endDate = full_list[i]["endDate"];
    }
    //make random list
    //convert list of trainee to html
    trainee_list = [];
    for(let i = 0; i < trainee_class_list.length; i++)
    {
        var eMail_out = trainee_class_list[i].eMail + `@gmail.com`;
        var output = `${trainee_class_list[i].lastName}\t, ${trainee_class_list[i].firstName}  \t-  ${eMail_out}`;
        trainee_list.push(<li key={i} className="trainee_list"><button onClick={()=>getByIdTrainee(i)} >{output}</button></li>);
    }
    //TODO 
    //irgendwie muss man einfach nur drauf warten, dass das Promise fertig ist --> irgendwie await einbauen, so, dass es react nicht stört
    /*
    let id = [1,2,3,3];
    let firstName = ["Paul","Hans","Peter","Fritz"];
    let lastName = ["Schmid","Müller","Schneider","Weber"];
    let eMail = ["etwas","nichts","nochwas","paul"];
    let description = ["-","...","--","-.-"];
    let startDate = ["2000-01-01","2000-01-02","2000-01-03","2000-01-03"];
    let endDate = ["2001-01-01","2001-01-02","2001-01-03","2001-01-03"];
    */
    return(
        trainee_list
    )
}


class trainee
{
    id;
    firstName;
    lastName;
    eMail;
    descrption;
    startDate;
    endDate;
}