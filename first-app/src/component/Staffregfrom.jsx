import { useState } from "react";
import './Student.css';

export default function Staffregform(){

const [name,setName]=useState("");
const [department,setDepartment]=useState("");
const [staffId,setStaffId]=useState("");
const [role,setRole]=useState("");
const [experience,setExperience]=useState("");

function handleFormSubmit(e){

e.preventDefault();

let obj={
name:name,
staffId:staffId,
department:department,
role:role,
experience:experience
}

console.log(obj)

}

return(

<>

<form onSubmit={handleFormSubmit}>

<input
type="text"
placeholder="Staff Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Staff ID"
value={staffId}
onChange={(e)=>setStaffId(e.target.value)}
/>

<input
type="text"
placeholder="Department"
value={department}
onChange={(e)=>setDepartment(e.target.value)}
/>

<input
type="text"
placeholder="Role"
value={role}
onChange={(e)=>setRole(e.target.value)}
/>

<input
type="text"
placeholder="Experience"
value={experience}
onChange={(e)=>setExperience(e.target.value)}
/>

<input type="submit"/>

</form>

<div>

Name: {name} <br/>
Staff ID: {staffId} <br/>
Department: {department} <br/>
Role: {role} <br/>
Experience: {experience}

</div>

</>

)

}