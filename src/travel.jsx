import React, { Component } from 'react';
import me from './me.jpg';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import BoojooBoojoo from './BoojooBoojoo';
import AboutMe from './AboutMe';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Travel extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          {/*<Route exact path='/' component={BoojooBoojoo} />*/}
          <About>
            <Title>
              Hi, I'm Ayesha
            </Title>
            <Lines>I'm into <Links href="https://github.com/ayesha-omarali" data-url="" target="_blank">code</Links>,</Lines>
            <Lines>love to <Links href="https://github.com/ayesha-omarali" data-url="" target="_blank">travel</Links>,</Lines>
            <Lines>and you can find more about me <Links href="https://github.com/ayesha-omarali" data-url="" target="_blank">here</Links>,</Lines>
            <p>&nbsp;</p>
          </About>
          <Image src={me} />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled(Flex)`
  padding-top: 300px;
  justify-content: center;
  flex-direction: row;
  font-family: merriweather, serif;
  ::selection {
    #00d7f1
  }
`;

const Image = styled('img')`
  height: 300px
`;


const Lines = styled('p')`
  margin: 0 0 5px 0;
  display: block
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Links = styled('a')`
  background-color: #fd664b;
  padding: 2px 4px;
  color: white;
`;

const Title = styled(Flex)`
  color: #dfdfdf;
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const About = styled(Flex)`
  padding-top: 50px;
  flex-direction: column;
  font-family: merriweather, serif;
  font-weight: 300;
  font-size: 16px;
  padding-right: 40px;
  
`;

export default App;
