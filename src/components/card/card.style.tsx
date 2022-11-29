import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 24rem;
  height: 11.25rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.7rem;
  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: light;
  color: #606060;
`;
export const Value = styled.span`
  font-size: 1.2rem;
  font-weight: light;
  color: #c7d710;
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-left: 1.5rem;
`;
export const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  padding-top: 7rem;
  margin-right: 0.5rem;
`;
