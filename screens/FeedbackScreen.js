// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Label, Slider } from 'react-native';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from 'native-base';

export default function AuthScreen(props) {
  return (
    <Container>
      <Content style={styles.container}>
        <SatisfactionForm {...props} />
      </Content>
    </Container>
  );
}

AuthScreen.navigationOptions = {
  title: 'Feedback',
};

function SatisfactionForm(props) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <Form>
      <Item last>
        <Input
          autoCapitalize="none"
          placeholder="How did it go?"
          value={username}
          onChange={({ nativeEvent: { text: username } }) =>
            setUsername(username)
          }
        />
      </Item>

      {/* <Item floatingLabel>
        <Label>How satisfied are you after you appointment?</Label>
        <Input 
          autoCapitalize="none"
          
        />
        <Slider minimumValue={0} maximumValue={10} />
      </Item>
      <Item floatingLabel last>
        <Label>Password</Label>
        <Input />
      </Item> */}

      <Button
        onPress={() => {
          if (validateForm(username, password)) {
            props.navigation.navigate('Appointments');
          }
        }}
        style={styles.formButton}
      >
        <Text>Submit</Text>
      </Button>
    </Form>
  );
}

function validateForm(username, password) {
  if (username === 'John Doe' && password === '123') {
    return true;
  }
}

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
  formButton: {
    margin: 10,
  },
});
