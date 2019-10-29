import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto', minHeight:'100%'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src='https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/45665846_10217394293429652_2082084704969818112_n.jpg?_nc_cat=105&_nc_oc=AQnIzSvzqYBZOiNwC2VIUnww2Jx23_vVjm76d9BQ4R5y_VxAP0z8TKFEpLdTz5GrRAY&_nc_ht=scontent-cdt1-1.xx&oh=d3c9edc67340e6d4fd0cd833eac280ae&oe=5E199549'
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Barthélémy LEVEQUE</h1>
                            <p className="subtitle">Software Engineer and Full-Stack Web Developer <br/> with experience in Corporate Finance and Strategy</p>
                                <hr style={{padding:'10px'}}/>
                             <div className="banner-desc">
                                <p> Hello there  <span role="img" aria-label="waving hand">👋</span></p>
                                <p>I am a 25-year-old <a href="https://www.42.us.org/" target="_blank" rel="noopener noreferrer">School 42</a> student looking for a 6-month internship in Paris or abroad, starting in January 2020.
                                </p>
                                <p>Want to know more about me ?</p>
                            </div>
                        </div>
                        <div className="banner-buttons">
                            <Link to="/projects" className="btn btn-outline-success redirect">Check my Projects</Link>
                            <Link to="/resume" className="btn btn-outline-success redirect">Check my Resumé</Link>
                            <Link to="/contact" className="btn btn-outline-success redirect">Or contact me <span role="img" aria-label="smiley">😄</span></Link>
                        </div>
                             <div className="languages banner-text">
                                <img src="https://img.icons8.com/color/96/000000/c-programming.png" alt="c" title="C"></img>
                                <img src="https://img.icons8.com/color/96/000000/python.png" alt="python" title="Python"></img>
                                <img src="https://img.icons8.com/color/96/000000/php.png" alt="php" title="PHP"></img>
                                <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="react" title="React"></img>
                                <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="nodejs" title="NodeJS"></img>
                                <img src="http://pngimg.com/uploads/mysql/mysql_PNG9.png" style={{width: '120px'}} alt="sql" title="MySQL"></img>
                                <img src="https://img.icons8.com/color/96/000000/docker.png" alt="docker" title="Docker"></img>
                         </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default LandingPage;