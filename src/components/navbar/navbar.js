import React, { Component } from 'react'
import './navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
export default class navbar extends Component {
    constructor(props) {
          super();
        this.state={
            navBackground:'transparent',
            Text:'black',
            open:false,
        }
    }
   
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 100 ? "transparent" : "white";
          const textColor = window.scrollY<50?"white":'black';
          this.setState({ navBackground: backgroundcolor });
          this.setState({ Text: textColor });
        });
        
      }
    
      componentDidUpdate(){
        if (this.prevOpen.current === true && this.open === false) {
            this.anchorRef.current.focus();
          }
      
          this.prevOpen.current = this.state.open;
      }

      
    render() {

  const handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

//   const handleClose = (event) => {
//     if (this.anchorRef.current && this.anchorRef.current.contains(event.target)) {
//       return;
//     }

//     this.setState({ open: false });
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       this.setState({ open: false });
//     }
//   }
   this.prevOpen = React.createRef(this.state.open);
        return (
            // <div className="navbar-1" style={{backgroundColor:this.state.navBackground}}>
            //     <p className='logo'>Ankita Yadav</p>
            //     <div className="nav-option" style={{color:this.state.Text}}>
            //         <p className="option">Home</p>
            //         <p className="option">Services</p>
            //         <p className="option">My Stories</p>
            //         <p className="option">My Skills</p>
            //         <p className="option">Portfolio</p>
            //         <p className="option">Reviews</p>
            //     </div>
            //     <button className="navbar-btn" style={{color:this.state.Text}}>Contact Me</button> 
            // </div>
            <div className="navbar-1" style={{backgroundColor:this.state.navBackground}}>
                <p className='logo'>Ankita Yadav</p>
                <div style={{alignSelf: 'center'}}>
                <MenuIcon onClick={handleToggle}/>
                <Popper open={this.state.open} transition disablePortal >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center bottom' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={()=>console.log('!!!!!!!!!')}>
                  <MenuList autoFocusItem={this.state.open} id="menu-list-grow">
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                </div>
            </div> 
          
        )
    }
}
