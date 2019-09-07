// import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
//import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Body,
  Button
} from 'native-base';

export default function AppointmentScreen(props) {

  const [appointmentArray, setAppointmentArray] = useState([]);
  

  useEffect(() => {
    getAppointments().then((data) => {setAppointmentArray(data)})
  }, []);
 
  return (
    <Container>
      <Content>
        {appointmentArray && appointmentArray.map((appointment) => (
          <Card key={appointment.id}>
            <CardItem header bordered>
              <Text>MRI</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Date: {appointment.startDate}
                </Text>
                <Button block danger onPress={() => cancelAppointment(appointment)}>
                  <Text>Cancel the appointment</Text>
                </Button>
                {appointment.switchableAppointment && appointment.switchableAppointment.id &&
                <Button block onPress={() => switchDate(appointment)}>
                  <Text>Change the time to </Text>
                </Button>
                }
                <Right>
                  <Icon
                    name="arrow-forward"
                    onPress={() => props.navigation.navigate('QR')}
                  />
                </Right>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        )
        )}
      </Content>
    </Container>
  );
}

/*function getFmtDate(date) {
  dt = new Date(date)


}*/

async function getAppointments() {
  let endpoint = 'https://35896ab7.ngrok.io/queuer/mybookings?id=' + 1
  return get(endpoint)
}

async function cancelAppointment(appointment) {
  let endpoint = 'https://35896ab7.ngrok.io/queuer/cancel?id=' + appointment.id
  get(endpoint)
}

function switchDate(appointment) {
  let endpoint = 'https://35896ab7.ngrok.io/queuer/switch?id='+ appointment.id + '&switchId=' + appointment.switchableAppointment.id
  console.log(endpoint)
  get(endpoint)
}

function get(endpoint) {

  return fetch(endpoint, {
      method: "GET"
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .catch(error => console.error(error));
}

{
  /* <Card>
  <CardItem>
    <Text>Google Plus</Text>
    <Right>
      <Icon name="arrow-forward" />
    </Right>
  </CardItem>
</Card> */
}

// import { MonoText } from '../components/StyledText';

// export default function AppointmentScreen() {
//   return (
//     <Container>
//       <Content style={styles.container}>
//         {/* <Card style={styles.welcomeContainer} transparent>
//           <Image
//             source={require('../assets/images/ge-logo.png')}
//             style={styles.welcomeImage}
//           />
//         </Card> */}

//       </Content>
//     </Container>
//   );
// }

AppointmentScreen.navigationOptions = {
  title: 'Appointments',
};

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/',
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes',
//   );
// }

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
  },
});*/
