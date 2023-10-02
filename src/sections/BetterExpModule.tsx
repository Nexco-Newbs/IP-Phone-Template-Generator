import styled from "styled-components";
import Section from "../components/Section";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Exp50 from "./ExpModules/Exp50";
import { useContext, useState } from "react";
import { globalContextTypes, GlobalContext } from "../App";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
`;

const InputContainer = styled.div`
  width: 45%;
  padding: auto;
`;

const InputSection = styled(Paper)`
  background-color: #8080802f;
  height: 23rem;
  padding-top: 1rem;
`;

const SubInputSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0 2rem 0;
`;

const StyledButton = styled(Button)`
  display: flex;
  background-color: green;
  color: white;
  min-width: 10rem;
  height: 4rem;
  &:hover {
    background-color: #00800068;
    color: black;
  }
`;

const LineSection = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: 2rem;
  align-items: center;
`;

type expkeyType = {
  number: number;
  name: string;
};

const expkeyTypes: expkeyType[] = [
  { number: 0, name: "NA" },
  { number: 1, name: "Conference" },
  { number: 2, name: "Forward" },
  { number: 3, name: "Transfer" },
  { number: 4, name: "Hold" },
  { number: 5, name: "DND" },
  { number: 7, name: "Call Return" },
  { number: 8, name: "SMS" },
  { number: 9, name: "Directed Pickup" },
  { number: 10, name: "Call Park" },
  { number: 11, name: "DTMF" },
  { number: 12, name: "Voicemail" },
  { number: 13, name: "SpeedDial" },
  { number: 14, name: "Intercom" },
  { number: 15, name: "Line" },
  { number: 16, name: "BLF" },
  { number: 17, name: "URL" },
  { number: 18, name: "Group Listening" },
  { number: 20, name: "Private Hold" },
  { number: 22, name: "XML Group" },
  { number: 23, name: "Group Pickup" },
  { number: 24, name: "Multicast Paging" },
  { number: 25, name: "Record" },
  { number: 27, name: "XML Browser" },
  { number: 34, name: "Hot Desking" },
  { number: 35, name: "URL Record" },
  { number: 38, name: "LDAP" },
  { number: 39, name: "BLF List" },
  { number: 40, name: "Prefix" },
  { number: 41, name: "Zero Touch" },
  { number: 42, name: "ACD" },
  { number: 45, name: "Local Group" },
  { number: 46, name: "Network Group" },
  { number: 49, name: "Custom Button" },
  { number: 50, name: "Keypad Lock" },
  { number: 55, name: "Meet-Me Conference" },
  { number: 58, name: "Retrieve Park" },
  { number: 59, name: "ACD Grace" },
  { number: 60, name: "Emergency" },
  { number: 61, name: "Directory" },
];

function BetterExpModule() {
  const {
    currentTemplate,
    setcurrentTemplate,
    currentExpKey,
  }: globalContextTypes = useContext(GlobalContext);
  const [flipped, setFlipped] = useState(false);

  return (
    <Section title="Expansion Module Configuration">
      <Container>
        <InputContainer>
          <InputSection>
            <LineSection>
              <TextField
                label="Module Number"
                variant="outlined"
                defaultValue={currentExpKey.module_number || ""}
                sx={{
                  width: "8rem",
                }}
                disabled
              />
            </LineSection>
            <LineSection>
              <TextField
                label="Line Number"
                variant="outlined"
                defaultValue={currentExpKey.line_number || ""}
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: "8rem",
                }}
                disabled
              />
            </LineSection>
            <LineSection>
              <TextField
                label="Label"
                variant="outlined"
                value={currentExpKey.label}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.expansionkeys !== undefined) {
                    const expkeysCopy = [...currentTemplate.expansionkeys];
                    expkeysCopy.forEach((data) => {
                      if (data.line_number === currentExpKey.line_number) {
                        data.label = newValue;
                      }
                    });
                    setcurrentTemplate({
                      ...currentTemplate,
                      expansionkeys: expkeysCopy,
                    });
                  }
                }}
              />
            </LineSection>
            <LineSection>
              <FormControl>
                <InputLabel shrink>Key Type</InputLabel>
                <Select
                  label="Key Type"
                  sx={{
                    width: "15rem",
                  }}
                  displayEmpty={true}
                  notched={true}
                  renderValue={() => {
                    const element = expkeyTypes.find(
                      (item) => item.number === currentExpKey.type
                    );
                    return (
                      <MenuItem>
                        {element?.number + " - " + element?.name}
                      </MenuItem>
                    );
                  }}
                  onChange={(e: SelectChangeEvent) => {
                    const newValue = parseInt(e.target.value);
                    if (currentTemplate.expansionkeys !== undefined) {
                      const expkeysCopy = [...currentTemplate.expansionkeys];
                      expkeysCopy.forEach((data) => {
                        if (data.line_number === currentExpKey.line_number) {
                          data.type = newValue;
                        }
                      });
                      setcurrentTemplate({
                        ...currentTemplate,
                        expansionkeys: expkeysCopy,
                      });
                    }
                  }}
                >
                  {expkeyTypes.map((data) => {
                    return (
                      <MenuItem value={data.number}>
                        {data.number + " - " + data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                label="Value"
                variant="outlined"
                defaultValue={currentExpKey.value || ""}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.expansionkeys !== undefined) {
                    const expkeysCopy = [...currentTemplate.expansionkeys];
                    expkeysCopy.forEach((data) => {
                      if (data.line_number === currentExpKey.line_number) {
                        data.value = newValue;
                      }
                    });
                    setcurrentTemplate({
                      ...currentTemplate,
                      expansionkeys: expkeysCopy,
                    });
                  }
                }}
              />
            </LineSection>
          </InputSection>
          {/* <SubInputSection>
            <StyledButton
              onClick={() => {
                const expKeyCopy = currentTemplate.expansionkeys
                  ? currentTemplate.expansionkeys
                  : [];
                const sortedexpKeyCopy = expKeyCopy.sort((a, b) => {
                  return a.line_number - b.line_number;
                });

                if (!flipped) {
                  Array.from({ length: 20 }).map((_, index) => {
                    if (
                      sortedexpKeyCopy.find(
                        (expkey) => expkey.line_number === index
                      )
                    ) {
                      console.log("FOUND" + index);
                    }
                  });
                }
                const b = !flipped;
                setFlipped(b);
              }}
            >
              Flip
            </StyledButton>
            <StyledButton>Sort In Alphabetical order</StyledButton>
            <StyledButton>Populate Empty</StyledButton>
            <StyledButton>Undo</StyledButton>
          </SubInputSection> */}
        </InputContainer>
        <Exp50 flipped={flipped} />
      </Container>
    </Section>
  );
}

export default BetterExpModule;
