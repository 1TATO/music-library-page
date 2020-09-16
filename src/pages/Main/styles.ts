import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: 4rem 8rem;
  background: linear-gradient(to right, #140729, #1e0531);
  display: flex;
  flex: 1;
`;

export const Form = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;

  svg {
    color: var(--color-text);
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  input {
    color: var(--color-text);
    background: linear-gradient(to right, #140729, #1e0531);
    border-radius: 0.5rem;
    width: 100%;
    height: 80%;
    padding: 0 2rem;
    border: none;
    outline: 0;
  }
`;