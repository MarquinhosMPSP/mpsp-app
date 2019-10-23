import React, {useEffect, useState} from 'react';
import {withNavigation} from 'react-navigation';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

// import {Calendar} from 'react-feather';

import api from '../services/api';

function History({name, navigation}) {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadHistory() {
      try {
        const {data} = await api.get(`/historico/${name}`);
        setReports(data);
      } catch (error) {
        setError('Não há relatórios!');
      }
    }
    loadHistory();
  }, []);

  function handleNavigate(report) {
    navigation.navigate('Report', {report});
  }

  return reports.length > 0 ? (
    <SafeAreaView>
      <FlatList
        style={styles.list}
        data={reports}
        keyExtractor={report => report._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.infoText}>Data do relatório</Text>
            <Text style={styles.dateText}>{item.dataRelatorio}</Text>
            <Text style={styles.infoText}>Nome</Text>
            <Text style={styles.dateText}>{item.nome}</Text>
            <Text style={styles.infoText}>CPF</Text>
            <Text style={styles.dateText}>{item.cpf || '-'}</Text>
            <Text style={styles.infoText}>CNPJ</Text>
            <Text style={styles.dateText}>{item.cnpj || '-'}</Text>
            <TouchableOpacity
              onPress={() => handleNavigate(item)}
              style={styles.button}>
              <Text style={styles.buttonText}>Visualizar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  ) : error ? (
    <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text>
  ) : (
    <ActivityIndicator animating={true} size="large" color="#000" />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    alignSelf: 'center',
  },
  dateText: {
    fontSize: 18,
  },
  button: {
    height: 32,
    backgroundColor: '#6610f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default withNavigation(History);
