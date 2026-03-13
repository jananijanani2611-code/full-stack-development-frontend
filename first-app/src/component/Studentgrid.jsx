import data from './data/studentdetail.json';
import './Student.css';

export default function Studentgrid({data}){
return(
<div>

<h2 className="grid-title">Student Grid</h2>

<div className="grid-container">
{
data?.map((val)=>{
return(
<div className="grid-row" key={val?.id}>
<h1>{val?.name}</h1>
<p>{val?.course}</p>
<p>{val?.regNo}</p>
<p>{val?.rollNo}</p>
<p>{val?.duration}</p>
</div>
);
})
}
</div>

</div>
);
}