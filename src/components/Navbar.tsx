import { AppBar, Toolbar,Button } from "@mui/material";
import nexcoblack from "../resources/nexco_logo_black.png"
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarRoot = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
`;
const StyledAppBar = styled(AppBar)`
  display: flex;
  background: transparent;
  position: static;
  width: 82%;
  box-shadow: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const NavbarImg = styled.img`
    display:flex;
    height:7rem;
`
const NavbarButtons = styled.div`
margin-left: auto;
`
const NavbarButton = styled(Button)`
background-color: #2221219e;
color:white;
margin : 0 1rem 0 1rem;
padding: 0.5rem;
font-size:large;
&:hover {
    background-color: #222121f9;
  }
`
const navbarLinks = [
    {
        name: "Account",
        link: "/",
    },
    {
        name: "Linekey",
        link: "/linekey",
    },
    {
        name: "Expansion Module",
        link: "/expansion",
    }
];

function Navbar() {
    return (
        <NavbarRoot>
            <StyledAppBar>
                <Toolbar>
                    <StyledLink to="/">
                        <NavbarImg src={nexcoblack}/>
                    </StyledLink>
                    <NavbarButtons>
                        {navbarLinks.map((data) => {
                            return (
                                <StyledLink to={data.link}>
                                    {" "}
                                    <NavbarButton>{data.name}</NavbarButton>
                                </StyledLink>
                            );
                        })}
                    </NavbarButtons>
                </Toolbar>
            </StyledAppBar>
        </NavbarRoot>
    );
}

export default Navbar;
