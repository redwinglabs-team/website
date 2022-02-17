import React, { useState } from 'react';
import 'react-slidedown/lib/slidedown.css';
import useWindowSize from '../../../hooks/useWindowSize';
import {theme} from '../../../styles/theme';
import DesktopPricingList from './DesktopPricingList';
import MobilePricingList from './MobilePricingList';



const PricingList = ({ features }) => {
  const [openedAccordion, setOpenedAccordion] = useState(null);
  const [width] = useWindowSize()
  return (
    width>theme.mediaQueries.desktopPixel ?
      <DesktopPricingList features={features} openedAccordion={openedAccordion} setOpenedAccordion={setOpenedAccordion} />
      : <MobilePricingList features={features} openedAccordion={openedAccordion} setOpenedAccordion={setOpenedAccordion} />
  );
};

export default PricingList;
