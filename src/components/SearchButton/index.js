import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SearchButton() {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => alert('Buscar')}
        style={{
          width: 45,
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="search" type="ionicon" size={26} color="#c53030" />
      </TouchableOpacity>
    </View>
  );
}
