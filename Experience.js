import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoPagina}>
        Experiência Profissional:
      </Text>
      <View>
        <Text style={styles.education}>
          HEMOPE
        </Text>
        <Text>
          Estagiário de Design Gráfico
        </Text>
        <Text style={styles.date}>
          Mar 2023 — Ago 2023
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

export default Experience;