import { ListContainer } from "./cardContainer.styles";
import Card from "../card/card";

type CardContainerProps = {};

const CardContainer = () => {
  return (
    <ListContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ListContainer>
  );
};

export default CardContainer;
