import { LIST_ZELLER_CUSTOMERS_PER_ROLE } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export const useCustomers = (role: string) => {
  const { loading, error, data } = useQuery(LIST_ZELLER_CUSTOMERS_PER_ROLE, {
    variables: { role },
  });
  return {
    loading,
    error,
    data: data?.listZellerCustomers.items,
  };
};
