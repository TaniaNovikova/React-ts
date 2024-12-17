import { ClientsContaiter, StyledLink } from "./styles";


function Clients() {
  return (
    <ClientsContaiter>
      <StyledLink to="/sap">SAP</StyledLink>
      <StyledLink to="/meta">Meta</StyledLink>
      <StyledLink to="/oracle">Oracle</StyledLink>

    </ClientsContaiter>
  );
}

export default Clients;
