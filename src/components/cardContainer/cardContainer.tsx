
import styled from "styled-components"
import Card from "../card/card"


const ListContainer = styled.div`
display:grid;
grid-template-columns: 22.5rem 22.5rem 22.5rem;
gap:2rem;
`

const CardContainer = () => {
  return (
    <ListContainer>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ListContainer>
  )
}

export default CardContainer
