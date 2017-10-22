/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {ToastAndroid, Alert} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
export default class App extends Component < {} > {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Button light onPress={() => {
            ToastAndroid.showWithGravityAndOffset('A wild toast appeared!', ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
          }}>
            <Text>
              Toast
            </Text>
          </Button>
          <Button primary onPress={() => {
            Alert.alert('Alert Title', 'My Alert Msg', [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              }, {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              }, {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              }
            ], {cancelable: false})
          }}>
            <Text>
              Alert
            </Text>
          </Button>
          <Button success onPress={() => navigate('Test')}>
            <Text>
              Success
            </Text>
          </Button>
          <Button info>
            <Text>
              Info
            </Text>
          </Button>
          <Button warning>
            <Text>
              Warning
            </Text>
          </Button>
          <Button danger>
            <Text>
              Danger
            </Text>
          </Button>
          <Button dark>
            <Text>
              Hitam
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
