// import { useState } from "react";
// import data from './component/data/studentdetail.json';
// import Studentgrid from "./component/Studentgrid";
// import Studenttable from "./component/Studenttable";
// import Studentregfrom from "./component/Studentregfrom";
// export default function App(){
// // import StudentRegForm from "./components/StudentRegForm";

// const [View, setView] = useState("grid")
// const[search,setSearch]=useState('')
// const [filteredData,setFilteredData]=useState(data)
// const handleNameChange=(e)=>{
//     setSearch(e.target.value)
//     setFilteredData(
//         data.filter(
//             (val)=>val.name.toLowerCase().includes(e.target.value)
//         )
//     )
// }

// return (
//     <div>
//     <form>
//         <input type="text"
//         placeholder="search by name"
//         onChange={handleNameChange}
//         value={search}
//         />

//     </form>

//      <div className="view-buttons">
//     <button onClick={() => setView("grid")}>Grid</button>
//     <button onClick={() => setView("table")}>Table</button>
//     </div>
//     {View === "grid" && <Studentgrid data={filteredData} />}
//     {View === "table" && <Studenttable data={filteredData} />}

//     </div>
// );
// }


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

export default function App(){
return(
<Router>

<div className="view-buttons">
<Link to="/"><button>Home</button></Link>
<Link to="/about"><button>About</button></Link>
<Link to="/contact"><button>Contact</button></Link>
</div>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>

</Router>
);
}
// import { useState } from "react";
// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";

// export default function App(){

// const [page,setPage] = useState(0);

// const pages = [
// <Home />,
// <About />,
// <Contact />
// ];

// function nextPage(){
// if(page < pages.length-1){
// setPage(page + 1);
// }
// }

// function prevPage(){
// if(page > 0){
// setPage(page - 1);
// }
// }

// return(
// <div style={{textAlign:"center", marginTop:"50px"}}>

// {pages[page]}

// <br/><br/>

// <button onClick={prevPage}>Previous</button>
// <button onClick={nextPage}>Next</button>

// </div>
// )
// }
