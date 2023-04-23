import { LIST_ZELLER_CUSTOMERS } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export const useCustomers = () => {
  const { loading, error, data } = useQuery(LIST_ZELLER_CUSTOMERS);
  return {
    loading,
    error,
    data: data?.listZellerCustomers.items,
  };
};
