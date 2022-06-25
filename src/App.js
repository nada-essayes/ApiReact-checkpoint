import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Loading from './Components/Loading';
import axios from 'axios';
import UserList from './Components/UserList';

function App() {
  const [users, setUsers] = useState(null);
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{
      setUsers(result.data)
    })
  },[])
  return (
    <div className="App">
     
      {users ? <UserList users={users} /> : <Loading/>}
    </div>
  );
}

export default App;
