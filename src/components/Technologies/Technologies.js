import React from "react";
import {
  DiFirebase,
  DiReact,
  DiNodejs,
  DiPython,
  DiAndroid,
  DiApple,
  DiDocker,
  DiGit,
  DiGithubFull,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with - </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiPython size="3rem" />
          <DiNodejs size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js, Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br /> MongoDB, MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiAndroid size="3rem" />
          <DiApple size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Hybrid App Development</ListTitle>
          <ListParagraph>
            Experience with <br /> React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDocker size="3rem" />
        <ListContainer>
          <ListTitle>Containerization</ListTitle>
          <ListParagraph>
            Experience with <br /> Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div>
          <DiGit size="3rem" />
          <DiGithubFull size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br /> GitHub
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
