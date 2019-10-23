import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import logo from '../assets/unikor.png';
// import {LogOut} from 'react-feather';

import HistoryList from '../components/HistoryList';

export default function List({navigation}) {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('nome').then(setName);
    AsyncStorage.getItem('user').then(setUser);
  }, []);

  async function handleLogout() {
    await AsyncStorage.removeItem('nome');
    await AsyncStorage.removeItem('user');

    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topMenu}>
        <Image style={styles.logo} source={logo} />
        {/* <LogOut onPress={handleLogout} size={25} /> */}
        <Text onPress={handleLogout} size={25}>
          Sair
        </Text>
      </View>

      <Text style={styles.titlePage}>Histórico de relatórios</Text>
      <SafeAreaView style={[styles.history, {flex: 1}]}>
        {name && user ? <HistoryList key={user} name={name} /> : null}
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titlePage: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 24,
    alignSelf: 'center',
  },
  logo: {
    height: 60,
    width: '30%',
    resizeMode: 'center',
    alignSelf: 'center',
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  history: {
    marginBottom: 20,
  },
});
