import React from 'react'
import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export const FooterAnchor = styled.a`
  color: #ffffff;
  text-decoration: none;
`
export const FooterImage = styled.img`
  width: 180px;
`

export const FooterCopy = styled.p`
  text-align: center;
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImage src="/images/docred.png" alt="" />
      <FooterAnchor href="/questions">Preguntas frecuentes</FooterAnchor>
      <FooterAnchor href="/contact">Contáctanos</FooterAnchor>
      <FooterAnchor href="/information">Información</FooterAnchor>
      <FooterCopy>DocRed © 2020. Todos los derechos reservados</FooterCopy>
    </FooterWrapper>
  )
}
