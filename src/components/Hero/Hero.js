import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        I'm Soumyadeep
      </SectionTitle>
      <SectionText>
        A professional Software Developer Engineer from India
      </SectionText>
      <Button onClick={() => (window.location = "/#about")}>
        More about me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
