import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
export default function ProfileScreen() {
  const userDetails = new Map([
    ['Name', 'John Doe'],
    ['Age', 21],
    ['Gender', 'Male'],
    ['Date Of Birth', '1997-11-20'],
    ['City', 'Munich'],
    ['Country', 'Germany'],
    ['Address', '12 Foo Bar St.'],
  ]);
  return (
    <Container>
      <Content>
        <List>
          {Array.from(userDetails.keys()).map(key => (
            <ListItem key={key}>
              <Text>
                {key}: {userDetails.get(key)}
              </Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
};
