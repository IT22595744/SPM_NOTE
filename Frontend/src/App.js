// import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router';
import Nav from './Components/Nav/Nav'; 
import Notes from './Components/Notedetails/Notes';
import Addnote from './Components/Addnote/Addnote';
import Updatenote from './Components/Updatenote/Updatenote';


function App() {
  return (
    <div>
       
       <React.Fragment>
          <Routes>
           <Route path="/" element={<Nav/>} />
            <Route path="/mainhome" element={<Nav/>} /> 
            {/* <Route path="/addnote" element={<AddNote/>} /> */}
            <Route path="/notedetails" element={<Notes/>} />
            <Route path="/addnote" element={<Addnote/>}/>
            {/* :id should be same as in the update notes useParams().id */}
            <Route path="/notedetails/:id" element={<Updatenote/>}/>
          </Routes>
        </React.Fragment>
    </div>
  );
}

export default App;
