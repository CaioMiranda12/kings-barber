import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 0.5rem;

      select {
        height: 2.25rem;
        background-color: ${theme.colors.black};
        border: 0;
        border-radius: 0.25rem;
        padding: 0 0.75rem;
        color: ${theme.colors.neutral};
        font-size: 1rem;
        width: 100%;
        border: 1px solid transparent;
        transition: all 100ms;

        &:focus {
          border-color: ${theme.colors.primary};
        }

        &::placeholder {
          color: ${theme.colors.neutral};
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;
