import { Paper } from "@mui/material";
import styled from "styled-components"
import Section from "../components/Section";

const HomeRoot = styled.div`
  display: block;
`
const HomeContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items: center;
`

function Home() {
  return (<HomeRoot>

    <HomeContainer>
     <Section title="Home"/>
    </HomeContainer>
  </HomeRoot>)
}

export default Home