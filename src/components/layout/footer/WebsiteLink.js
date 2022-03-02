import { ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PARTNERS, ROUTE_PRODUCTS } from '../../../router/routes';

/* eslint-disable import/prefer-default-export */
export const WEBSITE_LINK_LIST = {
  HOME: {
    title: 'home',
    link: ROUTE_INDEX
  },
  PROJECTS: {
    title: 'products',
    link: ROUTE_PRODUCTS
  },
  PARTNERS: {
    title: 'partners',
    link: ROUTE_PARTNERS
  },
  CONTACT: {
    title: 'contact-us',
    link: ROUTE_CONTACT_US
  }
};
