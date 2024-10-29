import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ItemComponent from './src/components/itemComponent';
import {formatDate} from './src/utils'; //firebaseConfig
import {useRates} from './src/hooks/useRates';
import {LogLevel, OneSignal} from 'react-native-onesignal';

// import {initializeApp} from 'firebase/app';

// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, snapshot => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

const App = () => {
  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('ONESIGNAL_APP_ID');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  const {rates, modified} = useRates();
  console.log(rates);

  const today = new Date();
  const formattedDate = formatDate(today.toISOString());
  return (
    <SafeAreaView style={styles.componentContainer}>
      <View style={styles.scrollViewStyle}>
        <Text style={styles.headerTitle}>Cotización del Dólar</Text>
        <Text style={styles.headerDate}>{formattedDate}</Text>
        <Text style={styles.headerDate}>Fuente: Diario El Cronista</Text>
        {rates && <ItemComponent rates={rates} />}
        <Text style={styles.headerTitle}>Ultima actualizacion:</Text>
        {modified && <ItemComponent rates={modified} />}
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
