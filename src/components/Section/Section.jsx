import React from 'react';
import { Container, Title } from 'components/Section/Section.styled';
import PropTypes from 'prop-types'

export function Section ({ title, children}) {


 
    
    return (
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    );
  
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
}