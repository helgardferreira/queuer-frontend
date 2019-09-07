// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
} from 'native-base';

export default function AppointmentScreen() {
  const appointmentArray = [
    { id: 0, heading: 'My Appointment' },
    { id: 1, heading: 'My Appointment' },
    { id: 2, heading: 'My Appointment' },
    { id: 3, heading: 'My Appointment' },
    { id: 4, heading: 'My Appointment' },
    { id: 5, heading: 'My Appointment' },
    { id: 6, heading: 'My Appointment' },
    { id: 7, heading: 'My Appointment' },
  ];

  return (
    <Container>
      <Content>
        {appointmentArray.map(appointment => (
          <Card key={appointment.id}>
            <CardItem>
              <Text>{appointment.heading}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        ))}
      </Content>
    </Container>
  );
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

const styles = StyleSheet.create({
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
});
