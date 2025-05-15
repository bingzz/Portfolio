import face from '../assets/img/face.jpg';
import ga from '../assets/img/ga.png';
import uc from '../assets/img/uc.jpg';
import tesda from '../assets/img/tesda.jpg';
import phs from '../assets/img/phs.png';

import js from '../assets/img/js.png';
import ts from '../assets/img/ts.png';
import css from '../assets/img/css.png';
import html from '../assets/img/html.png';
import golang from '../assets/img/golang.png';
import mysql from '../assets/img/mysql.png';
import mongodb from '../assets/img/mongodb.png';
import postgres from '../assets/img/postgres.png';
import cs from '../assets/img/cs.png';
import java from '../assets/img/java.png';

import git from '../assets/img/git.png';
import trello from '../assets/img/trello.png';
import phpmyadmin from '../assets/img/phpmyadmin.png';
import vscode from '../assets/img/vscode.png';
import postman from '../assets/img/postman.png';
import insomnia from '../assets/img/insomnia.png';
import dbeaver from '../assets/img/dbeaver.png';
import docker from '../assets/img/docker.png';
import lightroom from '../assets/img/lightroom.png';
import premiere from '../assets/img/premiere.png';
import photoshop from '../assets/img/photoshop.png';
import canva from '../assets/img/canva.png';

import angular from '../assets/img/angular.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.png';
import svelte from '../assets/img/svelte.png';
import jquery from '../assets/img/jquery.png';
import sass from '../assets/img/sass.png';
import tailwindcss from '../assets/img/tailwindcss.png';
import bootstrap from '../assets/img/bootstrap.png';
import { Projects } from '../models/schema';

export const personal_info = {
  name: 'Irving Craig Real',
  email: 'bingz.real@gmail.com',
  location: 'Cebu, Philippines',
  contact: '(+63) 933-055-3684',
  img: face,
  education: [
    {
      name: 'University of Cebu - Banilad',
      achievement: 'Bachelor of Science in Information Technology',
      icon_src: uc,
      length: 'Oct 2017 - Sep 2022'
    },
    {
      name: 'Technical Education and Skills Development Authority (TESDA)',
      achievement: 'Electrical Installation NC - II',
      icon_src: tesda,
      length: 'Mar 2017 - Jun 2017'
    },
    {
      name: 'Pikesville High School',
      achievement: 'Higher Secondary Education',
      icon_src: phs,
      length: 'Sep 2010 - May 2014'
    },
  ],
  experience: [
    {
      position: 'Web Developer',
      company: 'GoodApps Inc.',
      icon_src: ga,
      length: 'Nov 2022 - Apr 2025',
    },
  ],
  stack: [
    {
      name: 'Javascript',
      icon_src: js,
    },
    {
      name: 'Typescript',
      icon_src: ts,
    },
    {
      name: 'CSS',
      icon_src: css,
    },
    {
      name: 'HTML',
      icon_src: html,
    },
    {
      name: 'Go',
      icon_src: golang,
    },
    {
      name: 'MySQL',
      icon_src: mysql,
    },
    {
      name: 'MongoDB',
      icon_src: mongodb,
    },
    {
      name: 'PostgreSQL',
      icon_src: postgres,
    },
    {
      name: 'C#',
      icon_src: cs,
    },
    {
      name: 'Java',
      icon_src: java,
    },
  ],
  tools: [
    {
      name: 'Git',
      icon_src: git,
    },
    {
      name: 'Trello',
      icon_src: trello,
    },
    {
      name: 'PHPMyAdmin',
      icon_src: phpmyadmin,
    },
    {
      name: 'Visual Studio Code',
      icon_src: vscode,
    },
    {
      name: 'Postman',
      icon_src: postman,
    },
    {
      name: 'Insomnia',
      icon_src: insomnia,
    },
    {
      name: 'DBeaver',
      icon_src: dbeaver,
    },
    {
      name: 'Docker',
      icon_src: docker,
    },
    {
      name: 'Adobe Lightroom',
      icon_src: lightroom,
    },
    {
      name: 'Adobe Premiere',
      icon_src: premiere,
    },
    {
      name: 'Adobe Photoshop',
      icon_src: photoshop,
    },
    {
      name: 'Canva',
      icon_src: canva,
    },
  ],
  frameworks: [
    {
      name: 'Angular',
      icon_src: angular,
    },
    {
      name: 'React',
      icon_src: react,
    },
    {
      name: 'NodeJS',
      icon_src: nodejs,
    },
    {
      name: 'Svelte',
      icon_src: svelte,
    },
    {
      name: 'jQuery',
      icon_src: jquery,
    },
    {
      name: 'Sass',
      icon_src: sass,
    },
    {
      name: 'TailwindCSS',
      icon_src: tailwindcss,
    },
    {
      name: 'Bootstrap',
      icon_src: bootstrap,
    },
  ]
};

export const apiKeys = {
  emailjs: {
    send_url: 'https://api.emailjs.com/api/v1.0/email/send',
    public_key: '2iK7nEIsF-u1sXWVW',
    template_id: 'template_qf4rocm',
    service_id: 'service_3040jov',
  },
  recaptcha: {
    site_key: '6Ld3OzIrAAAAAE37BI5PavHttSCRkfpqvEUoDBZV',
    secret_key: ''
  }
};

export const projects: Projects[] = [
  {
    name: 'Personal Portfolio',
    url: 'https://github.com/bingzz/Portfolio',
    languages: [
      {
        language: 'React',
        icon_src: react,
      },
      {
        language: 'CSS',
        icon_src: css,
      },
    ]
  },
  {
    name: 'MEAN Stack',
    url: 'https://github.com/bingzz/MEAN/',
    languages: [
      {
        language: 'Angular',
        icon_src: angular
      },
      {
        language: 'Nodejs',
        icon_src: nodejs
      },
      {
        language: 'MongoDB',
        icon_src: mongodb
      },
    ]
  },
  {
    name: 'Go REST API',
    url: 'https://github.com/bingzz/web-server',
    languages: [
      {
        language: 'Go',
        icon_src: golang
      },
      {
        language: 'Postgres',
        icon_src: postgres
      },
    ]
  },
  {
    name: 'Basic Snake Game',
    url: 'https://github.com/bingzz/Snake',
    languages: [
      {
        language: 'Javascript',
        icon_src: js
      },
      {
        language: 'HTML',
        icon_src: html
      },
      {
        language: 'CSS',
        icon_src: css
      },
    ]
  },
  {
    name: 'Weather App',
    url: 'https://github.com/bingzz/angular-weatherApp',
    languages: [
      {
        language: 'Angular',
        icon_src: angular
      },
      {
        language: 'Sass',
        icon_src: sass
      }
    ]
  },
  {
    name: 'Vehicle Parts Inventory System',
    url: 'https://github.com/bingzz/Fourwheels-Enterprises',
    languages: [
      {
        language: 'C#',
        icon_src: cs
      }
    ]
  },
  {
    name: 'First basic webpage',
    url: 'https://github.com/bingzz/EasyBank',
    languages: [
      {
        language: 'HTML',
        icon_src: html
      },
      {
        language: 'Sass',
        icon_src: sass
      },
      {
        language: 'Javascript',
        icon_src: js
      },
    ]
  },
];