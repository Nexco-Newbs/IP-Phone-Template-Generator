import styled from "styled-components";
import Section from "../components/Section";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DebugContainer = styled.div`
  word-wrap: break-word;
`;

function DebugSection() {
  const { currentTemplate,currentExpKey }: globalContextTypes = useContext(GlobalContext);
  return (
    <Section title="">
      <Accordion
        sx={{
          background: "#f3f3f3",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Debug Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DebugContainer>
            <h1>Accounts:</h1>
            {currentTemplate.accounts?.map((data) => {
              return <p>{JSON.stringify(data)} </p>;
            })}
          </DebugContainer>
          <DebugContainer>
            <h1>Line Keys :</h1>{" "}
            {currentTemplate.linekeys?.map((data) => {
              return <p>{JSON.stringify(data)} </p>;
            })}
          </DebugContainer>
          <DebugContainer>
            <h1>Expansion Keys:</h1>
            {currentTemplate.expansionkeys?.map((data) => {
              return <p>{JSON.stringify(data)} </p>;
            })}
          </DebugContainer>
          <DebugContainer>
            <h1>Current EXP key:</h1>
            {JSON.stringify(currentExpKey)}
          </DebugContainer>
        </AccordionDetails>
      </Accordion>
    </Section>
  );
}

export default DebugSection;
