import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card'
import {indigo400} from 'material-ui/styles/colors'
 

import Title from '../components/title'
import data from '../request/places'
import Benefict from '../components/beneficts'
import PlaceCard from '../components/places/PlaceCard'
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            places: []
        }
        this.hidePlace = this.hidePlace.bind(this)
        setTimeout(()=> this.setState({places:data.places}),2000)
    }

    places(){
        return this.state.places.map((place,index) => {
          return(
            <PlaceCard onRemove={this.hidePlace} place={place} index={index}></PlaceCard>
          )
        })
    }

    hidePlace(place){
        this.setState({
            places: this.state.places.filter(element => element != place)

        })
        alert("entre")
    }

    render(){
        return(
        <section>
            <div className="Header-background">
                <div style={{"width":"80%", "margin":"0 auto"}}>
                    <div className="Header-main">
                        <Title></Title>
              
                        <RaisedButton label="Create Count" secondary={true}/>
                        <img className="Header-ilustration" src={process.env.PUBLIC_URL + "/Images/world-background.jpg"} height="200"/>
                    </div>
                    <div>
                        <Benefict></Benefict>
                    </div>           
                </div>        
            </div>
            <div style={{"backgroundColor":indigo400, "padding":"50px", "color":"white"}}>
                <h3 style={{"fontSize":"24px"}}>Sitios Populares</h3>
                <TransitionGroup className="row">
                    {this.places()}
                </TransitionGroup>
            </div>
        </section>
        )
    }
}