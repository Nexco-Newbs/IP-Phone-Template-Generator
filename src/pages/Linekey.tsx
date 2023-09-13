import { styled } from "styled-components"
import LinekeyModule from "../sections/LinekeyModule"
import DebugSection from "../sections/Debug"

const LinekeyRoot = styled.div`
display: block;
`

const LinekeyContainer = styled.div`
 display:flex;
  width:100%;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`

function Linekey() {

    return (
        <LinekeyRoot>
            <LinekeyContainer>
                <LinekeyModule/>
                <DebugSection/>
            </LinekeyContainer>
        </LinekeyRoot>
    )

}

export default Linekey