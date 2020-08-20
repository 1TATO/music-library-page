import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  color: var(--color-text);
`;

export const LeftColumn = styled.div`
  width: 200px;
  height: 100vh;
  background-color: var(--color-secundary);

  display: flex;
  flex-direction: column;
  left: 0;
`;

export const Profile = styled.div`
  margin: 65px 20px;

  display: flex;
  flex-direction: row;

  > img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100px;

  h1 {
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    color: var(--color-links);

    p {
      font-size: 12px;
      margin-right: 5px;
    }
  }
`;

export const LinksWrapper = styled.div`
  margin: 70px auto;
  font-size: 12px;
  color: var(--color-links);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;  
`;

export const Links = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  p {
    margin-left: 5px;
  }
`;