import styled from "styled-components";

interface ContainerProps {
  cartVisible: Boolean;
}
export const ContainerCart = styled.div<ContainerProps>`
  background-color: #0f52ba;
  position: absolute;
  height: 100vh;
  width: 83vw;
  right: ${(props) => (props.cartVisible ? "0" : "-1000px")};
  max-width: 486px;
  top: 0;
`;

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
margin-top: 40px;
padding: 36px;
`
