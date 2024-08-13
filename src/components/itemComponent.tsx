import React from 'react';
import {VirtualizedList, View, Text, StyleSheet} from 'react-native';
import {formatDate} from '../utils';

export type Rate = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

const Item = (rate: Rate, i: number) => {
  return (
    <View style={styles.itemContainer} key={i}>
      <View style={styles.item}>
        <Text numberOfLines={1} style={styles.exchange}>
          {rate.nombre}
        </Text>
        <View>
          <Text style={styles.operation}>Compra</Text>
          <Text style={styles.exchangeRate}>${rate.compra}</Text>
        </View>
        <View>
          <Text style={styles.operation}>Venta</Text>
          <Text style={styles.exchangeRate}>${rate.venta}</Text>
        </View>
      </View>
      <Text style={styles.updated}>{formatDate(rate.fechaActualizacion)}</Text>
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
});

export default ItemComponent;
