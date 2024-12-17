// import SAPLogo from "assets/SAP-Logo.svg.png";
import CompanyInfo from "pages/Clients/components/CompanyInfo/CompanyInfo";
import {companyItems} from "pages/Clients/components/CompanyInfo/data"

function SAP() {
   const companyItem = companyItems[0];
  //   {CompanyName: "SAP",
  //   LogoImgSrc: SAPLogo,
  //   LogoHref: "https://www.sap.com/index.html",
  //   CompanyTextInfo: `Innovation für Unternehmen SAP ist ein weltweit führender Anbieter
  //       von Unternehmenssoftware, die Geschäftsprozesse optimiert und digitale
  //       Transformation vorantreibt. Mit Lösungen in Bereichen wie Finanzen,
  //       Logistik, Personalmanagement und Kundenbeziehungen ermöglicht SAP
  //       Unternehmen jeder Größe, effizienter zu arbeiten und fundierte
  //       Entscheidungen zu treffen. SAP's Flaggschiff, SAP S/4HANA, basiert auf
  //       modernster In-Memory-Technologie und bietet Echtzeitanalysen und
  //       KI-gestützte Prozesse. Über 400.000 Unternehmen in mehr als 180 Ländern
  //       nutzen SAP, um wettbewerbsfähig zu bleiben und ihre Ziele zu erreichen.
  //       Erfahre mehr über die Möglichkeiten, wie SAP Innovationen in deinem
  //       Unternehmen vorantreiben kann! Für weitere Details clicken Sie auf das
  //       Logo und besuchen Sie die offizielle Website von SAP.`,
  // };
  return (
    <CompanyInfo
      CompanyName={companyItem.CompanyName}
      LogoImgSrc={companyItem.LogoImgSrc}
      LogoHref={companyItem.LogoHref}
      CompanyTextInfo={companyItem.CompanyTextInfo}
    />
  );
}

export default SAP;
