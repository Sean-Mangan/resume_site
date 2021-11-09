import { Typography } from '@material-ui/core';
import React from 'react';
import { resume_data } from '../../utils/resumeData';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>
            <Typography className='footer_name'>{resume_data.name}</Typography>
            </div>
            <div className='footer_right'>
            <Typography className='footer_copywrite'>
                Developed and Designed by 
                <a href='/' target='_blank'> Sean Mangan</a>
                <br/>
                Inspiration from <a href='https://themeforest.net/user/tavonline' target='_blank'>Tavonline</a>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
