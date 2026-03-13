// import { useEffect, useState } from "react";
// import data from "./component/data/studentdetail.json";
// import Studentgrid from "./component/Studentgrid";
// import Studenttable from "./component/Studenttable";
// import Studentregfrom from "./component/Studentregfrom";
// export default function App() {
// const [View, setView] = useState("grid");
// const [search, setSearch] = useState("");
// const [filteredData, setFilteredData] = useState([]);
// const [data,setData]=useState([]);

// useEffect(( )=>{
//     fetch("http://localhost:8080/api/student")
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         setData(data);
//     })
// },[])

// const handleNameChange = (e) => {
//     setSearch(e.target.value);
//     setFilteredData(
//     data.filter((val) => val.name.toLowerCase().includes(e.target.value)),
//     );
// };

// return (
//     <div>
//     <form>
//         <input
//         type="text"
//         placeholder="search by name"
//         onChange={handleNameChange}
//         value={search}
//         />
//     </form>

//     <div className="view-buttons">
//         <button onClick={() => setView("grid")}>Grid</button>
//         <button onClick={() => setView("table")}>Table</button> 
//     </div>
//     {View === "grid" && <Studentgrid data={filteredData} />}
//     {View === "table" && <Studenttable data={filteredData} />}
//     </div>
// );
// }

import { useEffect, useState } from "react";

import Studentgrid from "./component/Studentgrid";
import Studenttable from "./component/Studenttable";

import Staffgrid from "./component/Staffgrid";
import Stafftable from "./component/Stafftable";

import Studentregfrom from "./component/Studentregfrom";
import Staffregform from "./component/Staffregfrom";

export default function App(){

const [type,setType] = useState("student");
const [view,setView] = useState("grid");

const [search,setSearch] = useState("");

const [studentData,setStudentData] = useState([]);
const [staffData,setStaffData] = useState([]);

const [filteredStudent,setFilteredStudent] = useState([]);
const [filteredStaff,setFilteredStaff] = useState([]);

const [showForm,setShowForm] = useState(false);



useEffect(()=>{

fetch("http://localhost:8080/api/student")
.then(res=>res.json())
.then(data=>{
setStudentData(data);
setFilteredStudent(data);
})

},[])



useEffect(()=>{

fetch("http://localhost:8080/api/staff")
.then(res=>res.json())
.then(data=>{
setStaffData(data);
setFilteredStaff(data);
})

},[])



const handleSearch = (e)=>{

const value = e.target.value.toLowerCase();

setSearch(value);

if(type === "student"){

setFilteredStudent(
studentData.filter((val)=>
val.name.toLowerCase().includes(value)
)
)

}else{

setFilteredStaff(
staffData.filter((val)=>
val.name.toLowerCase().includes(value)
)
)

}

};



return(

<div className="top-section">

<h1 className="grid-title">Student Management System</h1>


<div className="type-buttons">
    <button onClick={()=>{
setType("student");
setShowForm(false);
}}>
Student
</button>

<button onClick={()=>{
setType("staff");
setShowForm(false);
}}>
Staff
</button>
</div>



<div className="search-container">

<input
type="text"
placeholder="Search by name"
value={search}
onChange={handleSearch}
/>

</div>



<div className="view-buttons">

<button onClick={()=>setView("grid")}>Grid</button>

<button onClick={()=>setView("table")}>Table</button>

<button onClick={()=>setShowForm(!showForm)}>
{type === "student" ? "Add Student" : "Add Staff"}
</button>

</div>



{showForm && type === "student" && (
<Studentregfrom/>
)}

{showForm && type === "staff" && (
<Staffregform/>
)}



{type === "student" && view === "grid" && (
<Studentgrid data={filteredStudent}/>
)}

{type === "student" && view === "table" && (
<Studenttable data={filteredStudent}/>
)}



{type === "staff" && view === "grid" && (
<Staffgrid data={filteredStaff}/>
)}

{type === "staff" && view === "table" && (
<Stafftable data={filteredStaff}/>
)}



</div>

)

}