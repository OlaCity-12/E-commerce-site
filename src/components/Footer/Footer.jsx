import { ContactPhoneRounded, EmailRounded, FacebookRounded, Instagram, MyLocationRounded } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  background-color: #c8d8e8;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
  align-items: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;



const Footer = () => {
  return <Container>
      <Left>
          <Logo>YANZ B</Logo>
          <SocialContainer>
              <SocialIcon>
                  <FacebookRounded />
              </SocialIcon>
              <SocialIcon>
                  <Instagram />
              </SocialIcon>
              <SocialIcon>
                  <EmailRounded />
              </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>LINKS</Title>
          <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>CONTACT US</Title>
          <ContactItem><MyLocationRounded style={{marginRight:'10px'}}/>Freedom Trail, Boston, MA 02129</ContactItem>
          <ContactItem><ContactPhoneRounded style={{marginRight:'10px'}}/>(617) 242-5601</ContactItem>
          <ContactItem><EmailRounded style={{marginRight:'10px'}}/>Yanzb@yac.lop</ContactItem>
      </Right>
  </Container>;
};

export default Footer;
