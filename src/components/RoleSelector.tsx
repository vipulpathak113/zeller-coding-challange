/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";
import { useCaptalizeFirstLetter } from "../hooks/useCaptalizeFirstLetter";

interface labelProps {
  selected: boolean;
}

const RoleLabel = styled.label<labelProps>`
  display: block;
  padding: 5px;
  border-radius: 3px;
  margin-top: 10px;
  background-color: ${(props) => (props.selected ? "#d9f1f8" : "transparent")};
`;

const Section = styled.section`
  flex-basis: calc(50% - 20px);
  margin: 10px;
`;

interface RoleSelectorProps {
  roles: string[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export const RoleSelector: React.FC<RoleSelectorProps> = ({
  roles,
  selectedRole,
  onRoleChange,
}) => {
  const capitalizedRoles = roles && roles.map(useCaptalizeFirstLetter);
  return (
    <Section aria-labelledby="role-selection">
      <h2 id="role-selection">User Types:</h2>
      {capitalizedRoles && capitalizedRoles.map((role) => (
        <RoleLabel
          key={role}
          selected={selectedRole.toLowerCase() === role.toLowerCase()}
        >
          <input
            type="radio"
            name="role"
            value={role}
            checked={selectedRole.toLowerCase() === role.toLowerCase()}
            onChange={() => onRoleChange(role.toUpperCase())}
          />
          {role}
        </RoleLabel>
      ))}
    </Section>
  );
};
