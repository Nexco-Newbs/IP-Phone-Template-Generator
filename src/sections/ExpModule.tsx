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
import styled from "styled-components";
import Section from "../components/Section";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import { defaultExpansionKey } from "../data/Templates";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
`;

const ExpKeyTab = styled(Paper)`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
`;

const AddNewButton = styled(Button)`
  padding: 0.75rem;
  width: 20rem;
  margin: auto;
  color: white;
  background-color: #2221219e;
  &:hover {
    background-color: #222121bc;
  }
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

function ExpModule() {
  const { currentTemplate, setcurrentTemplate }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <Section title="Expansion Module Configuration">
      {currentTemplate.expansionkeys?.map((data, index) => {
        return (
          <ExpKeyTab>
            <LineSection>
              <TextField
                label="Module Number"
                variant="outlined"
                defaultValue={data.module_number || ""}
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
                defaultValue={data.line_number || ""}
                sx={{
                  width: "8rem",
                }}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (currentTemplate.expansionkeys !== undefined) {
                    const expkeysCopy = [...currentTemplate.expansionkeys];
                    expkeysCopy[index].line_number = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      expansionkeys: expkeysCopy,
                    });
                  }
                }}
              />
              <TextField
                label="Label"
                variant="outlined"
                defaultValue={data.label || ""}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.expansionkeys !== undefined) {
                    const expkeysCopy = [...currentTemplate.expansionkeys];
                    expkeysCopy[index].label = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      expansionkeys: expkeysCopy,
                    });
                  }
                }}
              />
              <TextField
                label="Value"
                variant="outlined"
                defaultValue={data.value || ""}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (currentTemplate.expansionkeys !== undefined) {
                    const expkeysCopy = [...currentTemplate.expansionkeys];
                    expkeysCopy[index].value = newValue;
                    setcurrentTemplate({
                      ...currentTemplate,
                      expansionkeys: expkeysCopy,
                    });
                  }
                }}
              />
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
                      (item) => item.number === data.type
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
                      expkeysCopy[index].type = newValue;
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
            </LineSection>
          </ExpKeyTab>
        );
      })}
      <AddNewButton
        onClick={() => {
          if (currentTemplate.expansionkeys !== undefined) {
            const expKeysCopy = [...currentTemplate.expansionkeys];
            expKeysCopy.push({
              ...defaultExpansionKey,
              line_number:
                expKeysCopy.length === 0
                  ? 1
                  : expKeysCopy[expKeysCopy.length - 1].line_number + 1,
            });
            setcurrentTemplate({
              ...currentTemplate,
              expansionkeys: expKeysCopy,
            });
          }
        }}
      >
        Add New
      </AddNewButton>
    </Section>
  );
}

export default ExpModule;
