import { useState } from "react";
import './Student.css';

export default function Studentregfrom(){

const [name,setName]=useState("");
const [course,setCourse]=useState("");
const [regNo,setRegNo]=useState("");
const [rollNo,setRollNo]=useState("");
const [duration,setDuration]=useState("");

const handleNameChange=(e)=>{

if(e.target.value.length < 10){
setName(e.target.value)
}

}

function handleFormSubmit(e){

    e.preventDefault();

    let obj={
    name:name,
    regNo:regNo,
    course:course,
    rollNo:rollNo,
    duration:duration
    }
    fetch("http://localhost:8080/api/student",{
        method:'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(obj)
    })
    console.log(obj)

}

return(

<>

<form onSubmit={handleFormSubmit}>

<input
type="text"
name="fname"
placeholder="first name"
onChange={handleNameChange}
value={name}
/>

<input
type="text"
name="course"
placeholder="course"
onChange={(e)=>setCourse(e.target.value)}
value={course}
/>

<input
type="text"
name="regNo"
placeholder="regNo"
onChange={(e)=>setRegNo(e.target.value)}
value={regNo}
/>

<input
type="text"
name="rollNo"
placeholder="rollNo"
onChange={(e)=>setRollNo(e.target.value)}
value={rollNo}
/>

<input
type="text"
name="duration"
placeholder="duration"
onChange={(e)=>setDuration(e.target.value)}
value={duration}
/>

<input type="submit"/>

</form>



<div>

Name: {name} <br/>
Course: {course} <br/>
RegNo: {regNo} <br/>
RollNo: {rollNo} <br/>
Duration: {duration}

</div>

</>

)

}