import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 1.25rem;
    color: ${theme.colors.white};
    font-weight: 700;
    text-align: center;
  }
`;

export const SocialContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 4rem;

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
