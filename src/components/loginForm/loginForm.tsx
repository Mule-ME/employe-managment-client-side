import { ChangeEvent, useState } from "react";
import { FormWrapper, FormInputWrapper, Title } from "./loginForm.style";
import Button from "../button/button";
import FormInput from "../formInput/formInput";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/user";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange =
    (type: String) => (e: ChangeEvent<HTMLInputElement>) => {
      if (type === "password") setPassword(e.target.value);
      else if (type === "email") setEmail(e.target.value);
    };
  return (
    <FormWrapper>
      <Title>PeopleBook</Title>
      <FormInputWrapper>
        <FormInput
          inputType="text"
          placeholder="Email"
          parent="login"
          onChange={handleInputChange("email")}
        />
        <FormInput
          inputType="password"
          placeholder="Password"
          parent="login"
          onChange={handleInputChange("password")}
        />
      </FormInputWrapper>
      <Button
        actionName="Login"
        handleClick={() => dispatch(login({ email, password }))}
      />
    </FormWrapper>
  );
};

export default LoginForm;
