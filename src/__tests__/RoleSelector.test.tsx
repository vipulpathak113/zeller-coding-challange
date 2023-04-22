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
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
    expect(screen.getByText("MANAGER")).toBeInTheDocument();
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
    fireEvent.click(screen.getByText("MANAGER"));
    expect(onRoleChange).toHaveBeenCalledWith("MANAGER");
  });
});
