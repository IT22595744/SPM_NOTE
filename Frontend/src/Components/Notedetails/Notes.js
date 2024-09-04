import React,{useState,useEffect} from 'react';
import Nav from "../Nav/Nav";
import axios from "axios";
import Note from "../Note/Note"

const URL="http://localhost:5000/notes";

const fetchHandler=async()=>{
  return await axios.get(URL).then((res) => res.data);
}
function Notes() {
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
    console.log("abc")
    fetchHandler().then((data)=>{
     console.log("data",data)
     setNotes(data.Notes)
   })
   .catch((e) => console.log(e));
 },[])
  return (
    <div>
      <Nav/>
      <h1>Note Details Display Page</h1>
      <div>
      {/* The key prop is used to uniquely identify each item in the list (using the index i). */}
      {notes && notes.map((note,i) => (
           <div key={i}>
                <Note note={note}/>
                {/* the name note should be equiavelent to the name=props.note (Note component)*/}
            </div>
        ))}
    </div>
    </div>
  )
}

export default Notes;
