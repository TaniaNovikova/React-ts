import CompanyInfo from "pages/Clients/components/CompanyInfo/CompanyInfo";
import { companyItems } from "pages/Clients/components/CompanyInfo/data";


function Oracle() {
  const companyItem = companyItems[1];
  return (
    <CompanyInfo
      CompanyName={companyItem.CompanyName}
      LogoImgSrc={companyItem.LogoImgSrc}
      LogoHref={companyItem.LogoHref}
      CompanyTextInfo={companyItem.CompanyTextInfo}
    />
  );
}

export default Oracle;
