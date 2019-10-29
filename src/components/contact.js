import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img 
                        src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/45665846_10217394293429652_2082084704969818112_n.jpg?_nc_cat=105&_nc_oc=AQnIzSvzqYBZOiNwC2VIUnww2Jx23_vVjm76d9BQ4R5y_VxAP0z8TKFEpLdTz5GrRAY&_nc_ht=scontent-cdt1-1.xx&oh=d3c9edc67340e6d4fd0cd833eac280ae&oe=5E199549"
                        alt="avatar"
                        className="contact-image"
                        />
                        <p className="contact-desc">Thank you for your interest in my profile, if you're looking for an intern in Software Engineering or Full-Stack programming, please feel free to contact me !<br/> I am available starting January 2020 🚀</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                        <List>
                            <ListItem>
                              <ListItemContent >
                                  <i className="fa fa-phone-square" aria-hidden="true" />
                                  +33 6 35 23 51 17
                              </ListItemContent>
                            </ListItem>
                            <ListItem>
                              <ListItemContent>
                              <i className="fa fa-envelope" aria-hidden="true" />
                                bleveque@student.42.fr
                              </ListItemContent>
                            </ListItem>
                            <ListItem>
                              <ListItemContent>
                              <i className="fa fa-skype" aria-hidden="true" />
                              live:barthelemy.leveque 
                              </ListItemContent>
                            </ListItem>
                        </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;