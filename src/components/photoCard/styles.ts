import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  width: 100%;

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

  h3 {
    color: ${theme.colors.white};
  }
`;
