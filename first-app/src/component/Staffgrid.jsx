export default function Staffgrid({data}){
return(
<div>

<h2 className="grid-title">Staff Grid</h2>

<div className="grid-container">
{
data.map((val)=>(
<div className="grid-row" key={val.id}>
<h2>{val.name}</h2>
<p>Department : {val.department}</p>
<p>Staff ID : {val.staffId}</p>
<p>Designation : {val.designation}</p>
<p>Experience : {val.experience} years</p>
</div>
))
}
</div>

</div>
)
}