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
                                  <a href="tel:+33635235117" target="_blank" rel="noopener noreferrer">+33 6 35 23 51 17</a>
                              </ListItemContent>
                            </ListItem>
                            <ListItem>
                              <ListItemContent>
                              <i className="fa fa-envelope" aria-hidden="true" />
                              <a href="mailto: bleveque@student.42.fr"  target="_blank" rel="noopener noreferrer">bleveque@student.42.fr</a> 
                              </ListItemContent>
                            </ListItem>
                            <ListItem>
                              <ListItemContent>
                              <i className="fa fa-github" aria-hidden="true" />
                              <a href="https://github.com/barthelemyleveque" target="_blank" rel="noopener noreferrer">barthelemyleveque</a>
                              </ListItemContent>
                            </ListItem>
                            <ListItem>
                              <ListItemContent>
                              <i className="fa fa-linkedin" aria-hidden="true" />
                              <a href="https://www.linkedin.com/in/barth%C3%A9l%C3%A9my-leveque-73001ba3/" target="_blank" rel="noopener noreferrer">Barthélémy Leveque</a>
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