import React, {useEffect,useState,useLayoutEffect} from 'react';
import axios from 'axios';
import './App.css';
import DragDrop from './component/DragDrop';
import Heatmap from './component/Heatmap';

const apiUrl = `https://api-dot-testproject-345406.uc.r.appspot.com`;

function App(){

  const [state, setState] = useState({points: []});
  const [inPoint,setInPoint]=useState({point:{}})

  const sendPoint= async ()=> {
    await axios.post(apiUrl + '/point-create',{
      x: inPoint.x,
      y: inPoint.y,
      status: inPoint.status
    });
    loadPoints();
  }

  const loadPoints=async()=> {
    const res = await axios.get(apiUrl + '/points');
     setState({
      points: res.data
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <DragDrop sendDataToParent={(x,y,status)=>{  
          setInPoint(()=>({x:x,y:y,status:status}))
          }}></DragDrop>
        <button disabled={inPoint.status===0} onClick={sendPoint}>Create Point</button>
        <Heatmap state={state}></Heatmap>
        <p>Users list:</p>
        <ul>
          {state.points.map(point => (
            <li key={point._id}>id: {point._id}</li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;