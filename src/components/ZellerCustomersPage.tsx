import React from "react";
import { useCustomers } from "../hooks/useCustomers";
import { useState } from "react";
import styled from "styled-components";
import { ZellerCustomersList } from "./ZellerCustomersList";
import { RoleSelector } from "./RoleSelector";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

interface Customer {
  email: string;
  id: string;
  name: string;
  role: string;
}

const ZellerCustomersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("ADMIN");
  const { loading, error, data } = useCustomers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const roles = [...new Set (data && data.map((customer: Customer)=>customer.role))].sort() as string[] ;
  const filteredCustomers =
    data && data.filter((customer: Customer) => customer.role === selectedRole);

  return (
    <Container>
      <RoleSelector
        roles={roles}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
      />
      <hr />
      <ZellerCustomersList customers={filteredCustomers} />
      <hr />
    </Container>
  );
};

export default ZellerCustomersPage;
