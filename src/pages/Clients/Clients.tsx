import { companyItems } from "./components/CompanyInfo/data";
import { companyItemProps } from "./components/CompanyInfo/types";
import { ClientsContaiter, StyledLink } from "./styles";

 const ClientsMap = companyItems.map((companyObj: companyItemProps) => {
  return (
    <StyledLink to=":id">{companyObj.CompanyName}</StyledLink>
     
  );
});

function Clients() {
  return (
    <ClientsContaiter>
      {/* {ClientsMap} */}
      <StyledLink to="/sap">SAP</StyledLink>
      <StyledLink to="/meta">Meta</StyledLink>
      <StyledLink to="/oracle">Oracle</StyledLink>
    </ClientsContaiter>
  );
}

export default Clients;
