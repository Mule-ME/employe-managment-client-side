import styled from "styled-components";
import Button from "../button/button";
import FormInput from "../formInput/formInput";

const FormWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 31rem;
  height: 20rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
  text-align: center;
  border-radius: 1rem;
  &:hover {
    // 3box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Title = styled.span`
  color: #c7d710;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const LoginForm = () => {
  return (
    <FormWrapper>
      <Title>PeopleBook</Title>
      <FormInputWrapper>
        <FormInput inputType="text" placeholder="Email" parent="login" />
        <FormInput inputType="password" placeholder="Password" parent="login" />
      </FormInputWrapper>

      <Button actionName="Login" handleClick={() => console.log("fsfs")} />
    </FormWrapper>
  );
};

export default LoginForm;
