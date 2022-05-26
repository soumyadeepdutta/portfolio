import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "15px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Soumyadeep</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/soumyadeepdutta">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://in.linkedin.com/soumyadeepdutta">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:thesoumyadeepdutta@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://github.com/soumyadeepdutta">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
