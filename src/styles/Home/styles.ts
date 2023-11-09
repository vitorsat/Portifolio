import styled from 'styled-components';

export const VideoStyled = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }

  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`;

export const MainContainer = styled.main`
  position: relative;
  background: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  gap: 1rem;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0px 30px;
`;

export const IconAlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  p: {
    fontweight: bold;
    padding: 0;
    border: 0;
  }
`;
