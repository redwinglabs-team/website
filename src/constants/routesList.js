/* eslint-disable import/prefer-default-export */
import React from "react";
import { ROUTE_PARTNERS, ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PRODUCTS } from "../router/routes";
import BGHome from '../assets/svg/bg-intro/bg-home.svg';
import BGProducts from '../assets/svg/bg-intro/bg-products.svg';
import BGCareers from '../assets/svg/bg-intro/bg-careers.svg';
import BGContact from '../assets/svg/bg-intro/bg-contact.svg';
import { BGEntertainment, BGFnb, BGPms, BGPop } from "../assets";

export const ROUTE_LIST = {
    HOME:{
        title:'Home',
        backgroundImage:BGHome,
        description:{
            0:"WE BUILD TOOLS",
            1:"DESIGNED TO ENHANCE THE GUEST EXPERIENCE",
            2:"THROUGH ADVANCED DECISION MAKING TECHNOLOGIES",
        },
        route:ROUTE_INDEX
    },
    PRODUCTS:{
        title:'Products',
        backgroundImage:BGProducts,
        description:{
            0:"WE BUILD TOOLS",
            1:"DESIGNED TO ENHANCE THE GUEST EXPERIENCE",
            2:"THROUGH ADVANCED DECISION MAKING TECHNOLOGIES",
        },
        route:ROUTE_PRODUCTS
    },
    CAREERS:{
        title:'Careers',
        backgroundImage:BGCareers,
        description:{
            0:"WE ARE",
            1:"CURIOUS, AMBITIOUS, HUMBLE & HUNGRY",
            2:"SOUND LIKE YOU? WE WANT TO KNOW",
        },
        route:ROUTE_PARTNERS
    },
    CONTACT:{
        title:'Contact Us',
        backgroundImage:BGContact,
        description:{
            0:"WE ARE",
            1:"LEADING THE HOSPITALITY INDUSTRY TOWARDS NEW TECHNOLOGIES",
        },
        route:ROUTE_CONTACT_US
    },
    FNB:{
        title:'Fnb',
        productImage:<BGFnb/>,
        description:{
            0:"QUADRO",
            1:"FOOD & BEVERAGE MANAGER",
        },
    },
    POP:{
        title:'Pop',
        productImage:<BGPop/>,
        description:{
            0:"QUADRO",
            1:"POINT OF PURCHASE",
        },
    },
    PMS:{
        title:'Pms',
        productImage:<BGPms/>,
        description:{
            0:"QUADRO",
            1:"PROPERTY MANAGEMENT SYSTEM",
        },
    },
    ENTERTAINMENT:{
        title:'Entertainment',
        productImage:<BGEntertainment/>,
        description:{
            0:"QUADRO",
            1:"ENTERTAINMENT SOLUTION",
        },
    },
}