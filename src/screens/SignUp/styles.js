import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    top: 10,
    padding: 15,
    width: '100%',
    
  },
  description: {
    fontSize: 20,
    fontWeight: 'normal',
    position: 'absolute',
    top: 0,
    color: 'black',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    color: 'red',
    width: '100%',
    textAlign: 'center',
  },
  bottom: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 30,
  },
  button: {
    backgroundColor: 'green',
    margin: 2,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
