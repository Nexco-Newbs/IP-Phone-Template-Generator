import { Paper } from "@mui/material";
import styled from "styled-components";
import { ExpansionKey, defaultExpansionKey } from "../../data/Templates";
import { useContext, useState } from "react";
import { globalContextTypes, GlobalContext } from "../../App";

const Exp50Root = styled(Paper)`
  background-color: #383737;
  width: 30%;
  border-radius: 10px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  margin: 1.5rem;
  gap: 2rem;
  justify-content: center;
  color: white;
  font-size: xx-large;
`;

const ExpLineSection = styled.div`
  display: flex;
  background-color: #383737;
  justify-content: space-evenly;
  align-items: center;
`;

const SideButton = styled.button`
  background-color: silver;
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #c0c0c07b;
  }
`;

const ScreenSection = styled.div`
  width: 60%;
  background-color: #baf598;
  height: 3rem;
`;

const ScreenNames = styled.div`
  display: flex;
  min-width: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
`;
const BottomSection = styled.div`
  display: flex;
  background-color: #2a2a36;
  justify-content: center;
  align-items: center;
  min-height: 7rem;
  margin-top: 3rem;
`;

const PageButton = styled.div`
  display: flex;
  height: 3rem;
  width: 3rem;
  background-color: silver;
  justify-content: center;
  margin: 1rem;
  align-items: center;
  &:hover {
    background-color: #c0c0c07b;
  }
`;

const testExpKeyList: ExpansionKey[] = [
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 2 },
  { ...defaultExpansionKey, module_number: 1, line_number: 3 },
  { ...defaultExpansionKey, module_number: 1, line_number: 4 },
  { ...defaultExpansionKey, module_number: 1, line_number: 5 },
  { ...defaultExpansionKey, module_number: 1, line_number: 6 },
  { ...defaultExpansionKey, module_number: 1, line_number: 7 },
  { ...defaultExpansionKey, module_number: 1, line_number: 8 },
  { ...defaultExpansionKey, module_number: 1, line_number: 9 },
  { ...defaultExpansionKey, module_number: 1, line_number: 10 },
  { ...defaultExpansionKey, module_number: 1, line_number: 11 },
  { ...defaultExpansionKey, module_number: 1, line_number: 12 },
  { ...defaultExpansionKey, module_number: 1, line_number: 13 },
  { ...defaultExpansionKey, module_number: 1, line_number: 14 },
  { ...defaultExpansionKey, module_number: 1, line_number: 15 },
  { ...defaultExpansionKey, module_number: 1, line_number: 16 },
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 1 },
  { ...defaultExpansionKey, module_number: 1, line_number: 2 },
  { ...defaultExpansionKey, module_number: 2, line_number: 1 },
  { ...defaultExpansionKey, module_number: 2, line_number: 2 },
  { ...defaultExpansionKey, module_number: 2, line_number: 3 },
  { ...defaultExpansionKey, module_number: 3, line_number: 1 },
  { ...defaultExpansionKey, module_number: 3, line_number: 2 },
  { ...defaultExpansionKey, module_number: 3, line_number: 3 },
  { ...defaultExpansionKey, module_number: 3, line_number: 4 },
];

type Exp50Props = {
  flipped: boolean;
};

function Exp50({ flipped }: Exp50Props) {
  const noOfLines = 10;
  const [offset, setOffset] = useState(0);
  const {
    currentTemplate,
    setcurrentTemplate,
    setcurrentExpKey,
  }: globalContextTypes = useContext(GlobalContext);

  const expKeys = currentTemplate.expansionkeys
    ? [...currentTemplate.expansionkeys]
    : [];
  return (
    <Exp50Root>
      <Header>Yealink</Header>
      {Array.from({ length: noOfLines }).map((_, index) => {
        // // const i = flipped ? index + index + 1 : index + 1;
        // const j = flipped ? index + index + 2 : index + 11;
        const i = index + index + 1 +offset;
        const j = index + index + 2 +offset;
        // const flipped_i = index + 1;
        // const flipped_j = index + 11;
        const leftElement = expKeys.find((expkey) => expkey.line_number === i);
        const rightElement = expKeys.find((expkey) => expkey.line_number === j);
        return (
          <ExpLineSection>
            <SideButton
              onClick={() => {
                if (leftElement !== undefined) {
                  setcurrentExpKey(leftElement);
                } else {
                  const newElement = { ...defaultExpansionKey, line_number: i };
                  expKeys.push(newElement);
                  const sorted = expKeys.sort(
                    (a, b) => a.line_number - b.line_number
                  );
                  setcurrentTemplate({
                    ...currentTemplate,
                    expansionkeys: sorted,
                  });
                  setcurrentExpKey(newElement);
                }
              }}
            >
              {i}
            </SideButton>
            <ScreenSection>
              <ScreenNames>
                <p>{leftElement ? leftElement.label : ""}</p>
                <p>{rightElement ? rightElement.label : ""}</p>
              </ScreenNames>
            </ScreenSection>
            <SideButton
              onClick={() => {
                if (rightElement !== undefined) {
                  setcurrentExpKey(rightElement);
                } else {
                  const newElement = {
                    ...defaultExpansionKey,
                    line_number: i + 1,
                  };
                  expKeys.push(newElement);
                  const sorted = expKeys.sort(
                    (a, b) => a.line_number - b.line_number
                  );
                  setcurrentTemplate({
                    ...currentTemplate,
                    expansionkeys: sorted,
                  });
                  setcurrentExpKey(newElement);
                }
              }}
            >
              {j}
            </SideButton>
          </ExpLineSection>
        );
      })}
      <BottomSection>
        <PageButton onClick={()=>{
          setOffset(0)
        }}>1</PageButton>
        <PageButton onClick={()=>{
          setOffset(20)
        }}>2</PageButton>
        <PageButton onClick={()=>{
          setOffset(40)
        }}>3</PageButton>
      </BottomSection>
    </Exp50Root>
  );
}

export default Exp50;
