import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    verticalAlign: 'top',
  },
  subtitleText: {
    lineHeight: 20,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    margintop: 10,
    width: 300,
    marginVertical: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  changelanguage: {
      padding: 10,
      marginTop: 500,
      alignItems: 'flex-start',
      borderWidth: 1,
      borderColor: 'black',
      width: 140,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  },
  

});