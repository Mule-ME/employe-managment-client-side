import { CustomButton, LogoutCardContainer } from "./logoutCard.style";

type AccountProps = {
  showAccount: boolean;
};

const handleLogOut = () => {
  localStorage.clear();
  window.location.replace("/login");
};

const LogoutCard = ({ showAccount = false }: AccountProps) => {
  return (
    <LogoutCardContainer showAccount={showAccount}>
      <CustomButton>Account</CustomButton>
      <CustomButton onClick={handleLogOut}>Logout</CustomButton>
    </LogoutCardContainer>
  );
};

export default LogoutCard;
