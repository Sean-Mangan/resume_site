import React from 'react'

import './CustomButton.css'
import { Button } from '@material-ui/core';

const CustomButton = ({text, icon, link}) => {

    return (
        <Button 
        className='custom_btn' 
        endIcon={icon ? (<div className="btn_icon_container">{icon}</div>): null}
        href={link}
        target='_blank'
        download>
            <span className='btn_text'>{text}</span>
        </Button>
    )
}

export default CustomButton
