import { ActionWrapper, FormWrapper, Title } from "../modals.style";
import Button from "../../button/button";
import { Employee } from "../../../types";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../../redux/action/addEmployee";

type DeleteEmployeeFormProps = {
  show: boolean;
  setShowDeleteModal: (show: boolean) => void;
  employee: Employee;
};

const DeleteEmployeeForm = ({
  show = false,
  employee,
  setShowDeleteModal,
}: DeleteEmployeeFormProps) => {
  const dispatch = useDispatch();

  return (
    <FormWrapper show={show} isDeleteModal={true}>
      <Title isDeleteModal={true}>Are you sure to Delete ?</Title>
      <ActionWrapper>
        <Button
          actionName="Cancel"
          handleClick={() => setShowDeleteModal(false)}
        />
        <Button
          actionName="Delete"
          handleClick={() => {
            dispatch(deleteEmployee(employee));
            setShowDeleteModal(false);
          }}
          // type="submit"
        />
      </ActionWrapper>
    </FormWrapper>
  );
};

export default DeleteEmployeeForm;
