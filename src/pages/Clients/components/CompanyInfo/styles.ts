import styled from "@emotion/styled";

export const CompanyInfoContaiter = styled.div`
  display: flex;
  flex: 1;
  font-size: 30px;
  background-color: #f3e1f7;
`;

export const LogoButtonBlock = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid green; */
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: stretch;
  padding: 30px;
  padding-left: 40px;
  /* border: 3px solid black; */
  font-size: 22px;
  color: #28032d;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LogoCompanyContainer = styled.div`
  width: 120px;
  height: 120px;
  /* border: 1px solid green; */
`;
export const LogoImg = styled.img`
  width: 100%;
  height: fit-content;
  font-size: 10px;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  background-color: transparent;
`;

// export const ImageControl = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   border: 2px solid blue;
//`;

export const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
