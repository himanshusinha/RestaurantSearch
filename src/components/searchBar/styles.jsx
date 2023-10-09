import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.GREY,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
    marginTop: 20,
    justifyContent: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingStart: 10,
  },
});
export default styles;
