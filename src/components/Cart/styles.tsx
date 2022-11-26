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
  overflow-y: scroll;
  padding: 0 36px;
  margin-bottom: 40px;
  height: 60%;
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
  height: 40px;
  color: #ffffff;
  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`;

export const ContainerCart = styled.div<ContainerProps>`
  display:  ${(props) => (props.cartVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  opacity:${(props) => (props.cartVisible ? 1 : 0)};
  background-color: #0f52ba;
  z-index: 10;
  position: absolute;
  height: 100vh;
  width: 83vw;
  right:0;
  transition: all 1s linear;
  max-width: 486px;
  top: 0; 
`;
