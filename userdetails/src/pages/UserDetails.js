import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Container } from '../components/Container/Container';
import { Label } from '../components/Label/Label';
import { Image } from '../components/Image/Image';
import { Line } from '../components/Line/Line';
import '../pages/pages.css';
import { Button } from '../components/Button/Button';
import { useNavigate} from "react-router-dom";

export const UserDetails = () => {
  const location = useLocation();
  const userDetails = location.state;
  const [signout, showSignout] = useState(false);
  const navigate = useNavigate();
  console.log(location.state);
  
  const displayContainer = () =>{
     showSignout(!signout);
  }

  const signOutUser = () =>{
      navigate('/')
  }

  return (
  <div className='user-info'>
    <div className='navbar'>
      <Container 
        children=""
        height="1000px"
        width="200px"
        radius="10%"
        color="blue"
        border="1px solid black"
      />
    </div>
      <div className='user-deatils'>
        <div className='sign-out'><Label color="black" text="Profile"/>
          {
            signout && <Container
            border="1px solid black"
            height="100px"
            width="100px"
            color="white"
            radius="20%"
            children=''
          >
            <Button
                           border='1px solid blue'
                           onClick={()=>signOutUser()}
                           children='Sign out'
                           height="10px"
                           width="100px"
                           radius=""
            ></Button>
          </Container>
          }
          <Button
             border=''
             onClick={()=>displayContainer()}
             children=''
             height="10px"
             width="100px"
             radius=""
          >
            <Image 
             image={userDetails?.data?.profilepicture} 
             alt={"profilepicture"} 
             height="20px" 
             width="20px" 
             radius="100%"
            >
            </Image>
            <Label color="grey" text={userDetails?.data?.username}></Label>
          </Button>
        </div>
        <div className='user'>
        <div className='personal-details'>
            <Image image={userDetails?.data?.profilepicture} alt="profilepicture" height="100px" width="100px" radius="100%"></Image>
            <Label color="black" text={userDetails?.data?.name}/>
            <Label color="grey" text="Username :"/><Label color="black" text={userDetails?.data?.username}/>
            <Label color="grey" text="e-mail :"/><Label color="black" text={userDetails?.data?.email}/>
            <Label color="grey" text="Phone :"/><Label color="black" text={userDetails?.data?.phone}/>
            <Label color="grey" text="Website :"/><Label color="black" text={userDetails?.data?.website}/>
            <Line color='grey' border='1px solid grey' height="1px" width="30px"></Line>
            <Label color="grey" text="Company"/>
            <Label color="grey" text="Name :"/><Label color="black" text={userDetails?.data?.company?.name}/>
            <Label color="grey" text="Catch Phrase:"/><Label color="black" text={userDetails?.data?.company?.catchPhrase}/>
            <Label color="grey" text="BS :"/><Label color="black" text={userDetails?.data?.company?.bs}/>
        </div>
        <div className='address'>
            <Label color="grey" text="Address:"></Label>
            <Label color="grey" text="Street :"/><Label color="black" text={userDetails?.data?.address.strret}/>
            <Label color="grey" text="Suite :"/><Label color="black" text={userDetails?.data?.address.suite}/>
            <Label color="grey" text="City :"/><Label color="black" text={userDetails?.data?.address.city}/>
            <Label color="grey" text="Zipcode :"/><Label color="black" text={userDetails?.data?.address.zipcode}/>
        </div>
        </div>
      </div>
  </div>
  )
}
