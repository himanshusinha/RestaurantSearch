import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View>
      <View style={styles.background}>
        <View style={styles.searchBar}>
          <Feather name="search" size={30} color={'black'} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
