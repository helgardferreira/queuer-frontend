import React, { useEffect, useState, useContext } from 'react';
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
import UserContext from '../lib/UserContext';

export default function AppointmentScreen(props) {
  const [appointmentArray, setAppointmentArray] = useState([]);
  const userDetails = useContext(UserContext);
  const [refreshFlag, setRefreshFlag] = useState(false);
  console.log(userDetails);

  useEffect(() => {
    console.log('Getting data...');
    getAppointments(userDetails).then(data => {
      setAppointmentArray(data);
    });
  }, [userDetails, refreshFlag]);

  return (
    <Container>
      <Content>
        {appointmentArray &&
          appointmentArray.map(appointment => (
            <Card key={appointment.id}>
              <CardItem header bordered>
                <Text>{}</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Date: {getFmtDate(appointment.startDate)}</Text>
                  <Text>Time: {getFmtTime(appointment.startDate)}</Text>
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
                        <Text>Change the time to {getFmtTime(appointment.switchableAppointment.startDate)}</Text>
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
        <Button
          block
          onPress={() => {
            setRefreshFlag(!refreshFlag);
            console.log(refreshFlag);
          }}
        >
          <Text>Refresh</Text>
        </Button>
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
  var hours = date.getHours() - 2;
  var minutes = date.getMinutes();

  return hours + ':' + minutes;
}

async function getAppointments(userDetails) {
  let id = 0;
  if (userDetails.name == 'John Doe') {
    id = '4';
  } else {
    id = '1';
  }

  let endpoint = 'https://2ee5156f.ngrok.io/queuer/mybookings?id=' + id;
  return get(endpoint);
}

async function cancelAppointment(appointment) {
  let endpoint = 'https://2ee5156f.ngrok.io/queuer/cancel?id=' + appointment.id;
  get(endpoint);
}

function switchDate(appointment) {
  let endpoint =
    'https://2ee5156f.ngrok.io/queuer/switch?id=' +
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
