import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() { 

 const [visits, setVisitis] = useState([])

 useEffect(()=>{
  console.log("test_useEffect")
  axios.get('localhost:8001/visits').then((res)=> {
    console.log("test_axios")
    console.log(res.data)
    setVisitis(res.data)
  })
 },[])


  return (
    <div>
       <div>test</div>
       {visits.map((list, index)=>{
        return (
        <div key={index}>
          <div>{list.v_name}</div>
          <div>{list.v_datetime}</div>
        </div>
       )
      })}
   </div>
  );
}

export default App;
