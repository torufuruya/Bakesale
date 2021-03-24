import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.header}>Bakesale</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  }
});

export default App;
