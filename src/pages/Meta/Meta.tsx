import CompanyInfo from "components/CompanyInfo/CompanyInfo";
import { companyItems } from "components/CompanyInfo/data";

function Meta() {
  const companyItem = companyItems[2];

  return (
    <CompanyInfo
      CompanyName={companyItem.CompanyName}
      LogoImgSrc={companyItem.LogoImgSrc}
      LogoHref={companyItem.LogoHref}
      CompanyTextInfo={companyItem.CompanyTextInfo}
    />
  );
}

export default Meta;
