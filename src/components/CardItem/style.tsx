import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 100%;
  margin-bottom: 18px;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
  @media(min-width: 1024px){
    width: 22%;
    margin-left:22px ;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 16px;
  img {
    display: block;
    margin: 0 auto;
  }
  .description {
    width: 100%;
    font-weight: 300;
    margin-top: 16px;
    font-size: 10px;
    line-height: 12px;
    color: #2c2c2c;
  }
`;
export const TitleValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;
  }
  .value {
    text-align: center;
    background: #373737;
    border-radius: 5px;
    padding: 6px 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #fff;
  }
  @media(min-width: 1024px){
    h3{
        width: 60%;
    }
  }
`;

export const BtnBuy = styled.div`
cursor: pointer;
  width: 100%;
  display: flex;
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-top: 12px;
  svg{
        margin-right: 14px;
  }
  p{
    text-transform: uppercase;
  }
`;
