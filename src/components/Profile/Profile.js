import { Typography } from '@material-ui/core';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TimelineContent from '@mui/lab/TimelineContent';
import React from 'react';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline';
import CustomButton from '../Button/CustomButton';
import DownloadIcon from '@mui/icons-material/Download';

import './Profile.css';
import p_img from '../../assets/images/profile_image.jpg';
import { resume_data } from '../../utils/resumeData';
import { TimelineItem } from '@mui/lab';

export const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
             <Typography className='timelineItem_text'>
                <span>{title}</span>{": "}{text}
             </Typography>
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resume_data.name}</Typography>
                <Typography className='title'>{resume_data.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={p_img} alt="Other"/>
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title='Name' text={resume_data.name} />
                    <CustomTimelineItem title='Title' text={resume_data.title} />
                    <CustomTimelineItem title='Email' text={resume_data.email} />
                </CustomTimeline>
                <div className='custom_btn_container'>
                    <CustomButton text='Resume'
                    icon={<DownloadIcon/>}
                    link={resume_data.resume} />
                </div>
            </div>
        </div>
    )
}

export default Profile
