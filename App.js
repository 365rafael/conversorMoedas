import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Conversor from './src/Conversor';
//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=816e8cb0a3f21a040d3e

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.moeda}>Dólar</Text>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Text style={styles.moeda}>Euro</Text>
        <Conversor moedaA="EUR" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  moeda: {
    fontSize: 30,
  },
});

export default App;
