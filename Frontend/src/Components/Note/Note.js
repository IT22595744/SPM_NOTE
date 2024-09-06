import React from 'react';
// import { Link } from 'react-router-dom';
import './Note.css';

function Note(props) {
    const {_id,name,note,grammer,complexsentence,description}=props.note;
  return (
    <div style={{alignItems:'center'}}>
        {/* <br></br>
      <h1 className='u1'>Note Display</h1>
      
      <h2>ID:{_id}</h2>
      <h2>Name:{name}</h2>
      <h2>Note:{note}</h2>
      <h2>Grammer:{grammer}</h2>
      <h2>Complex Sentence:{complexsentence}</h2>
      <h2>Description:{description}</h2>
      <button className='bt'>
      <Link to={`/notedetails/${_id}`} className='bt1'>Update</Link>
      </button>
      <button>Delete</button>
      <br></br><br></br> */}
      {/* <button className='bt'>
      <Link to={`/userdetails/${_id}`} className='bt1'>Update</Link>
      </button>
      <button onClick={deleteHandler} className='bt'>Delete</button> */}
       <div className="card" style={{width: '34rem'}}>
   
   <div className="card-body" >
     <h5 className="card-title">Note Display</h5>
     {/* <h2>ID:{_id}</h2> */}
      <h2>Name:{name}</h2>
      <h2>Note:{note}</h2>
      <h2>Grammer:{grammer}</h2>
      <h2>Complex Sentence:{complexsentence}</h2>
      <h2>Description:{description}</h2>
     {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      {/* <button className='bt'>
      <Link to={`/notedetails/${_id}`} className='btn btn-primary'>Update</Link>
      </button>
      <button  className='btn btn-primary'>Delete</button>  */}
      <button
          className="nav_btn_log"
          onClick={() => (window.location.href = `/notedetails/${_id}`)}
        >
          Update
        </button>
        <button
          className="nav_btn_regi"
          onClick={() => (window.location.href = "/userregister")}
        >
          Delete
        </button>
   </div>
 </div>
    </div>
   
  );
}

export default Note;
