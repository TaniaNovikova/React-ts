import { ClientsContaiter, StyledLink } from "./styles";


function Clients() {
  return (
    <ClientsContaiter>
      <StyledLink to="/clients/sap">SAP</StyledLink>
      <StyledLink to="/clients/meta">Meta</StyledLink>
      <StyledLink to="/clients/oracle">Oracle</StyledLink>

    </ClientsContaiter>
  );
}

export default Clients;
