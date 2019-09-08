import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from 'native-base';

export default function AppointmentScreen(props) {
  const [appointmentArray, setAppointmentArray] = useState([]);

  useEffect(() => {
    // getAppointments().then(data => {
    //   setAppointmentArray(data);
    // });
    setAppointmentArray([
      {
        id: '',
        startDate: '',
        switchableAppointment: false,
      },
    ]);
  }, []);

  return (
    <Container>
      <Content>
        {appointmentArray &&
          appointmentArray.map(appointment => (
            <Card key={appointment.id}>
              <CardItem header bordered>
                <Text>MRI</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Date: {appointment.startDate}</Text>
                  <Button
                    style={styles.cardButton}
                    block
                    danger
                    onPress={() => cancelAppointment(appointment)}
                  >
                    <Text>Cancel the appointment</Text>
                  </Button>
                  {appointment.switchableAppointment &&
                    appointment.switchableAppointment.id && (
                      <Button
                        style={styles.cardButton}
                        block
                        onPress={() => switchDate(appointment)}
                      >
                        <Text>Change the time to </Text>
                      </Button>
                    )}
                  <Button
                    style={styles.cardButton}
                    block
                    onPress={() => props.navigation.navigate('QR')}
                  >
                    <Text>View QR</Text>
                  </Button>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Text></Text>
              </CardItem>
            </Card>
          ))}
      </Content>
    </Container>
  );
}

function getFmtDate(date) {
  const dt = new Date(date);
}

async function getAppointments() {
  let endpoint = 'https://35896ab7.ngrok.io/queuer/mybookings?id=' + 1;
  return get(endpoint);
}

async function cancelAppointment(appointment) {
  let endpoint = 'https://35896ab7.ngrok.io/queuer/cancel?id=' + appointment.id;
  get(endpoint);
}

function switchDate(appointment) {
  let endpoint =
    'https://35896ab7.ngrok.io/queuer/switch?id=' +
    appointment.id +
    '&switchId=' +
    appointment.switchableAppointment.id;
  get(endpoint);
}

function get(endpoint) {
  return fetch(endpoint, {
    method: 'GET',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.error(res.statusText);
        // throw Error(res.statusText);
      }
    })
    .catch(error => console.error(error));
}

AppointmentScreen.navigationOptions = {
  title: 'Appointments',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardButton: {
    marginTop: 10,
    marginBottom: 10,
  },
});
