import styled from 'styled-components';

export const LeftColumn = styled.div`
  width: 30rem;
  height: 100vh;
  background-color: var(--color-secundary);

  display: flex;
  flex-direction: column;
  left: 0;
`;

export const Profile = styled.div`
  margin: 6.5rem auto;
  display: flex;
  flex-direction: row;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 0.4rem;
    margin-right: 1rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 15rem;

  h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  a {
    font-size: 2rem;
    color: var(--color-links);
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-left: 0.5rem;
    }

    &:hover {
      color: var(--color-text);
    }
  }
`;

export const LinksWrapper = styled.div`
  margin: 15rem auto;
  color: var(--color-links);

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    width: 15rem;
    border-top: 1px solid var(--color-links);

    a {
      font-size: 2rem;
      color: var(--color-links);
      align-items: center;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;

      svg {
        margin-right: 1rem;
      }

      &:first-child {
        margin-top: 2rem;
      }

      &:hover {
        color: var(--color-text);
      }
    }

    &:last-child {
      margin-top: 3rem;
    }
  }
`;