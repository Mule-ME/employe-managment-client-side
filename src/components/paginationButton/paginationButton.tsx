import { CustomIconButton, ButtonIcon } from "./padinationButton.style";
type ButtonAction = {
  actionName: string;
  handleClick?: () => void;
};

const PaginationButton = ({ actionName, handleClick }: ButtonAction) => {
  return (
    <CustomIconButton onClick={handleClick}>
      <ButtonIcon location={actionName} />
    </CustomIconButton>
  );
};

export default PaginationButton;
