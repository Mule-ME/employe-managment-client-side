import styled from "styled-components";
import IconButton from "../button/iconButton";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 22.5rem;
  height: 11.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.7rem;
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Label = styled.span`
  font-size: 1.2rem;
  font-weight: light;
  color: #606060;
`;
const Value = styled.span`
  font-size: 1.2rem;
  font-weight: light;
  color: #c7d710;
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-left: 1.5rem;
`;
const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  padding-top: 7rem;
  margin-right: 0.5rem;
`;

const Card = () => {
  return (
    <Container>
      <LabelWrapper>
        <Label>Name</Label>
        <Label>Email</Label>
        <Label>Gender</Label>
        <Label>Salary</Label>
        <Label>DoB</Label>
      </LabelWrapper>
      <ValueWrapper>
        <Value>Mulualem Eshetu</Value>
        <Value>info@mulualem.com</Value>
        <Value>Male</Value>
        <Value>21,533</Value>
        <Value>15-12-1990</Value>
      </ValueWrapper>
      <ActionButtonsWrapper>
        <IconButton actionName="update" />
        <IconButton actionName="delate" />
      </ActionButtonsWrapper>
    </Container>
  );
};

export default Card;
