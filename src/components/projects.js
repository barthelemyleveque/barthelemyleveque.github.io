import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            blur: 'aurevoir',
        };
    }


    toggleCategories() {
        if (this.state.activeTab === 0 ){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="c-language">Corewar</CardTitle>
                    <CardText className="card-desc">
                    Corewar is a game that takes place in a virtual arena where programs written in a simplistic language fight one another.
                    We explored the design of a VM and challenges related to compiling an assembly language into bytecode.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Corewar" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                        <Button colored>Demo</Button>
                    </CardActions>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="c-language">Lemin</CardTitle>
                <CardText className="card-desc">
                    Lem-in is an algorithmic project that rely upon graph theory to find the shortest paths from a point A to a point B. Each route has a maximum capacity, so we used the Edmund-Karp algorithm to improve our results.
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/lem_in" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                    <Button colored>Demo</Button>
                </CardActions>
            </Card>

                {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Pushswap</CardTitle>
            <CardText>
                Push Swap is an algorithmic project. The goal is to sort a list of numbers, by using a limited set of operations, in the most efficient way possible (the less operations, the better). I implemented a custom Quicksort algorithm, and the results were above expectations.  
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/push_swap" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                <Button colored>Demo</Button>
            </CardActions>
        </Card>

                 {/* Project 4 */}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
            <CardTitle className="c-language">Fillit</CardTitle>
            <CardText>
            This project aim to resolve a recurrent problematic in programming: the search of an optimal solution among a very large number of possibilities, in a resonable time.
            The goal is to arrange Tetriminos between them and to determine the smallest square possible.
            </CardText>
            <CardActions border>
                <Button colored><a href="https://github.com/barthelemyleveque/Fillit" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                <Button colored>Demo</Button>
            </CardActions>
        </Card>

        </div>
            )
        }
       else if (this.state.activeTab === 1 ){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Compress Images</CardTitle>
                <CardText>
                    A personal project, done using some Machine Learning techniques such as Clustering to compress an image.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="python-language">Bootcamp Betatester</CardTitle>
                <CardText>
                    Beta-tested the school's Python bootcamp. Working with the pedagogical team to improve the exercises which teach the basics of Python, Numpy and Pandas.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Demo</Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
    
         </div>
            )
        }
       else if (this.state.activeTab === 2 ){
        return(
            <div className="projects-grid">

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">Invoice Generator</CardTitle>
                <CardText className="card-desc">
                    An ongoing freelance project for a Gas Control company. I had to build a web-app where clients can generate an invoice depending on the characteristics of their fire-system. The backend is done in PHP, and data collection is done through MySQL.
                    <br/>(The code is private, because of the sensitive nature of some infos)
                </CardText>
                <CardActions border>
                    <Button colored>Demo</Button>
                </CardActions>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                <CardTitle className="php-language">eCommerce </CardTitle>
                <CardText>
                    My first web project, built over a week-end. It is a eCommerce website, with the expected functionalities : account creation, order, search for products and categories, an administration page etc. <br/>
                    No librairies were used, full PHP and HTML/CSS
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/barthelemyleveque/online_store" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                </CardActions>
            </Card>
    
         </div>
            )   
        }
        else if (this.state.activeTab === 3 ){
            return(
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="react-language">My Portfolio</CardTitle>
                    <CardText className="card-desc">
                        This very portfolio is built using React, Bootstrap and React-mdl. 
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
             </div>
            )
        }
        else if (this.state.activeTab === 4 ){
            return(
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                    <CardTitle className="node-language">Concerts Locator</CardTitle>
                    <CardText className="card-desc">
                        This ongoing project goal is to cross-reference your favorite artists, thanks to Spotify's API, and their future venues in your town, thanks to Songkick's API. 
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/barthelemyleveque/Spotify_MERN" target="_blank" rel="noopener noreferrer" >GitHub</a></Button>
                        <Button colored>Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
             </div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>C</Tab>
                    <Tab>Python</Tab>
                    <Tab>PHP</Tab>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
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