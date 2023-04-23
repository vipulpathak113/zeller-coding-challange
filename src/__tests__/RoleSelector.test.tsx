import { render, screen, fireEvent } from "@testing-library/react";
import { RoleSelector } from "../components/RoleSelector";

describe("RoleSelector", () => {
  it("renders roles", () => {
    const roles = ["ADMIN", "MANAGER"];
    render(
      <RoleSelector
        roles={roles}
        selectedRole={"ADMIN"}
        onRoleChange={() => {}}
      />
    );
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Manager")).toBeInTheDocument();
  });
  it("calls onRoleChange when role is clicked", () => {
    const roles = ["ADMIN", "MANAGER"];
    const onRoleChange = jest.fn();
    render(
      <RoleSelector
        roles={roles}
        selectedRole={"ADMIN"}
        onRoleChange={onRoleChange}
      />
    );
    fireEvent.click(screen.getByText("Manager"));
    expect(onRoleChange).toHaveBeenCalledWith("MANAGER");
  });
});
