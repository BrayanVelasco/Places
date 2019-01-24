import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card'
import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'


import Title from './components/title'
import data from './request/places'
import places from './request/places'



class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      number:0
    }
    this.updateNumber = this.updateNumber.bind(this)

  }
  updateNumber(){
    this.setState({number:this.state.number + 1})
  }
  places(){
    return data.places.map((place,index) => {
      return(
        <div className="col-xs-12 col-sm-4"  key={index}>
          <Card >
            <CardMedia>
              <img src={process.env.PUBLIC_URL + place.imagenUrl}/>
            </CardMedia>
            <CardTitle title={place.title}></CardTitle>
            <CardText>{place.description}</CardText>
          </Card>
        </div>
      )
    })
  }
    render() {
    return (
      <MuiThemeProvider>
        <section>
        <div className="Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <h3>{this.state.number}</h3>
              <RaisedButton label="Create Count" secondary={true}/>
              <img className="Header-ilustration" src={process.env.PUBLIC_URL + "/Images/world-background.jpg"} height="200"/>
            </div>
           
          </div>
          
          
        </div>
        <ul>
                <Card className="Header-benefict">
                  
                  <CardText>
                    <div className="row">
                      <div className="Header-benefict-image" 
                      style={{"backgroundColor":redA400}}>
                        <img src={process.env.PUBLIC_URL+"/images/corazon.png"} width="100%"/>
                      </div>
                      <div className="Header-benefict-text">
                        <h3>Ratings with emotions</h3>
                        <p>Rate your places with experiences, no numbers</p>  
                      </div>
                      
                    </div>
                    
                    
                  </CardText>
                </Card>

                <Card className="Header-benefict">
                  
                  <CardText>
                    <div className="row">
                      <div className="Header-benefict-image" 
                      style={{"backgroundColor":lightBlueA400}}>
                        <img src={process.env.PUBLIC_URL+"/images/no-internet.png"} width="100%"/>
                      </div>
                      <div className="Header-benefict-text">
                        <h3>No internet?. No problems</h3>
                        <p>Places without internet</p> 
                      </div>
                      
                    </div>
                    
                    
                  </CardText>
                </Card>

                <Card className="Header-benefict">
                  
                  <CardText>
                    <div className="row">
                      <div className="Header-benefict-image" 
                      style={{"backgroundColor":amberA400}}>
                        <img src={process.env.PUBLIC_URL+"/images/start.png"} width="100%"/>
                      </div>
                      <div className="Header-benefict-text">
                        <h3>Your favorites places </h3>
                        <p>Define your list of favorites places</p>
                      </div>
                      
                    </div>
                    
                    
                  </CardText>
                </Card>




                
              </ul>
        <div style={{"backgroundColor":indigo400, "padding":"50px", "color":"white"}}>
              <h3 style={{"fontSize":"24px"}}>Sitios Populares</h3>
              <div className="row">
                {this.places()}
              </div>
            </div>
        </section>
        
      </MuiThemeProvider>
    );
  }
}

export default App;
