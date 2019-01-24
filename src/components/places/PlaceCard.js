import React from 'react'

import {Card, CardText, CardMedia, CardTitle, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { CSSTransition } from 'react-transition-group';
export default class PlaceCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:true
        }
    }
    render(){
        return(
            <CSSTransition
              //timeout={300}
              classNames="fade-scale"
              in ={this.props.in}>
                <div className="col-xs-12 col-sm-4"  key={this.props.index}>
                <Card >
                    <CardMedia>
                    <img src={process.env.PUBLIC_URL + this.props.place.imagenUrl}/>
                    </CardMedia>
                    <CardTitle title={this.props.place.title}></CardTitle>
                    <CardText>{this.props.place.description}</CardText>
                    <CardActions style={{"textAlign":"right"}}>
                        <FlatButton onClick={()=> console.log("presione")} secondary={true} label="See more"/>
                        <FlatButton secondary={true} onClick={() =>
                        this.props.onRemove(this.props.place)} label="Hidde"/>
                    </CardActions>
                </Card>
                </div>
            </CSSTransition>                    
        )
        
    }
}