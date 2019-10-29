import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            blur: 'aurevoir',
        };
    }


    toggleCategories() {
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Bootcamp Betatester</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Beta-tested the school's Python bootcamp. Working with the pedagogical team to improve the exercises<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Object-oriented programming</li>
                        <li>Numpy</li>
                        <li>Pandas</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/Piscine_Python" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="node-language">Concerts Locator</CardTitle>
                    <CardText className="card-desc">
                    Cross-reference your most-streamed artists on Spotify, and their future venues in your town.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>API Fetching</li>
                        <li>Express framework</li>
                        <li>MongoDB</li>
                    </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Spotify_MERN" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>
   
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="c-language">Corewar</CardTitle>
                    <CardText className="card-desc">
                    <span className="desc-title">Goal :</span><br/>
                    A team project to build your own Virtual Machine, simulating basic processors operations.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Parsing</li>
                        <li>Assembly language</li>
                        <li>Virtual Machine</li>
                    </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Corewar" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">eCommerce </CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                    First web-project, an eCommerce website built over a week-end without frameworks. Pure PHP and HTML/CSS<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Authentification</li>
                        <li>Cookies handling</li>
                        <li>Administration interface</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/online_store" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Fillit</CardTitle>
            <CardText className="card-desc">
            <span className="desc-title">Goal :</span><br/>
                Arrange Tetris blocks between them to determine the smallest square possible<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Recursion</li>
                        <li>Time complexity</li>
                        <li>Memory allocation</li>
                    </ul>
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/Fillit" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
            </CardActions>
        </Card>

        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Image Compression</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Take an image as input, and using Machine Learning algorithms, compress it to an inferior size.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>K-means clustering</li>
                        <li>Matrix mathematics</li>
                        <li>File manipulation</li>
                    </ul>
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/compress_img" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">Invoice Generator</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                    (Freelance project) Build a web-app where clients can generate their invoices.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Database architecture</li>
                        <li>PHP Data Objects</li>
                        <li>Server set-up</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/InvoiceGen_PUBLIC" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="c-language">Lemin</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Find the shortest solution for n ants to traverse a graph, from one cell to another, in as few turns as possible.<br/><br/>
                    <span className="desc-title">Concepts:</span>
                    <ul>
                        <li>Graph theory</li>
                        <li>Breadth-first search</li>
                        <li>Edmonds-Karp algorithm</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/lem_in" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>


            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">ML Workshop</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Preparation of a workshop for 42 students, about Machine Learning algorithms.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Decision Trees</li>
                        <li>Random Forests</li>
                        <li>Boosted Trees</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/ML_RandForests" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="react-language">My Portfolio</CardTitle>
                    <CardText className="card-desc">
                    This very portfolio is built using React, Bootstrap and React-mdl. Published using GitHub Pages <br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Bootstrap</li>
                        <li>React-mdl</li>
                        <li>Front-end</li>
                    </ul>
                        
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/barthelemyleveque.github.io" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Pushswap</CardTitle>
            <CardText className="card-desc">
            <span className="desc-title">Goal :</span><br/>
                Sort a list of numbers, by using a limited set of operations, in the most efficient way possible.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Quicksort</li>
                        <li>Sorting algorithms</li>
                        <li>Linked lists</li>
                    </ul>
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/push_swap" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
            </CardActions>
        </Card>


                </div>
            )
        }
        if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="c-language">Corewar</CardTitle>
                    <CardText className="card-desc">
                    <span className="desc-title">Goal :</span><br/>
                    A team project to build your own Virtual Machine, simulating basic processors operations.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Parsing</li>
                        <li>Assembly language</li>
                        <li>Virtual Machine</li>
                    </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Corewar" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="c-language">Lemin</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Find the shortest solution for n ants to traverse a graph, from one cell to another, in as few turns as possible.<br/><br/>
                    <span className="desc-title">Concepts:</span>
                    <ul>
                        <li>Graph theory</li>
                        <li>Breadth-first search</li>
                        <li>Edmonds-Karp algorithm</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/lem_in" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

                {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Pushswap</CardTitle>
            <CardText className="card-desc">
            <span className="desc-title">Goal :</span><br/>
                Sort a list of numbers, by using a limited set of operations, in the most efficient way possible.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Quicksort</li>
                        <li>Sorting algorithms</li>
                        <li>Linked lists</li>
                    </ul>
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/push_swap" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
            </CardActions>
        </Card>

                 {/* Project 4 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Fillit</CardTitle>
            <CardText className="card-desc">
            <span className="desc-title">Goal :</span><br/>
                Arrange Tetris blocks between them to determine the smallest square possible<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Recursion</li>
                        <li>Time complexity</li>
                        <li>Memory allocation</li>
                    </ul>
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/Fillit" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
            </CardActions>
        </Card>

        </div>
            )
        }
       else if (this.state.activeTab === 2 ){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Image Compression</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Take an image as input, and using Machine Learning algorithms, compress it to an inferior size.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>K-means clustering</li>
                        <li>Matrix mathematics</li>
                        <li>File manipulation</li>
                    </ul>
                </CardText>
                <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/compress_img" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">ML Workshop</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Preparation of a workshop for 42 students, about Machine Learning algorithms.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Decision Trees</li>
                        <li>Random Forests</li>
                        <li>Boosted Trees</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/ML_RandForests" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Bootcamp Betatester</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                Beta-tested the school's Python bootcamp. Working with the pedagogical team to improve the exercises<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Object-oriented programming</li>
                        <li>Numpy</li>
                        <li>Pandas</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/Piscine_Python" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>
    
         </div>
            )
        }
       else if (this.state.activeTab === 3){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">Invoice Generator</CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                    (Freelance project) Build a web-app where clients can generate their invoices.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Database architecture</li>
                        <li>PHP Data Objects</li>
                        <li>Server set-up</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/InvoiceGen_PUBLIC" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">eCommerce </CardTitle>
                <CardText className="card-desc">
                <span className="desc-title">Goal :</span><br/>
                    First web-project, an eCommerce website built over a week-end without frameworks. Pure PHP and HTML/CSS<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Authentification</li>
                        <li>Cookies handling</li>
                        <li>Administration interface</li>
                    </ul>
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/online_store" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                </CardActions>
            </Card>
    
         </div>
            )   
        }
        else if (this.state.activeTab === 4){
            return(
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="react-language">My Portfolio</CardTitle>
                    <CardText className="card-desc">
                    This very portfolio is built using React, Bootstrap and React-mdl. Published using GitHub Pages <br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>Bootstrap</li>
                        <li>React-mdl</li>
                        <li>Front-end</li>
                    </ul>
                        
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/barthelemyleveque.github.io" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>
             </div>
            )
        }
        else if (this.state.activeTab === 5){
            return(
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="node-language">Concerts Locator</CardTitle>
                    <CardText className="card-desc">
                    Cross-reference your most-streamed artists on Spotify, and their future venues in your town.<br/><br/>
                    <span className="desc-title">Concepts :</span>
                    <ul>
                        <li>API Fetching</li>
                        <li>Express framework</li>
                        <li>MongoDB</li>
                    </ul>
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Spotify_MERN" target="_blank" rel="noopener noreferrer" ><span className="fa faproj fa-github"></span>GitHub</a></Button>
                    </CardActions>
                </Card>
             </div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab className="tab">(All)</Tab>
                    <Tab className="tab">C</Tab>
                    <Tab className="tab">Python</Tab>
                    <Tab className="tab">PHP</Tab>
                    <Tab className="tab">React</Tab>
                    <Tab className="tab">NodeJS</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;