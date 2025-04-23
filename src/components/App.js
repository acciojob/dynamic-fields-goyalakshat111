import React,{useState} from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([
    {
      name: "",
      age: "",
    },
  ]);

  function addField() {
    setFields([...fields, { name: "", age: "" }]);
  }

  function removeFields(index) {
    setFields(fields.filter((_, i) => i !== index));
  }

  function handleChange(index,e){
    const updatedFields = [...fields]; // shallow copy of the array
    updatedFields[index][e.target.name] = e.target.value; // update the specific field
    setFields(updatedFields); // set the new array
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input type="text" name="name" placeholder="Name"
          value={field.name}
           onChange={(e)=>{handleChange(index,e)}}/>
          <input type="number" name="age" placeholder="Age" 
          value={field.age}
          onChange={(e)=>{handleChange(index,e)}} />
          <button type="button" onClick={()=>removeFields(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addField}>Add More...</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
