import { useState } from "react";
import data from "./data/studentdetail.json";
import Studentgrid from "./Studentgrid";
import Studenttable from "./Studenttable";

export default function Home(){

const [view,setView] = useState("grid");
const [search,setSearch] = useState("");
const [filteredData,setFilteredData] = useState(data);

function handleNameChange(e){

const value = e.target.value.toLowerCase();

setSearch(value);

setFilteredData(
data.filter(
(val)=> val.name.toLowerCase().startsWith(value)
)
);

}

return(

<div>

<h2 className="grid-title">Student Management</h2>

<div className="search-container">
<input
type="text"
placeholder="Search by name"
value={search}
onChange={handleNameChange}
/>
</div>

<div className="view-buttons">
<button onClick={()=>setView("grid")}>Grid</button>
<button onClick={()=>setView("table")}>Table</button>
</div>

{view === "grid" && <Studentgrid data={filteredData} />}
{view === "table" && <Studenttable data={filteredData} />}

</div>

)

}