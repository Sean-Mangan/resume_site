import React from 'react'
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Container
} from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { resume_data } from '../../utils/resumeData';
import WorkIcon from '@mui/icons-material/Work';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Link, NavLink, withRouter} from "react-router-dom";
import CustomButton from '../Button/CustomButton';

const Header = (props) => {

    const pathName = props?.location?.pathname

    return(
        <Navbar sticky="top" className='header container_shadow' expand="lg">
            <Nav.Link as={NavLink} to='/'
            className='home_nav'>
                <Navbar.Brand className='header_home'>
                    <HomeIcon/>
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header_left'>
                    <Nav.Link as={NavLink} to='/' 
                    className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/contactme'
                    className={pathName === '/contactme' ? 'header_link_active' : 'header_link'}>
                        Contact
                    </Nav.Link>
                </Nav>
                <div className='header_right'>
                    <a href={resume_data.socials.linkedin}><LinkedInIcon/></a>
                    <a href={resume_data.socials.instagram}><InstagramIcon/></a>
                    <a href={resume_data.socials.github}><GitHubIcon/></a>
                    <CustomButton text={'Hire Me'} 
                    icon={<WorkIcon/>} 
                    link={'mailto:manga093@umn.edu?subject=We would like to hire you'}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);
