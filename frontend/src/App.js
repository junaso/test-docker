import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() { 
 
 const Axios = AxiosBase.create({
        baseURL:"http://localhost:8001",
        header:{'X-Requested-With': 'XMLHttpRequest'}
    })

 const [visits, setVisitis] = useState([])

 useEffect(()=>{
  console.log("test_useEffect")
  axios.get('/visits').then((res)=> {
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
