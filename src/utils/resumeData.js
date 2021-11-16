import axios from 'axios';
import React, { useEffect, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloudIcon from '@mui/icons-material/Cloud';

const data_url = 'https://krcx9bt1u8.execute-api.us-east-1.amazonaws.com/default/resify-data';

export const getData = async () => {
    let resp
       await axios
            .get(data_url)
            .then(response => {
                resp = response.data.user;
            })
            .catch(error => console.log('get error', error));
    resume_data = resp;
    return resp
    };

export const resume_data = {
        name : 'Sean Mangan',
        title : 'Software Engineer',
        birthday : 'February 28, 2000',
        email : 'manga093@umn.edu',
        address: '866 21st ave se, Minneapolis, Minnesota',
        phone: '952 356 5315',
        socials: {
            instagram : 'https://www.instagram.com/fresh.mangoz/',
            linkedin : 'https://www.linkedin.com/in/sean-mangan-5003101a4/',
            github : 'https://github.com/Sean-Mangan'
        },
        about: 'Hey there! My name is Sean Mangan and I am currently a student at the university of Minnesota and studying computer science. I am very excited to report that I will be graduating at the end of this current semester (Fall 2021) and even more excited to report that I am looking for employment afterwards.\n\nDespite being freshly graduated, I have plenty of experience in software development. From researching in an academic setting in Oslo (SINTEF) to providing VAN operations here in Minneapolis (SPS commerce) to even helping fellow students as a TA, it feels as if I have seen it all. But I am ready to put even more on my plate and put some more notches on my belt.\n\nPlease reach out if you are at all interested in meeting with me to see if I would be a good fit for your team. I am very excited to work with you in the future!',
        experiences: [
            {
                title: 'AI Department Intern',
                years: 'Summer 2019',
                company: 'SINTEF',
                location: {
                    country: 'Norway',
                    city: 'Oslo'
                },
                description: 'Worked with top artifical intelligence engineers in projects both for academia and Scandinavian industry in Oslo, Norway.'
            },
            {
                title: 'Software Engineering Intern',
                years: 'Summer 2020',
                company: 'DOW Jones',
                location: {
                    country: 'United States',
                    city: 'Minneapolis'
                },
                description: 'Attended the DOW Jones Summer Series as an alternative to the regular internship program as a result of the COVID-19 pandemic.'
            },
            {
                title: 'Software Engineering Intern',
                years: 'Summer 2021',
                company: 'SPS Commerce',
                location: {
                    country: 'United States',
                    city: 'Minneapolis'
                },
                description: 'Worked as a member of the VAN Operations team with the general responsibility of maintaing the integity of the flow of data to and from the largest EDI solution provider.'
            }
        ],
        education: [
            {
                title: 'Lakeville North Highschool',
                years: '2014-2018',
                description: 'Graduated summa cum laude in 2018. That year the football team won state as well.'
            },
            {
                title: 'University of Minnesota',
                years: '2018-2021',
                description: 'Computer Science student in the college of Science and Engineering. GPA of 3.508 and an expected graduation of December 2021.'
            },
        ],
        services: [
            {
                title: 'Web Development',
                description: 'Website design and implementation',
                icon: <LanguageIcon/>
            },
            {
                title: 'Artificial Intelligence',
                description: 'Design custom ML and AI solutions',
                icon: <LightbulbIcon/>
            },
            {
                title: 'Cloud Solutions',
                description: 'Engineering built to scale seemlesly',
                icon: <CloudIcon/>
            }
        ],
        skills: [
            {
                title: 'Front-end',
                description: ['ReactJS', 'Javascript', 'WebAssembly', 'Bootstrap']
            },
            {
                title: 'Databases',
                description: ['SQL', 'Liquibase', 'MongoDB', 'Design']
            },
            {
                title: 'Backend',
                description: ['Python', 'Java', 'C', 'Node']
            },
            {
                title: 'AWS',
                description: ['Lambda', 'CI/CD', 'EC2', 'RDS']
            }
        ],
        resume: 'https://docs.google.com/document/d/1zWZ9Z3Uk-NFKUxj3ZTKqZ8dpZ0U7bSr_UmHnijLjY54/edit?usp=sharing',
    }
