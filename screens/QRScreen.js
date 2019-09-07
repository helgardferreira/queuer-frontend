import React from 'react';
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
} from 'native-base';
import QRCode from 'react-native-qrcode';

export default function ProfileScreen(props) {
  const bookingData = {
    name: 'John Doe',
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
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
        {/* <Card style={styles.welcomeContainer} transparent> */}

        <QRCode
          value={JSON.stringify(bookingData)}
          size={200}
          bgColor="#3B73B9"
          fgColor="white"
        />
        {/* </Card> */}
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
});
