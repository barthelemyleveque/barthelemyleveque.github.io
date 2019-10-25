import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render(){
        return(
            <div style={{padding:'0px', marginBottom:'0px', marginTop:'-5px'}}>
            <Grid style={{padding:'0px', marginBottom:'0px', marginTop:'0px'}}>
                <Cell col={8} style={{padding:'0px', marginBottom:'0px', marginTop:'0px'}}>
                    <h5 style={{marginTop:'0px'}}>{this.props.name} - {this.props.location}</h5>
                </Cell>
                <Cell col={4} style={{padding:'0px', marginBottom:'0px', marginTop:'-1px'}}>
                    <p style={{textAlign:'center'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>

            </Grid>
            <Grid style={{padding:'0px', marginBottom:'0px', marginTop:'-15px'}}>
                <Cell col={12} style={{padding:'0px', marginBottom:'0px', marginTop:'0px'}}>
                    <p style={{textAlign:'Justify', textJustify:'inter-word'}}>{this.props.desc}</p>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Education;