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
    getAppointments().then(data => {
      setAppointmentArray(data);
    });
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
                  <Text>Date: {getFmtDate(appointment.startDate)}</Text>
                  <Text>Time: {getFmtTime(appointment.startDate)}</Text>
                  <Button
                    block
                    danger
                    onPress={() => cancelAppointment(appointment)}
                  >
                    <Text>Cancel the appointment</Text>
                  </Button>
                  {appointment.switchableAppointment &&
                    appointment.switchableAppointment.id && (
                      <Button block onPress={() => switchDate(appointment)}>
                        <Text>Change the time to </Text>
                      </Button>
                    )}
                  <Button block onPress={() => props.navigation.navigate('QR')}>
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

function getFmtDate(dt) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  var date = new Date(dt);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function getFmtTime(dt) {
  var date = new Date(dt);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  return hours + ':' + minutes;
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
  console.log(endpoint);
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
