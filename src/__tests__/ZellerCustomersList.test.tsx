import { render, screen } from "@testing-library/react";
import { ZellerCustomersList } from "../components/ZellerCustomersList";

describe("CustomersList", () => {
  it("renders customers", () => {
    const customers = [
      { email: "test1@example.com", id: "1", name: "Test1", role: "ADMIN" },
      { email: "test2@example.com", id: "2", name: "Test2", role: "MANAGER" },
    ];
    render(<ZellerCustomersList customers={customers} />);
    expect(screen.getByText("Test1")).toBeInTheDocument();
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
    expect(screen.getByText("Test2")).toBeInTheDocument();
    expect(screen.getByText("MANAGER")).toBeInTheDocument();
  });
});
