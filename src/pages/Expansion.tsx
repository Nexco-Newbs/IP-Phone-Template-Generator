import styled from "styled-components";
import ExpModule from "../sections/ExpModule";
import DebugSection from "../sections/Debug";
import OutputSection from "../sections/Output";
import BetterExpModule from "../sections/BetterExpModule";

const ExpansionRoot = styled.div`
  display: block;
`;

const ExpansionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Expansion() {
    return (
        <ExpansionRoot>
            <ExpansionContainer>
                <BetterExpModule/>
                <OutputSection/>
                {/* <DebugSection/> */}
            </ExpansionContainer>
        </ExpansionRoot>
    );
}

export default Expansion;
