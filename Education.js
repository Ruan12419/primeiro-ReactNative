import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Education = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoPagina}>Formação</Text>
      <View>
        <Text style={styles.education}>
          Senac PE / Embarque Digital
        </Text>
        <Text style={styles.course}>
          Tecnologia em Análise e Desenvolvimento de Sistemas
        </Text>
        <Text style={styles.date}>
          Mar 2023 — Previsão Jul 2025
        </Text>
        <Text style={styles.education}>
          Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco | Recife
        </Text>
        <Text style={styles.course}>
          Tecnologia em Design Gráfico
        </Text>
        <Text style={styles.date}>
          Set 2022 — Previsão Jul 2024
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: "center"

  },
  textoPagina: {
    fontSize: 18,
    marginBottom: 15
  },
  education: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
    marginBottom: 15
  }, 
});

export default Education;