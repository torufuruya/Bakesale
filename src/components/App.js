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

import ajax from '../ajax';
import DealList from './DealList';

class App extends React.Component {
  state = {
    deals: [],
  };
  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState((prevState) => {
      return { deals };
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.background}>
          <View style={styles.container}>
            {this.state.deals.length > 0 ? (
              <DealList deals={this.state.deals} />
            ) : (
              <Text style={styles.header}>Bakesale</Text>
            )}
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
