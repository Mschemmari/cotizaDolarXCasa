import React from 'react';
import {VirtualizedList, View, Text, StyleSheet} from 'react-native';
// import {formatDate} from '../utils';
import {Rate} from '../types';

const Item = (rate: Rate, i: number) => {
  console.log(rate);

  return (
    <View style={styles.itemContainer} key={i}>
      <View style={styles.item}>
        <Text numberOfLines={1} style={styles.exchange}>
          {rate.name}
        </Text>
        <View>
          <Text style={styles.operation}>Compra</Text>
          <Text style={styles.exchangeRate}>$ {rate.buyValue}</Text>
        </View>
        <View>
          <Text style={styles.operation}>Venta</Text>
          <Text style={styles.exchangeRate}>$ {rate.sellValue}</Text>
          {/* <Text style={styles.exchangeRate}>%{rate.variacion}</Text> */}
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.updated}>Actualizado: {rate.actualizacion}</Text>
        <Text style={styles.variacion}>Variacion: {rate.variation}%</Text>
      </View>
    </View>
  );
};
const ItemComponent = ({rates}: any) => {
  return (
    <>
      {rates && (
        <VirtualizedList
          data={rates}
          initialNumToRender={4}
          renderItem={({item}: {item: Rate}) => <Item {...item} />}
          keyExtractor={item => item.casa}
          getItemCount={() => rates.length}
          getItem={(data, index) => rates[index]}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#374151',
    marginVertical: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#374151',
  },
  updated: {
    fontSize: 11,
    color: 'gray',
    textAlign: 'left',
  },
  variacion: {
    fontSize: 11,
    color: 'gray',
    textAlign: 'right',
  },
  exchange: {
    fontSize: 20,
    color: 'white',
    width: 150,
  },
  operation: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  },
  exchangeRate: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  bottom: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
  },
});

export default ItemComponent;
