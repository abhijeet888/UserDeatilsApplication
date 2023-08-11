import React, { useEffect, useState } from 'react';
import { Container } from '../components/Container/Container';
import { Scrolllist } from '../components/Scolllist/Scrolllist';
import {Button} from '../components/Button/Button';
import {Image} from '../components/Image/Image';
import { Label } from '../components/Label/Label';
import { Line } from '../components/Line/Line';
import { useNavigate} from "react-router-dom";

export const UserList = () => {
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate(); 

  const routeChange = (data) =>{ 
    const path = `/userdetails`; 
    navigate(path, {state: {data}});
  }

  useEffect(()=>{
    if(userData !== []){
      fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(json => setUserData(json.users))
      .catch(error => console.error(error));
    }
  },[]);

  return (
    <div>
    <Container
      children=""
      height="500px"
      width="500px"
      radius="10%"
      color="white"
      border="1px solid black"
    />
     <Container
      children={<Label color="black" text="Select an Account"></Label>}
      height="100px"
      width="500px"
      radius="10% 10% 0 0"
      color="grey"
      border=""
    />
    <Line color="grey" height="0.1px" width="500px" border="0.1px solid grey"></Line>
    <Scrolllist 
     children=""
     height="500px"
     width="500px"
     radius="0% 0% 10% 10%"
    >{userData.map((users, index)=>{
      return(<div key={index} className=''>
      <Button 
      border="solid white 1px"
      color="white"
      children= {<Label color="red" text={users.username}></Label>}
      onClick={() => routeChange(users)}
      height="100px"
      width="500px"
      radius=""
      /><Image image={users.profilepicture} alt={"profilepicture"} height="50px" width="50px" radius="40%"/></div>)
  })}</Scrolllist>
   </div>
  )
  
}