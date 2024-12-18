import CompanyInfo from "pages/Clients/components/CompanyInfo/CompanyInfo";
import { companyItems } from "pages/Clients/components/CompanyInfo/data";

function SAP() {
  const companyItem = companyItems[0];
  return (
    <CompanyInfo
      CompanyName={companyItem.CompanyName}
      LogoImgSrc={companyItem.LogoImgSrc}
      LogoHref={companyItem.LogoHref}
      CompanyTextInfo={companyItem.CompanyTextInfo}
      id={companyItem.id}
    />
  );
}

export default SAP;
