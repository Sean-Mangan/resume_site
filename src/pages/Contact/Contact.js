import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { CustomTitle } from '../Resume/Resume'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../Resume/Resume.css';
import './Contact.css';
import CustomButton from '../../components/Button/CustomButton';
import { resume_data } from '../../utils/resumeData';

const Contact = () =>
    (
        <>
        <Grid spacing={5} container className='section pb_45 pt_30'>
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className="section_title mb_30">
                        <CustomTitle title={"Contact Form"} />
                    </Grid>


                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='name' label='Name'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth name='email' label='Email'/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={2} name='message' label='Message'/>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButton text={'Submit'}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} lg={5}>
                <Grid item className="section_title mb_30">
                        <CustomTitle title={"Contact Information"} />
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_items">
                                <span>Address: </span> {resume_data.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_items">
                                <span>Phone: </span> {resume_data.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="contactInfo_items">
                                <span>Email: </span> {resume_data.email}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1} className='contactInfo_socialsContainer'>
                                <Grid item className='contactInfo_socials'>
                                    <a href={resume_data.socials.linkedin}><LinkedInIcon/></a>
                                </Grid>
                                <Grid item className='contactInfo_socials' >
                                    <a href={resume_data.socials.instagram}><InstagramIcon/></a>
                                </Grid>
                                <Grid item className='contactInfo_socials'>
                                    <a href={resume_data.socials.github}><GitHubIcon/></a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )


export default Contact
