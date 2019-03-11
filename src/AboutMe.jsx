import React, { Component } from 'react';
import styled from 'styled-components';

import AboutMePicture from './me_scorpion.jpeg';
import Resume from './resume.pdf';
import { Flex } from '@rebass/grid';
import {Link} from "react-router-dom";


export default class AboutMe extends Component {
  render() {
    return (
      <Wrapper>
        <About>
          <Title>
            A little about me:
          </Title>
          <Text>
            I am a third year at UC Berkeley,
            studying <ExternalLink href="https://eecs.berkeley.edu/academics/undergraduate/cs-ba">computer science</ExternalLink>
            and <ExternalLink href="https://cogsci.berkeley.edu/home">cognitive science</ExternalLink>.
          </Text>
          <Text>
            While my career end-game isn't defined, I am insatiable for knowledge and new experiences.
            I am particularly interested in applied computer science techniques and full stack development.
          </Text>
          <Text>
            As an aspiring software engineer with a humanities background, having worked
            at <ExternalLink href="https://earthjustice.org/">Earthjustice</ExternalLink>,
            an international law firm, and in the California State Senate,
            I am always looking for ways to incorporate tech to positively impact the world.
          </Text>

          <Text>
            Here's my <ExternalLink href={Resume}>resume</ExternalLink> for more information on my work experience.
          </Text>
          <p>&nbsp;</p>

          <SocialMedia>
            <Text>
              <ExternalLink href="https://www.linkedin.com/in/ayesha-omarali/">LinkedIn</ExternalLink>
            </Text>
            <Text>
              <ExternalLink href="https://github.com/ayesha-omarali">GitHub</ExternalLink>
            </Text>
            <Text>
              <ExternalLink href="https://twitter.com/ayeshazarah_">Twitter</ExternalLink>
            </Text>
          </SocialMedia>

          <Navigation>
            <Links to=''>homepage</Links>
          </Navigation>

        </About>
        <ImageWrapper>
          <Image src={AboutMePicture} />
          <ImageSubtitle>Eating a scorpion & 7/11 toastie in Bangkok, Thailand</ImageSubtitle>
        </ImageWrapper>
      </Wrapper>
    );
  }
}

const SocialMedia = styled(Flex)`
  display: flex;
  algin-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled(Flex)`
  padding-top: 15px;
  flex-direction: column;
`;

const ImageSubtitle = styled(Flex)`
  color: #dfdfdf;
  font-size: 0.85em;
`;

const Navigation = styled(Flex)`
  // padding-top: -20px;
  margin: 0 0 5px 0;
  display: block
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Wrapper = styled(Flex)`
  padding-top: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: merriweather, serif;
  @media only screen and (max-width 400px){
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: merriweather, serif;
  }
  
  ::selection {
    #00d7f1
  }
`;

const Title = styled(Flex)`
  color: #dfdfdf;
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const About = styled(Flex)`
  width: 30%;
  padding-top: 50px;
  flex-direction: column;
  font-family: merriweather, serif;
  font-weight: 300;
  font-size: 16px;
  padding-right: 40px;
  padding-left: 40px;
  @media only screen and (max-width: 1000px) {
    width: 50%;
    padding-top: 50px;
    flex-direction: column;
    font-family: merriweather, serif;
    font-weight: 300;
    font-size: 16px;
    padding-right: 40px;
    padding-left: 40px;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    font-family: merriweather, serif;
    font-weight: 300;
    font-size: 16px;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const Links = styled(Link)`
  background-color: #fd664b;
  padding: 2px 4px;
  color: white;
`;

const ExternalLink = styled('a')`
  background-color: #fd664b;
  padding: 2px 4px;
  color: white;
`;

const Text = styled('p')`
  margin: 0 0 5px 0;
  // display: block
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;


const Image = styled('img')`
  height: 400px;
  padding-right: 40px;
`;