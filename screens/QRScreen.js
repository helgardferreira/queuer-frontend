import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Header,
  Button,
  Text,
  Left,
  Body,
  Title,
  Card,
} from 'native-base';
import QRCode from 'react-native-qrcode';
import UserContext from '../lib/UserContext';

export default function ProfileScreen(props) {
  const userDetails = useContext(UserContext);
  const bookingData = {
    name: userDetails.name,
    age: 21,
    gender: 'Male',
    dateOfBirth: '1997-11-20',
    city: 'Munich',
    country: 'Germany',
    address: '12 Foo Bar st.',
  };
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button
            onPress={() => {
              props.navigation.navigate('Appointments');
            }}
            style={styles.formButton}
          >
            <Text style={styles.formButtonText}>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
        <Card style={styles.welcomeContainer} transparent>
          <QRCode
            value={JSON.stringify(bookingData)}
            size={300}
            bgColor="#3B73B9"
            fgColor="white"
          />
        </Card>
      </Content>
    </Container>
  );
}

ProfileScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    // height: 400,
  },
  formButton: {
    color: 'white',
  },
  formButtonText: {
    color: 'white',
  },
});
