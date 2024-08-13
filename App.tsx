import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ItemComponent from './src/components/itemComponent';
import {formatDate} from './src/utils';
import {useRates} from './src/hooks/useRates';

const App = () => {
  const {rates} = useRates();
  const today = new Date();
  const formattedDate = formatDate(today.toISOString());
  return (
    <SafeAreaView style={styles.componentContainer}>
      <View style={styles.scrollViewStyle}>
        <Text style={styles.headerTitle}>Cotización del Dólar</Text>
        <Text style={styles.headerDate}>{formattedDate}</Text>
        <ItemComponent rates={rates} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    backgroundColor: '#111827',
  },
  scrollViewStyle: {
    backgroundColor: '#111827',
    margin: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  headerDate: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
