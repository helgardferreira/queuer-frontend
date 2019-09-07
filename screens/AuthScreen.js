// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Image, Platform, StyleSheet } from 'react-native';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Card,
  Button,
  Text,
} from 'native-base';

// import { MonoText } from '../components/StyledText';

export default function AuthScreen(props) {
  return (
    <Container>
      <Content>
        <Content style={styles.container}>
          <Card style={styles.welcomeContainer} transparent>
            <Image
              source={require('../assets/images/ge-logo.png')}
              style={styles.welcomeImage}
            />
          </Card>

          <FormExample {...props} />
        </Content>
      </Content>
    </Container>
  );
}

AuthScreen.navigationOptions = {
  title: 'Log In',
};

function FormExample(props) {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <Form>
      <Item last>
        <Input
          autoCapitalize="none"
          placeholder="Username"
          value={username}
          onChange={({ nativeEvent: { text: username } }) =>
            setUsername(username)
          }
        />
      </Item>
      <Item last>
        <Input
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChange={({ nativeEvent: { text: password } }) =>
            setPassword(password)
          }
          secureTextEntry={true}
        />
      </Item>
      <Button
        onPress={() => {
          if (validateForm(username, password)) {
            props.navigation.navigate('Home');
          }
        }}
        style={styles.formButton}
      >
        <Text>Log in</Text>
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  formButton: {
    margin: 10,
  },
  formButtonText: {
    textAlign: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  AuthScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
});
