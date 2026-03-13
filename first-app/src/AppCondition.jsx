// import Card from './component/Card';
// import List from './component/List';
// import Table from './component/Table';
// import Form from './component/Form';
// import pic from './assets/repfull.jpg';

import Studenttable from "./component/Studenttable";
import Studentgrid from "./component/Studentgrid";
import './App.css';

// import AWSCard from './component/AWSCard';
export default function App() {
  // create component
  // 1.function create
  // 2.return 
  // 3. html tags inside return
  // 4 export

  // //use component
  // 1.import
  // 2.invoke like a tag
  let isVerfied=false;
  let house="blue";
  let display="grid";
 
    
      // <div><Studenttable/>
      // <Studentgrid/>
      // </div>
 return ( 
  <div>
    {isVerfied&&<div>Verified</div>}
  <div className={house==="green"?'big-green':'bg-blue'}>
  </div>
  {display==="grid"?<Studentgrid/>:<Studenttable/>}
    </div>
  );
}