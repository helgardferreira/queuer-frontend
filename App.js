import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserContext from './lib/UserContext';

// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator } from 'aws-amplify-react-native';

// Amplify.configure(awsconfig);

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <UserContext.Provider
        value={{
          name: 'John Doe',
          age: 21,
          gender: 'Male',
          dateOfBirth: '1997-11-20',
          city: 'Munich',
          country: 'Germany',
          address: '12 Foo Bar St.',
        }}
      >
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </UserContext.Provider>
    );
  }
}

// export default withAuthenticator(App, true);

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
      Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  /* eslint-disable-next-line no-console */
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
