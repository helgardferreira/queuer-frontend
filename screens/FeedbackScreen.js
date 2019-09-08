// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Slider, KeyboardAvoidingView } from 'react-native';
import { Label } from 'native-base';

import {
  // Container,
  Content,
  Form,
  Item,
  Textarea,
  Button,
  Text,
} from 'native-base';

export default function FeedbackScreen(props) {
  const [satisfactionLevel, setSatisfactionLevel] = useState(5);
  const [professionalismLevel, setProfessionalismLevel] = useState(5);
  const [
    professionalismImportanceLevel,
    setProfessionalismImportanceLevel,
  ] = useState(5);
  const [knowledgeLevel, setKnowledgeLevel] = useState(5);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Content style={styles.container}>
        <Form>
          <Item stackedLabel last style={styles.sliderItem}>
            <Text>How satisfied were you with your appointment?</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={satisfactionLevel}
              onValueChange={val => setSatisfactionLevel(val)}
              step={1}
            />
          </Item>
          <Item stackedLabel last style={styles.sliderItem}>
            <Text>How professional was the radiologist?</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={professionalismLevel}
              onValueChange={val => setProfessionalismLevel(val)}
              step={1}
            />
          </Item>
          <Item stackedLabel last style={styles.sliderItem}>
            <Text>How important is professionalism to you?</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={professionalismImportanceLevel}
              onValueChange={val => setProfessionalismImportanceLevel(val)}
              step={1}
            />
          </Item>
          <Item stackedLabel last style={styles.sliderItem}>
            <Text>How knowledgeable was the radiologist?</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={knowledgeLevel}
              onValueChange={val => setKnowledgeLevel(val)}
              step={1}
            />
          </Item>

          <Item stackedLabel last>
            <Label>What can we do differently?</Label>
            <Textarea rowSpan={5} bordered style={styles.textArea} />
          </Item>

          <Button
            onPress={() => props.navigation.navigate('Appointments')}
            style={styles.formButton}
          >
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </KeyboardAvoidingView>
  );
}

FeedbackScreen.navigationOptions = {
  title: 'Feedback',
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
  formButton: {
    margin: 10,
  },
  slider: {
    width: 300,
    height: 40,
  },
  sliderItem: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  sliderText: {
    margin: '0, auto',
    width: 50,
  },
  textArea: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },
});
