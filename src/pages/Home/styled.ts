import { styled } from 'styled-components';

import BarberImg from '../../assets/barber.jpg';
import { theme } from '../../styles/theme';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 20rem;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.625rem;
    gap: 0.625rem;
  }
`;

export const HeaderButtons = styled.button``;

export const BarberImgSection = styled.section`
  position: relative;

  width: 100%;
  height: 55vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${BarberImg});
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.5;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const ServiceSection = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: 2.2rem;
  }

  div {
    display: flex;
    gap: 0.625rem;
  }
`;

export const LocationSection = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: 2.2rem;
  }

  iframe {
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const BarberPlaceSection = styled.section`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  align-items: center;

  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: 2.2rem;
  }

  div {
    display: flex;
    gap: 1.625rem;

    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    img {
      height: 25rem;
      width: 20rem;
      border-radius: 0.625rem;
      transition: transform 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 767px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: ${theme.colors.dark};
  width: 100%;
  padding: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    @media (max-width: 767px) {
      align-items: center;
    }
  }

  h2 {
    font-size: 1.25rem;
    color: ${theme.colors.white};
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: ${theme.colors.neutral};
    font-weight: 400;
  }
`;

export const SocialContainer = styled.section`
  display: flex;
  gap: 0.625rem;

  svg {
    width: 2.5rem;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  path {
    fill: #00ed64;
  }
`;
