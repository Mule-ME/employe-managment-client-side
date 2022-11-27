import { ActionWrapper, FormWrapper, Title } from "../modals.style";
import Button from "../../button/button";

type EditEmployeeFormProps = {
  show: boolean;
  // handleClick?: () => void;
};

const DeleteEmployeeForm = ({ show = false }: EditEmployeeFormProps) => {
  return (
    <FormWrapper show={show} isDeleteModal={true}>
      <Title isDeleteModal={true}>Are you sure ?</Title>
      <ActionWrapper>
        <Button actionName="Cancel" />
        <Button actionName="Delete" />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default DeleteEmployeeForm;
