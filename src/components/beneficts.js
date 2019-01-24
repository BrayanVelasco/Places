import React from 'react'

import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card'
import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors'


export default class Benefict extends React.Component{
    render(){
        return(
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
        )
    }

}