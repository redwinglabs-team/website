/* eslint-disable import/prefer-default-export */
import { ROUTE_CAREERS, ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PRODUCTS } from "../router/routes";
import BGHome from '../assets/svg/bg-intro/bg-home.svg';
import BGProducts from '../assets/svg/bg-intro/bg-products.svg';
import BGCareers from '../assets/svg/bg-intro/bg-careers.svg';
import BGContact from '../assets/svg/bg-intro/bg-contact.svg';

export const ROUTE_LIST = {
    HOME:{
        title:'Home',
        backgroundImage:BGHome,
        description:{
            0:"OUR MISSION IS",
            1:"TO CREATE TOOLS DESIGNED TO ENHANCE THE GUEST EXPERIENCE",
            2:"THROUGH ADVANCED DECISION MAKING TECHNOLOGIES",
        },
        route:ROUTE_INDEX
    },
    PRODUCTS:{
        title:'Products',
        backgroundImage:BGProducts,
        description:{
            0:"OUR MISSION IS",
            1:"TO BRING THE LATEST TECHNOLOGICAL ADVANCEMENTS",
            2:"TO THE FOREFRONT OF THE HOSPITALITY INDUSTRY.",
        },
        route:ROUTE_PRODUCTS
    },
    CAREERS:{
        title:'Careers',
        backgroundImage:BGCareers,
        description:{
            0:"WE ARE LOOKING",
            1:"FOR PEOPLE TO JOIN OUR FAMILY",
            2:"AND BUILD A COMMON COMPANY CULTURE",
        },
        route:ROUTE_CAREERS
    },
    CONTACT:{
        title:'Contact Us',
        backgroundImage:BGContact,
        description:{
            0:"WE ARE",
            1:"LEADING THE HOSPITALITY INDUSTRY TOWARDS NEW TECHNOLOGIES",
        },
        route:ROUTE_CONTACT_US
    }
}