import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.nome}>Ruan Lima</Text>
      <Text style={styles.texto}>20 anos</Text>

      <Text style={styles.text}>
      Olá, meu nome é Ruan Lima, tenho 20 anos e estou cursando diversas áreas de TI, como programação frontend, backend e banco de dados. 
      Também estou fazendo uma graduação como tecnólogo em design gráfico, desenvolvendo habilidades que podem ser muito bem integradas à área de programação, 
      especialmente no frontend.
      </Text>
      <Text style={styles.text}>
      Tenho muito interesse em desenvolvimento backend, tendo iniciado meus estudos há dois anos, adquiri conhecimentos sólidos em Java (Spring Boot) e Python (Flask), 
      sendo o Java o principal. Não me limitando apenas ao backend, também desenvolvi conhecimentos em HTML (Thymeleaf, Jinja2), CSS (Bootstrap 5) e JavaScript (jQuery).
      </Text>
      <Text style={styles.text}>
      Considero o Java como a minha linguagem materna, pois foi a primeira linguagem de programação que aprendi, comparada a outras linguagens como Python e C, me adaptei 
      melhor ao Java, portanto, é a linguagem principal na qual quero me especializar.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',

  },
  nome: {
    fontWeight: 'bold',
  }, 
  text: {
    marginTop: 20,
    marginHorizontal: 18,
  }
});

export default Home;