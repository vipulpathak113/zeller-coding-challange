/* eslint-disable testing-library/await-async-utils */
import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import CustomersPage from "../components/ZellerCustomersPage";

const mock = { loading: true, error: undefined, data: undefined as any };
jest.mock("../hooks/useCustomers", () => ({
  useCustomers: () => {
    return mock;
  },
}));

describe("CustomersPage", () => {
  it("renders loading state", () => {
    mock.loading = true;
    render(<CustomersPage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mock.loading = false;
    mock.data = undefined;
    render(<CustomersPage />);
    waitFor(() => {
      expect(screen.getByText("Error :(")).toBeInTheDocument();
    });
  });

  it("renders customers list", () => {
    const data = [
      { email: "test1@example.com", id: "1", name: "Test1", role: "ADMIN" },
      { email: "test2@example.com", id: "2", name: "Test2", role: "MANAGER" },
    ];
    mock.loading = false;
    mock.error = undefined;
    mock.data = data;
    render(<CustomersPage />);
    waitFor(() => {
      expect(screen.getByText("Test1")).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByText("Test2")).toBeInTheDocument();
    });
  });

  it("changes role when RoleSelector is clicked", () => {
    mock.loading = false;
    mock.error = undefined;
    render(<CustomersPage />);
    waitFor(() => {
      expect(screen.getByText("Test1")).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.queryByText("Test2")).not.toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Manager"));
    waitFor(() => {
      expect(screen.queryByText("Test1")).not.toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByText("Test2")).toBeInTheDocument();
    });
  });
});
