import React, { Component } from 'react'
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
export default class navbar extends Component {
    constructor(props) {
          super();
        this.state={
            navBackground:'transparent',
            Text:'white',
            open:false,
            screen:true,
            anchorEl:null,
        }
    }
   
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 50 ? "transparent" : "white";
          const textColor = window.scrollY<50?"white":'black';
          this.setState({ navBackground: backgroundcolor });
          this.setState({ Text: textColor });
        });
        window.addEventListener("resize",()=>{
          const size = window.innerWidth<800?false:true
          this.setState({screen:size})
        })
      }
    
      
    render() {
      const handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget})
        this.setState({open:!this.state.open})
      };

        return (
          window.innerWidth>800?<div className="navbar-1" style={{backgroundColor:this.state.navBackground}}>
                <p className='logo'>Ankita Yadav</p>
                <div className="nav-option" style={{color:this.state.Text}}>
                    <p className="option">Home</p>
                    <p className="option">Services</p>
                    <p className="option">My Stories</p>
                    <p className="option">My Skills</p>
                    <p className="option">Portfolio</p>
                    <p className="option">Reviews</p>
                </div>
                <button className="navbar-btn" style={{color:this.state.Text}}>Contact Me</button> 
            </div>:
            <div className="mob-nav" style={{backgroundColor:this.state.navBackground}}>
                <p className='logo' style={{flexGrow:3}}>Ankita Yadav</p>
                <div style={{alignSelf: 'center'}}>
                <MenuIcon onClick={handleClick}/>
                <Popper style={{width: '100%',backgroundColor:'#6b1e9c',color:'white'}} open={this.state.open} anchorEl={this.state.anchorEl} placement="bottom" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{backgroundColor:'#6b1e9c',color:'white'}} > 
               <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>My Story</MenuItem>
                    <MenuItem>My Skills</MenuItem>
                    <MenuItem>Portfolio</MenuItem>
                    <MenuItem>Reviews</MenuItem>
               </MenuList>
            </Paper>
          </Fade>
        )}
      </Popper>
                </div>
            </div> 
          
        )
    }
}
