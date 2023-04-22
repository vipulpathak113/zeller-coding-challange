import { gql } from "@apollo/client";

export const LIST_ZELLER_CUSTOMERS_PER_ROLE = gql`
  query ListZellerCustomers($role: String) {
    listZellerCustomers(filter: { role: { eq: $role } }) {
      items {
        email
        id
        name
        role
      }
    }
  }
`;
