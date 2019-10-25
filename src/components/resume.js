import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skill from './skills';

class Resume extends Component {
    render(){
        return(
            <div className="mainresume">
                <Grid>
                    <Cell className="resume-left-col" col={3}>
                        <div style={{textAlign:"center", marginTop:'2em'}}>
                            <img 
                            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/45665846_10217394293429652_2082084704969818112_n.jpg?_nc_cat=105&_nc_oc=AQnIzSvzqYBZOiNwC2VIUnww2Jx23_vVjm76d9BQ4R5y_VxAP0z8TKFEpLdTz5GrRAY&_nc_ht=scontent-cdt1-1.xx&oh=d3c9edc67340e6d4fd0cd833eac280ae&oe=5E199549"
                            alt="avatar"
                            style={{height:"200px", borderRadius:"50%"}}
                            />
                        </div>
                        <h3>Barthélémy LEVEQUE</h3>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #11998e', width:'50%'}}/>
                        <p style={{textAlign:'justify', textJustify:'inter-word'}}>
                        Graduated from IESEG School of Management with a Masters Degree in corporate finance and now studying software engineering, coding, and programming @42. 
                        <br /><br />Worked three-years in corporate finance and strategy for The Adecco Group and co-founded a social enterprise : Cafélections
                        <br /><br/>Bikepacked on my own for 4 months from France to Greece (5,000kms), with no pre-planned accommodation, only a tent and a bike. 
                        </p>
                        <hr style={{borderTop:'3px solid #11998e', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>47 rue Belliard, 75018 Paris</p>
                        <h5>Phone</h5>
                        <p>(+33) 6 35 23 51 17</p>
                        <h5>Email</h5>
                        <p>bleveque@student.42.fr</p>
                        <hr style={{borderTop:'3px solid #11998e', width:'50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={9}>
                        <h4 style={{color:'#11998e', marginTop:'-5px'}}>Education</h4>
                        <Education 
                            startYear={2019}
                            endYear={2021}
                            name={"School 42"}
                            location={"Paris, France"}
                            desc={"Studying software engineering and programming."}
                            
                        />
                        <Education 
                            startYear={2012}
                            endYear={2017}
                            name={"IÉSEG"}
                            location={"Lille, France"}
                            desc={"Graduated with a Masters Degree in Corporate Finance."}
                        />
                        <Education 
                            startYear={2013}
                            endYear={2014}
                            name={"ITESM"}
                            location={"Guadalajara, Mexico"}
                            desc={"Bachelor’s 2nd year as an exchange student"}
                        />
                        <hr style={{borderTop:'3px solid #11998e', width:'50%', marginLeft:'50%'}}/>
                        <h4 style={{color:'#11998e', marginTop:'-10px'}}>Experience</h4>
                        <Education 
                            startYear={2018}
                            endYear={2019}
                            name={"Executive Assistant to CEO"}
                            location={"The Adecco Group"}
                            desc={"As Adecco France's CEO's Executive Assistant, I was tasked with participating in the elaboration of the company's strategy ; working closely with both central functions and operations to support its deployment and monitor our performance."}
                            
                        />
                        <Education 
                            startYear={2017}
                            endYear={2017}
                            name={"Social Enterprise Co-Founder"}
                            location={"Cafélections"}
                            desc={"Started a social enterprise : Cafélections, which sold coffee packs bearing caricatures of the French election’s candidates ; 80% of our profits were donated to a charity. Cafélections was featured in one major newspaper (Nouvel Obs.) and we were interviewed by France's number one radio (RTL)."}
                        />
                        <Education 
                            startYear={2015}
                            endYear={2017}
                            name={"Financial Controller"}
                            location={"The Adecco Group"}
                            desc={"Provided financial performance analysis for 170 branches, supported by the creation of new reports models (using Excel VBA) to highlight financial metrics."}                     
                            />
                        <hr style={{borderTop:'3px solid #11998e', width:'50%', marginLeft:'50%'}}/>
                        <h4 style={{color:'#11998e', marginTop:'-10px', marginBottom:'20px'}}>Skills</h4>
                        <Grid style={{marginTop:"-10px"}}>
                        <Cell className="resume-skill-left-col" col={6}>
                            <Skill 
                                skill={"C"}
                                progress={100}/>
                            <Skill 
                                skill={"PHP"}
                                progress={80}/> 
                            <Skill 
                                skill={"Python"}
                                progress={70}/>
                            <Skill 
                                skill={"SQL"}
                                progress={60}/>   
                            <Skill 
                                skill={"Javascript"}
                                progress={50}/> 
                          
                        </Cell>
                        <Cell className="resume-skill-right-col" col={6}>
                            <Skill 
                                skill={"French"}
                                progress={100}/>
                            <Skill 
                                skill={"English"}
                                progress={90}/>
                            <Skill 
                                skill={"Spanish"}
                                progress={70}/>
                        </Cell>
                        </Grid>
                        <hr style={{borderTop:'3px solid #11998e', width:'50%', marginLeft:'50%'}}/>
                        <h4 style={{color:'#11998e', marginTop:'-10px', marginBottom:'20px'}}>Hobbies</h4>
                        <ul>
                            <li>
                                <span class="label">Rugby </span>
                                <span class="desc">Played for 15 years ; twice national champion (2012 and 2013)</span>
                            </li>
                            <li>
                                <span class="label">Cycling </span>
                                <span class="desc">Long distance cyclist ; Lille - Athens (5000 kms) and Firenze - Napoli (800 kms)</span>
                            </li>
                            <li>
                                <span class="label">Literature </span>
                                <span class="desc">Keen on 20th-century writers such as Kundera, García Marquez, Hesse and Pessoa </span>
                            </li>
                        </ul>
                    </Cell>
                    <Cell col={1}/>
                </Grid>
            </div>
        )
    }
}

export default Resume;