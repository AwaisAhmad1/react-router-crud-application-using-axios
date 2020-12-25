import React ,{useEffect,useState} from 'react';
import axios from "axios";
import { FaEye, FaRadiationAlt, FaUserEdit } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Home = () => {
    const [users , setUsers] = useState([]);
    useEffect (()=>{ 

       loadUsers();
    },[]);
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers();
    }

    const loadUsers = async ()=>{
        
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data.reverse());
    };
    return (
        <div>
            <div className="container">
            <h1> Hello home</h1>
            <table className="table shadow table-hover ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col" >Email</th>
      <th scope="col" >View</th>
      <th scope="col" >Edit</th>
      <th scope="col" >Delete</th>
    
    </tr>
  </thead>
  <tbody>
   {
       users.map((user,index)=>(
           <tr>
               <td scope="row">{index+1} </td>
               <td> {user.name}</td>
               <td> {user.username}</td>
               <td> {user.email}</td>
               <td> <Link className="m-2" to={`/user/${user.id}`} > <FaEye  color="black" size="1.5rem"/></Link></td>
               <td> <Link className="m-2" to={`/users/edit/${user.id}` } > <FaUserEdit color="black" size="1.5rem"/></Link></td>
               <td> <Link className="m-2"  onClick={ ()=>deleteUser(user.id)}> <FaRadiationAlt color="black" size="1.5rem" /></Link></td>
               
           </tr>
       ))
   }
  </tbody>
</table>


            </div>
             
        </div>
    )
}

export default Home;
