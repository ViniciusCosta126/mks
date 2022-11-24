import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #0f52ba;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 20px 90px;
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  line-height: 19px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
  }
`;

export const ContainerButton = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  width: 25%;
  max-width: 90px;
  svg {
    margin-right: 12px;
  }
  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 15px;
  }
`;
