import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 9609667964">9609667964</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:thesoumyadeepdutta@gmail.com">
            thesoumyadeepdutta@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Stop cutting trees for paper, use software instead! </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/soumyadeepdutta">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://in.linkedin.com/soumyadeepdutta">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        {/* <SocialIcons href="https://github.com/soumyadeepdutta">
          <AiFillInstagram size="3rem" />
        </SocialIcons> */}
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
