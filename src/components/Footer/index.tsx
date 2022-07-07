import React, { useState } from 'react'
import { Wrapper, Column, List, ListItem, Title, Info, Map, Social, Section, MapSection, Text } from './FooterStyles'
import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'
import { MAP, ADDRESS, WORKTIME } from '../../data/constants'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Info>
        <Column>
          <Title>About</Title>
          <List>
            <ListItem>Factories</ListItem>
            <ListItem>Creators</ListItem>
            <ListItem>Gift card</ListItem>
            <ListItem>Location</ListItem>
          </List>
        </Column>

        <Column>
          <Title>Costumer service</Title>
          <List>
            <ListItem>FAQ</ListItem>
            <ListItem>Shipping info</ListItem>
          </List>
        </Column>

        <Column>
          <Title>Contacts</Title>
          <List>
            <ListItem>Address</ListItem>
            <ListItem>Telephone</ListItem>
            <ListItem>Email</ListItem>
          </List>
        </Column>
      </Info>

      <MapSection>
        <Map src={MAP} />
        <Text>{ADDRESS}</Text>
        <Text>{WORKTIME}</Text>
      </MapSection>

      <Social>
        <Section>
          <BsFacebook />
        </Section>
        <Section>
          <BsTwitter />
        </Section>
        <Section>
          <BsInstagram />
        </Section>
      </Social>
    </Wrapper>
  )
}

export default Footer
