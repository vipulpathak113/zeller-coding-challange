

/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { useCaptalizeFirstLetter } from "../hooks/useCaptalizeFirstLetter";

interface Customer {
  email: string;
  id: string;
  name: string;
  role: string;
}

interface CustomersListProps {
  customers: Customer[];
}

const CustomerList = styled.div`
  list-style: none;
`;

const Section = styled.section`
  flex-basis: calc(50% - 20px);
  margin: 10px;
`;

const CustomerListItem = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 15px;
`;

const CustomerName = styled.span`
  font-size: 18px;
`;

const CustomerRole = styled.span`
  font-size: 14px;
  color: #757575;
`;

const SquareBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomerInitial = styled.span`
  font-size: 18px;
`;
export function ZellerCustomersList({ customers }: CustomersListProps) {
  const capitalizedCustomers = customers && customers.map((customer) => ({
    ...customer,
    role: useCaptalizeFirstLetter(customer.role),
  }));

  return (
    <Section aria-labelledby="customer-list">
      <h2 id="customer-list">Admin Users</h2>
      <CustomerList>
        {capitalizedCustomers && capitalizedCustomers.map((customer) => (
          <CustomerListItem key={customer.id}>
            <SquareBox>
              <CustomerInitial>{customer.name[0]}</CustomerInitial>
            </SquareBox>
            <div>
              <CustomerName>{customer.name}</CustomerName>
              <br />
              <CustomerRole>{customer.role}</CustomerRole>
            </div>
          </CustomerListItem>
        ))}
      </CustomerList>
    </Section>
  );
}
