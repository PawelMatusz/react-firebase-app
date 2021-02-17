import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from './components/AppBar';
import Content from './components/Content';

export default function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar></AppBar>

      <Content></Content>
    </Container>
  );
}
