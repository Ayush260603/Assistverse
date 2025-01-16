import React, { useState, useEffect } from 'react';
import { FaFilePdf } from "react-icons/fa";
import SignUp from './SignUp';
import { Analytics } from "@vercel/analytics/react"
import {
  f7,
  f7ready,
  App,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  LoginScreenTitle,
  List,
  Button,
  ListInput,
  BlockFooter
} from 'framework7-react';


import routes from '../../routes';

import axios from 'axios';

const logout=()=>{
  localStorage.clear();
  window.location.reload();
}

const MyApp = () => {
  // Login screen demo data
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated'));

 console.log(localStorage.getItem('isAuthenticated'));
  useEffect(() => {
  if (localStorage.getItem('isAuthenticated') == true ){
    setIsAuthenticated(true);
  }
}, []);
  

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    
    try {
      const response = await axios.post( 'https://docuscholar.onrender.com/login', {
        email,
        password,

      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200) {
        const data = response.data;
        if (data.email === email && data.password === password)
        {
          localStorage.setItem('email',data.email);
          localStorage.setItem('phone',data.phone);
          localStorage.setItem('fnm',data.fnm);
          localStorage.setItem('lnm',data.lnm);
          localStorage.setItem('email',data.email);
          localStorage.setItem('created',data.createdAt);
          localStorage.setItem('BotAnswer',"Didn't get that can you repeat it again !")
          setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated',true);
        }

        console.log(data);

      } else {
        const errorData = response.data;
        console.log(errorData.error); 
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };
  
  // Framework7 Parameters
  const f7params = {
    name: 'Assistverse', // App name
    id: 'com.doctalk.id',
    theme: 'auto',

      // App routes
      routes: routes,
  };
  
  f7ready(() => {


    // Call F7 APIs here
  });
  console.log(isAuthenticated);
  if ( isAuthenticated){
  return (
    <App { ...f7params }>
        
        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
         
          <View id="view-home" main tab tabActive url="/" />

        </Views>
        
    </App>
  )}
  else{
    return(
      <>  
      <App { ...f7params }>
      
        
      <div className='login'>   

        <Page loginScreen>
          <LoginScreenTitle style={{fontSize:'36px', paddingBottom:'15px'}}><FaFilePdf className='ninja'/> Assistverse</LoginScreenTitle>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
            <List>
              <ListInput
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              ></ListInput>

              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <div className='buttonBox' >
                <Button  fill style={{ width:'240px',fontSize:'10px'}}type="submit"><h2>Login</h2></Button>
            </div>
          </form>
        

          <div className='buttonBox'>
            <Button style={{margin:'8px',width:'240px'}} popupOpen=".demo-popup-push"><p style={{fontSize:'16px', fontWeight:'700'}}>Create a New Account</p></Button>
          </div>
        <List>
              <BlockFooter>
              <p>Assistverse is your one stop solution to talk with files <br/> </p>
              </BlockFooter>
            </List>
   

    <Popup push className="demo-popup-push">
        <View>
          <Page>
            <Navbar  transparent>
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
           
            <SignUp/>
          
          </Page>
        </View>
      </Popup>
      </Page>
      </div>
   
    
    </App>
    <Analytics/>
    </>
      
    )
  }
}
export default MyApp;