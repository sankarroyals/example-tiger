import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div
         style={{margin:"30px 50px"}}
        >
            <h3 style={{ fontSize: "30px", textAlign: "center", fontWeight: "bold" }}><strong> React Router Application</strong></h3>
            <div className='para1'>
                <p style={{ fontSize: "20px", marginLeft: "290px" }}>
                    Create an application in which user can view articles on different topics.</p>
                <p style={{ fontSize: "20px", marginLeft: "290px" }}>
                    The application should have the following links :-
                </p>

            </div>
            <div className='links'>
                <ul
                style={{marginLeft:"270px"}}
                >
                   
                    <li>
                        <a href='/about'>About</a>

                    </li>
                    <li>
                        <a href='/articles'>Articles</a>

                    </li>
                    <li>
                        <a href='/categories'>Categories</a>
                    </li>
                    <li>
                        <a href='/subscribe'>Subscribe</a>
                    </li>
                </ul>

            </div>
            <div className='des'>
                <h3 style={{ fontSize: "20px",
                marginLeft:"370px"
                }}>
                Description:-
                </h3>
            </div>
            <div className='detaildes'>
                <ul
                style={{marginLeft:"265px"}}
                >
                    <li>
                        <strong 
                        
                        style={{color:"black",
                        
                        }}>About: </strong>
                        Clicking on this link should render a component which will give a brief description of the application.
                    </li>
                    <li>
                        <strong 
                        
                        style={{color:"black",
                        
                        }}>Articles: </strong>
Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.                    </li>
                    <li>
                        <strong 
                        
                        style={{color:"black",
                        
                        }}>Categories: </strong>
                        This section contains different categories of articles. User can select any one of the categories.
                    </li>
                    <li>
                        <strong 
                        
                        style={{color:"black",
                        
                        }}>Subscribe:  </strong>
                        This section contains a single input field and a button. The user will enter the email in the input field.
                    </li>
                </ul>
            </div>
            <div className='des'>
                <h3 style={{ fontSize: "20px",
                marginLeft:"290px"
                }}>
                Footer section:-
                </h3>
                <p
                style={{fontSize:"20px",
                marginLeft:"290px"
                }}
                >
                There should be two buttons in the footer section, <strong>back</strong> and <strong>next</strong>. 


                </p>
                <p
                   style={{fontSize:"20px",
                marginLeft:"290px"
                }}
                >
                By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.
                </p>
            </div>


        </div>
    )
}

export default About