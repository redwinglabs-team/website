import React, { useState } from 'react';
import styled from 'styled-components/macro';
import 'react-slidedown/lib/slidedown.css';
import useWindowSize from '../../hooks/useWindowSize';
import { theme } from '../../styles/theme';
import CustomDivider from '../shared/CustomDivider';
import DesktopPricingList from './DesktopPricingList';
import MobilePricingList from './MobilePricingList';
import Label from '../shared/Label';

const PricingInfo = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGreyBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 32px 0px;
  margin-right: auto;
  margin-left: auto;
  padding: 64px 170px;
  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
  max-width: inherit;
  @media (max-width: ${({ theme: { mediaQueries } }) => `${mediaQueries.mobilePixel + 1}px`}) {
    padding: 32px;
  }
`;

const PricingList = ({ features, productName, productDescription, categories }) => {
  const [openedAccordion, setOpenedAccordion] = useState(null);
  const [width] = useWindowSize();

  const handleAccordion = (id) => {
    if (id === openedAccordion) {
      setOpenedAccordion(null);
    } else {
      setOpenedAccordion(id);
    }
  };
  return (
    <div id="pricing" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <CustomDivider red />{' '}
        <PricingInfo>
          <Label className="w-100" fontFamily="bold" fontSize={32}>
            pricing
          </Label>
          <Label fontSize={24}>pricing-description</Label>
        </PricingInfo>
        <CustomDivider red />
      </div>
      <div style={{ marginTop: 80 }}>
        {width > theme.mediaQueries.desktopPixel ? (
          <DesktopPricingList
            features={features}
            productName={productName}
            productDescription={productDescription}
            categories={categories}
            openedAccordion={openedAccordion}
            setOpenedAccordion={handleAccordion}
          />
        ) : (
          <MobilePricingList features={features} categories={categories} openedAccordion={openedAccordion} setOpenedAccordion={handleAccordion} />
        )}
      </div>
    </div>
  );
};

export default PricingList;
