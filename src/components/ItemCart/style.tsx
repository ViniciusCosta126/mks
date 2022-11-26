import styled from "styled-components";

export const ItemCartContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  padding: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 14px;
  svg {
    position: absolute;
    font-size: 42px;
    right: 5.6%;
    top: 0;
  }
  @media(min-width: 1024px){
    flex-direction: row;
    justify-content: space-between;
    overflow: initial;
    margin-top: 28px;
    svg{
        width: 18px;
        height: 18px;
        border-radius:50%;
        padding: 2px;
        background-color: #000;
        color: #fff;
        z-index: 10;
        font-size:14px;
        right: -8px;
    top: -6px;
}
    }
  }
`;
export const ContainerCotent = styled.div`
  .title-product {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;
    margin-top: 14px;
  }
  .butons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    .qtd-btn {
      display: flex;
      width: 45%;
      align-items: center;
      border: 0.3px solid #bfbfbf;
      border-radius: 4px;
      height: 35px;
      overflow: hidden;
      button,
      p {
        width: 34%;
        height: 75%;
        color: #000000;
        font-weight: 400;
      }
      p {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
        border-left: 0.2px solid #bfbfbf;
        border-right: 0.2px solid #bfbfbf;
      }
      button {
        line-height: 27px;
        font-size: 22px;
        border: none;
        cursor: pointer;
        background-color: #fff;
      }
    }
    .value {
      background-color: #373737;
      border-radius: 5px;
      width: 45%;
      padding: 8px 16px;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      color: #ffffff;
    }
  }
  @media(min-width:1024px){
    display: flex;
    .title-product{
        width: 40%;
        margin-left: 20px;
    }
    .butons-container {
        flex: 1;
        .value{
            width: 48%;
            margin-left: 20px;
        }
    }
  }
`;
