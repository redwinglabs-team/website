/* eslint-disable import/prefer-default-export */
import React from "react";

import { DescriptionQuadroEntertainment, DescriptionQuadroEntertainmentTv, DescriptionQuadroPms, DescriptionQuadroPmsMobile } from "../assets";

export const QUADRO_DESCRIPTION_LIST = {
    PMS:{
        BASE_DESCRIPTIONS:{
            0:{
                title: "Reservation Managment",
                description:`Manage reservation requests for all accommodations
                and rentable spaces in one intuitively designed and 
                highly customizable space. Quadro PMS features simple 
                access to space status, reservation status, guest companion profiles, and individual or group billing. 
                `,
            },
            1:{
                title:"Booking Engine",
                description:`No need to pay fees to OTA’s. The built-in booking engine 
                provides a direct booking channel, analytics data for price setting, and a simple widget for direct integration to property websites.`,
            },
            2:{
                title:"Secure Payments",
                description:`Stripe integration provides a dedicated payment gateway, payment processing, and tokenization of credit cards, providing a secure simple, and comprehensive payment suite.`,
            },
            3:{
                title:"100% Responsive",
                description:`Say goodbye to  irritating zooming, scrolling or resizing with a fully responsive website application that rescales itself to preserve the user experience and aesthetic across any device. `,
            }
        },
        BASE_DESCRIPTIONS_IMAGE:<DescriptionQuadroPms/>,
        OTHER_DESCRIPTIONS:{
            0:{
                title: "Space Managment",
                description:`Innovate how you think of room and space management with intuitive hassle-free scheduling and management of all bookable spaces  
                `,
            },
            1:{
                title:"Analytics Platform",
                description:`A benchmarking and analytics tool designed to drive strategy, build customer loyalty, and elevate productivity. Run forecast and budget reports with bespoke metrics or choose from out of the box solutions tailored to industry best practices.`,
            },
            2:{
                title:"Integrations MarketPlace",
                description:`An integration library with simple plug and play functionality designed to provide seamless connectivity with best-in-class partners across all industry verticals.`,
            },
            3:{
                title:"Revenue Managment",
                description:`Drive  asset revenue performance and foster collaborative team engagement with the powerful revenue management platform. Quadro PMS provides the tools required to make data-driven decisions that directly impact topline growth and  the bottom line.`,
            }
        },
        OTHER_DESCRIPTIONS_IMAGE:<DescriptionQuadroPmsMobile/>
    },
    ENTERTAINMENT:{
        BASE_DESCRIPTIONS:{
            0:{
                title: "TV-& Entertainment",
                description:`Watch live TV or enjoy the latest binge-worthy content and on-demand entertainment services.`,
            },
            1:{
                title:"Airplay-& Casting",
                description:`Customers can cast content from thousands of apps on their smart device to the in-room Quadro Entertainment system, instantly making use of the in-room TV monitor. Simply connect to Wi-Fi and go. `,
            },
            2:{
                title:"System Dashboard",
                description:`Manage communications, custom content, and guest orders placed directly from the in-room system. `,
            }
        },
        BASE_DESCRIPTIONS_IMAGE:<DescriptionQuadroEntertainment/>,
        OTHER_DESCRIPTIONS:{
            0:{
                title: "Native Apps",
                description:`Our digital solutions are tailored specifically for your business. Every organization is unique. We build flexible tools that work the way you need them to work.`,
            },
            1:{
                title:"Guest Service",
                description:`Unlike existing systems that are based on ancient technologies that cannot interface with third-party software, our products live in the cloud. This allows for faster development and integration with other open-sourced software.`,
            },
            2:{
                title:"Complete Connectivity",
                description:`Our products are built from the ground up so that they are flexible and extensible. This way we also ensure that all our digital solutions stay fast, stable and secure over the long run. `,
            }
        },
        OTHER_DESCRIPTIONS_IMAGE:<DescriptionQuadroEntertainmentTv/>
    },
    FNB:{
        BASE_DESCRIPTIONS:{
            0:{
                title: "Central Reservations",
                description:`Save time and eliminate user errors by booking reservations 
                and manage daily arrivals, and cancellations from a single 
                intuitively-designed dashboard.`,
            },
            1:{
                title:"Customer Managment",
                description:`Tool that manages and displays segmented customer profiles, based on customizable variables and preferences including: historical data, demographic data, geographic data, psychographic data, behavioral data, repeat patronage, and spend data.`,
            },
            2:{
                title:"Multi-outlet Dashboard",
                description:`Easily access and manage reservations, invoices and employees on a consolidated or single-asset basis through the home dashboard. 
                `,
            },
        },
        OTHER_DESCRIPTIONS:{
            0:{
                title: "100% Responsive",
                description:`Say goodbye to  irritating zooming, scrolling or resizing with a 
                fully responsive website application that rescales itself to 
                preserve the user experience and aesthetic across all devices.`,
            },
            1:{
                title:"Tableside Ordering",
                description:`Tableside order processing and management from any device 
                made simple with user specific roles, permissions, dashboard views, and employee action logging. `,
            },
            2:{
                title:"Open Integrations",
                description:`An integration library  with simple plug and play functionality designed to provide seamless connectivity with best-in-class partners across all industry verticals.`,
            },
        },
    },
    POP:{
        BASE_DESCRIPTIONS:{
            0:{
                title: "Point of Purchase",
                description:`POP is a cloud-based point of purchase and management system, that helps restaurants, bars and retail stores enhance operations, increase sales and elevate the  guest experience.`,
            },
            1:{
                title:"Multipurpose Solution",
                description:`Whether a single store with multiple sales points, or multiple warehouses with a single sales point, the POP scalable  architecture is designed to provide a flexible interface rightsized for a wide range of business requirements.`,
            }
        },
        OTHER_DESCRIPTIONS:{
            0:{
                title: "Customer Managment",
                description:`Build and manage comprehensive customer profiles
                segmented by fields like guest preferences, demographic, 
                geographic, psychographic, behavior, last visit, and spend profile.`,
            },
            1:{
                title:"Sales Reporting",
                description:`A benchmarking and analytics tool designed to drive strategy, build customer loyalty, and elevate productivity. Run forecast and budget reports with bespoke metrics or choose from out of the box solutions tailored to industry best practices.`,
            }
        },
    }

}