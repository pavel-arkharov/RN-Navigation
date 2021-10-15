// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Touchable,
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: '#2a9d8f' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
              color: '#2a9d8f',
              backgroundColor: '#264653',
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
            }}
          >
            Third page of Pavels app
          </Text>
          {route.params.someParam != 'reset' ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.btnText}>Go back</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SecondPage')}
          >
            <Text style={styles.btnText}>Go to Second Page</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'FirstPage',
                    params: { someParam: 'reset' },
                  },
                ],
              })
            }
          >
            <Text style={styles.btnText}>Reset navigator to First Page</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#264653',
          }}
        >
          Navigate Between Screens using{'\n'}React Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: '#264653',
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;

const styles = StyleSheet.create({
  button: {
    width: 150,
    marginTop: 5,
    backgroundColor: '#e9c46a',
    padding: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
