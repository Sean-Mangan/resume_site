import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { resume_data } from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import {CustomTimelineItem} from '../../components/Profile/Profile.js';
import TimelineDot from '@mui/lab/TimelineDot';


import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';


import './Resume.css'
import { TimelineItem } from '@material-ui/lab';
import { TimelineContent } from '@mui/lab';
import { Paper, typographyClasses } from '@mui/material';

export const CustomTitle = ({title}) => {
    return (
        <>
            <span className='underline'></span>
            <h6>
                {title}
            </h6>
        </>
    )
}

const Resume = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className='section pb_45 pt_30'>
                <Grid item className='section_title mb_30'>
                    <CustomTitle title={'About Me'}/>
                </Grid>
                <Grid>
                    <Typography variant='body2' className='aboutme_text ' xs={12}>
                        {resume_data.about}
                    </Typography>
                </Grid>
            </Grid>
            
            {/* Resume */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                        <CustomTitle title={'Resume'}/>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        <Grid item sm={12} md={6} className='timeline_content'>
                            <CustomTimeline icon={<WorkIcon/>} title={'Work History'}>
                                {resume_data.experiences.map((experience) =>(
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent>
                                        <Typography className='timeline_title'>{experience.title}</Typography>
                                        <Typography
                                        variant='caption'
                                        className='timeline_date'>
                                            {experience.company} - {experience.years}
                                        </Typography>
                                        <Typography
                                        variant='body2'
                                        className='timeline_description'>
                                            {experience.description}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        <Grid item sm={12} md={6} className='timeline_content'>
                            <CustomTimeline icon={<SchoolIcon/>} title={'Education history'}>
                                {resume_data.education.map((education) =>(
                                <TimelineItem>
                                    <CustomTimelineSeparator/>
                                    <TimelineContent>
                                        <Typography className='timeline_title'>{education.title}</Typography>
                                        <Typography
                                        variant='caption'>
                                            {education.years}
                                        </Typography>
                                        <Typography
                                        variant='body2'
                                        className='timeline_description'>
                                            {education.description}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
           
            {/* Services */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                            <CustomTitle title={'Services'}/>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent={'space-around'}>
                        {resume_data.services.map(service => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className='service'>
                                    {service.icon}
                                    <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                    <Typography className='service_description' variant='body2'>{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/*Skills*/}
            <Grid container spacing={3} justifyContent={'space-between'} className='section mb_30'>
                {resume_data.skills.map(skill => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={10} className='skill'>
                            <Typography variant='h6' className='skills_title'>
                                {skill.title}
                            </Typography>
                            {skill.description.map(elm =>(
                                <Typography variant='body2' className='skill_description'>
                                    <TimelineDot className='timeline_dot' variant={'outlined'}/> {elm}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>



            <Grid container className='section'></Grid>
        </>
    )
}

export default Resume
