import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://krcx9bt1u8.execute-api.us-east-1.amazonaws.com/default/resify-data"
      );
      setUserData(data.data.user);
    };
    getData();
    console.log()
  }, []);

  return(
    <>
      <Container className='top_60'> 
        <Grid container>
          <Grid item xs={12} sm ={12} lg={3} md={4} >
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <div className='right'>
                <Header/>
                <div className='main_content container_shadow'>
                <Switch>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path='/contactme'>
                    <Contact />
                  </Route>
                  <Route path='/'>
                    <Resume />  
                  </Route>
                </Switch>
                </div>
                <Footer/>
              </div>         
            </Router>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
