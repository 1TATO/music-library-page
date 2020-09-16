import React from 'react';

import {
  Wrapper,
  Form,
  Content,
} from './styles';

import { FiSearch } from 'react-icons/fi';

import Landing from '../Landing/';

function Main() {
  return (
    <>
      <Wrapper>
        <Landing />
          <Content>
            <Form>
              <a href='/'>
                <FiSearch />
              </a>
              <input
                placeholder="Procure pelo artista, playlist ou música"
              />
            </Form>
          </Content>
      </Wrapper>
    </>
  )
};

export default Main;