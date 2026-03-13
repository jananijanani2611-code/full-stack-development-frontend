import './Form.css';
export default function Form(){
    return(
    <div className="Form"> 
        <form>
            <label for="name">f.name  </label>
            <input type="text" id="name" name="fname"/><br/>
            <label for="age">age  </label>
            <input type="number" id="age" name="age"/><br/>
            <label for="dob">dob  </label>
            <input type="date" id="date" name="dob"/><br/>
            <input type="submit"/>
        </form>
    </div>
    );
}