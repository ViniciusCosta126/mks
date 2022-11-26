import styled from "styled-components";

interface ContainerProps {
  cartVisible: Boolean;
}

export const ContainerTitle = styled.div`
  display: flex;
  padding: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: #fff;
  }
  div {
    background-color: #000;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    svg {
      color: #0f52ba;
      font-size: 40px;
    }
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
    div {
      svg {
        color: #fff;
      }
    }
  }
`;
export const ContainerItens = styled.div`
  width: 100%;
  min-height: 65vh;
  padding: 36px;
`;
export const ButtonFinishi = styled.div`
  background-color: #000;
  width: 100%;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  padding: 32px 0;
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`;

export const ContainerCart = styled.div<ContainerProps>`
  background-color: #0f52ba;
  z-index: 10;
  position: absolute;
  height: 100vh;
  width: 83vw;
  right: ${(props) => (props.cartVisible ? "0" : "-1000px")};
  transition: 0.6s all ease-in;
  max-width: 486px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
