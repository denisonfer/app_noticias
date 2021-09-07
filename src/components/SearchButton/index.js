import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Icon } from 'react-native-elements';


import { handleShowSearchBar } from "../../store/modules/searchButton/actions";

export default function SearchButton() {
  const dispatch = useDispatch();
  const { isSearchBarVisible } = useSelector(state => state.searchButton)

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
        onPress={() => dispatch(handleShowSearchBar(isSearchBarVisible))}
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
