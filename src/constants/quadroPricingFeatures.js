/* eslint-disable import/prefer-default-export */
export const QUADRO_PRICING_CATEGORIES = {
  CLASSIC: [
    { id: 'ESSENTIALS', name: 'Essentials', description: 'For small businesses.' },
    { id: 'PRO', name: 'Pro', description: 'Ideal for medium to large businesses.' },
    { id: 'ENTERPRISE', name: 'Enterprise', description: 'For all businesses looking to increase revenue across multiple properties and channels.' }
  ],
  ENTERTAINMENT: [{ id: 'CONNECT', name: 'Connect', description: 'Omnichannel guest entertainment and communication platform.' }]
};

export const QUADRO_PRICING_FEATURES = {
  PMS: [
    {
      feature: 'Management Dashboard',
      description:
        'Overview Dashboard that displays important events that affect the structure  of business operations on a daily basis (check-ins, check-outs, occupancy, spaces, and property alerts.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Operations Timeline',
      description:
        'Reservations timeline view,  includes a real-time overview of all reservations, status of reservations, companions associated with a reservation holder, and notes specific to that reservation.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Front Office Management',
      description:
        'Includes Check-in to check-out management, management of charges, profile management, permission management, and automated payments related to guests and guest activites.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Space Management*',
      description:
        'Includes real-time space status and management updates, overview of users  assigned to each space, and the ability to assign a user  to a space or multiple spaces in bulk.',
      essentials: 'Up to 20',
      pro: '40 - 80',
      enterprise: '80+'
    },
    {
      feature: 'User Roles',
      description:
        'Management module designed for defining specific roles and permissions that are then assigned to each user on the platform or for each department where a user may be assigned.  This feature also assigns a responsible employee for each created department, that will be notified when predefined selected actions that affect the department are triggered.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Promotional Codes',
      description:
        'Creation of promotional vouchers and promotional codes for companies and travel agencies that allow users with specific privileges to channel charges according to predefined rules.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Customer Managment ',
      description:
        'Collection of personal information, management of preferences, storage of documents and addresses, possibility to upload any kind of file related to that profile. Manage preferences, history, invoicing and billing, from a centralized module.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Payments Module',
      description:
        'Accept payments by applying a customer credit card as a payment method through the Payment Module via 3rd Party Integration with the Stripe API.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Hosted Booking Engine',
      description:
        'Direct integration into PMS, commission-free, provides flexibility in creation, management, and deployment of multiple bookable space and services structures, including promotional codes specific to each created bookable service. Fully integrated payment processing through the Payments Module.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Reports',
      description: 'Reports section intended to provide relevant reports to view or print, detailed by specific organizational and product function.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Analytics',
      description: '  Control module for all user actions that take place inside the system.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Rate Management*',
      description: 'Creation and customization of property rates when accounting for rules, offers, derivations and restrictions.',
      essentials: 'Up to 3 Rates',
      pro: 'Up to 10 Rates',
      enterprise: 'Up to 20 Rates'
    },
    {
      feature: 'Occupancy/Availability',
      description: 'Overview of the occupancy and availability of your property segmented by space categories and date.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Alert Managment',
      description: 'Management of internal alerts to the structure that can be viewed by department.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Task Managment',
      description: 'Management of the activities that each employee must carry out within the structure.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Action Log',
      description: 'Possibility to control all the actions carried out within the pms.',
      essentials: '3 Months',
      pro: '6 Months',
      enterprise: '12 Months'
    },
    {
      feature: 'Integrations Marketplace',
      description:
        'Wide choice of additions aimed at improving the operation of the structure, generating more revenue and improving the guest experience.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'API access and support',
      description: 'API support to facilitate the integration of third party software with framework through our bees.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Multi-property',
      description: 'Possibility to make reservations for all the structures belonging to a single group.',
      essentials: false,
      pro: 'Up to 3',
      enterprise: 'Up to 5'
    },
    {
      feature: 'Personalized settings',
      description: 'Customized management of hotel preferences with automatic visibility on external platforms.',
      essentials: true,
      pro: true,
      enterprise: true
    }
  ],
  FNB: [
    {
      feature: 'Cashier Registry',
      description:
        'System where merchant calculates the amount owed by the customer, indicates that amount, may prepare an invoice for the customer, and indicates the options for the customer to make payment.',
      essentials: '1 Outlet',
      pro: 'Up to 3 Outlet',
      enterprise: '3+ Outlet'
    },
    {
      feature: 'Centralized Reservations',
      description: 'This interactive interface offers all the tools for managing all reservations from one centralized summary dashboard.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Kitchen Management',
      description: 'Section for the control of orders in the kitchen with real-time communication to the dining room staff.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Waiter Table-side ordering',
      description: 'Mobile version for waiters to be able to send orders directly to the kitchen from a handheld device.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Customer Management',
      description: 'Module in which a restaurant or business administers its interactions with customers.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Space Management',
      description: 'Table management and sales under control in a few clicks and all from a single screen.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Revenue Management',
      description: 'Management of all sales with export features, and segmented by revenue categories.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Inventory Management',
      description: 'Optimize inventory control. Import all the products from the menu, save them and order them according to your preferred methods.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'PMS Integration',
      description: 'Direct two way integration with Quadro PMS for the management and sharing of guests and connectivity for charges.',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Personalized Settings',
      description: 'Personalized management of outlet preferences with visibility on integrated external platforms.',
      essentials: false,
      pro: true,
      enterprise: true
    }
  ],
  POP: [
    {
      feature: 'Cashier Registry',
      description:
        'Module where merchant calculates the amount owed by the customer, indicates that amount, may prepare an invoice for the customer, and indicates the options for the customer to make payment.',
      essentials: '1 Outlet',
      pro: 'Up to 3 Outlet',
      enterprise: '3+ Outlet'
    },
    {
      feature: 'Universal Device Compatibility',
      description: 'Compatible with any screen, from PC to tablet to smartphone.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Inventory Management',
      description: 'Optimize inventory control. Import all the products from the menu, save them and order them according to your preferred methods.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Customer Management',
      description: 'Module in which a restaurant or business administers its interactions with customers.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Multi Outlet Capabilities',
      description: 'Centralized control with quick access to all your points of purchase.',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'Revenue Management',
      description: 'Management of all sales with export features, and segmented by revenue categories.',
      essentials: true,
      pro: true,
      enterprise: true
    },

    {
      feature: 'Personalized Settings',
      description: 'Personalized settings of outlet preferences with visibility on integrated external platforms.',
      essentials: true,
      pro: true,
      enterprise: true
    }
  ],
  ENTERTAINMENT: [
    {
      feature: 'Tv & On Demand Channels',
      description: 'Wide choice of TV and on demand channels, including pay TV services.',
      connect: true
    },
    {
      feature: 'Casting & Airplay',
      description: '',
      connect: true
    },
    {
      feature: 'E-Commerce Services',
      description: 'Management of sales services for goods and products.',
      connect: true
    },
    {
      feature: 'Native Apps w/ hard reset feature',
      description: '',
      connect: true
    },
    {
      feature: 'Maps & City guides',
      description: 'Availability of guides and maps of the reference area always updated',
      connect: true
    },
    {
      feature: 'Guest Messaging',
      description: '',
      connect: true
    },
    {
      feature: 'Housekeeping Module',
      description: 'Possibility to request the room cleaning service if necessary directly from the TV,',
      connect: true
    },
    {
      feature: 'Video and Music Library',
      description: '',
      connect: true
    },
    {
      feature: 'Weather',
      description: 'Integration with a constantly updated weather tool.',
      connect: true
    },
    {
      feature: 'Live Airport Information',
      description: 'Integration with the information system of local airports.',
      connect: true
    },
    {
      feature: 'Voice Commands',
      description: 'Integration with amazon Alexa voice system.',
      connect: true
    },
    {
      feature: 'Kids Lock',
      description: 'Parental control function through the use of a security code.',
      connect: true
    },
    {
      feature: 'IOT Capabilities',
      description: '',
      connect: true
    },
    {
      feature: 'System Dashboard',
      description: '',
      connect: true
    },
    {
      feature: 'Live Airport Information',
      description: '',
      connect: true
    },
    {
      feature: 'Fully customizable templates',
      description: 'Fully customizable user interface according to the needs of the facility.',
      connect: true
    }
  ]
};
