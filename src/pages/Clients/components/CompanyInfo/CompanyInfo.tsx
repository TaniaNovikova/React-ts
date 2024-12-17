import { useNavigate } from "react-router-dom";
import {
  ButtonImage,
  GoBackButton,
  InfoBlock,
  LogoButtonBlock,
  LogoCompanyContainer,
  LogoImg,
  CompanyInfoContaiter,
} from "./styles";
import BackArrow from "assets/back.jpg";
import { companyItemProps } from "./types";

function CompanyInfo({
  CompanyName,
  LogoImgSrc,
  LogoHref,
  CompanyTextInfo,
}: companyItemProps) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <CompanyInfoContaiter>
      <LogoButtonBlock>
        <LogoCompanyContainer>
          <a target="_blank" rel="noreferrer" href={LogoHref}>
            <LogoImg src={LogoImgSrc} alt="logo company" />
          </a>
        </LogoCompanyContainer>
        <GoBackButton onClick={goBack}>
          <ButtonImage src={BackArrow} />
        </GoBackButton>
      </LogoButtonBlock>
      <InfoBlock>
        <h3>{CompanyName}</h3>
        {CompanyTextInfo}
      </InfoBlock>
    </CompanyInfoContaiter>
  );
}

export default CompanyInfo;
