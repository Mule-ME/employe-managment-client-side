import { ListContainer } from "./cardContainer.styles";
import { Employee } from "../../types";
import Card from "../card/card";

type CardContainerProps = {
  employees?: Employee[];
};

const CardContainer = (props: CardContainerProps) => {
  return (
    <ListContainer>
      {props.employees?.map((employee) => (
        <Card employee={employee} />
      ))}
    </ListContainer>
  );
};

export default CardContainer;
