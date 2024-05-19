import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Home from './Home';
import Education from './Education'
import Experience from './Experience';


const BotaoMenuAba = ({ titulo, abaAtiva, setAbaAtiva }) => (
  <Text
    style={[styles.menu, abaAtiva === titulo && styles.menuItemAtiva]}
    onPress={() => setAbaAtiva(titulo)}
    >
      {titulo}
    </Text>
);

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState("Inicio");

  const componentesDasAbas = {
    Inicio: <Home />,
    Educacao: <Education />,
    Experiencia: <Experience />
  }

  const renderizarAba = () => {
    return componentesDasAbas[abaAtiva];
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={{ uri: "https://avatars.githubusercontent.com/u/93554503?v=4" }}
          style={styles.image} />
      </View>
      <ScrollView style={{ flex: 1 }}>
        {renderizarAba()}
      </ScrollView>

      <View style={styles.menu}>
        {Object.keys(componentesDasAbas).map(aba => 
          <BotaoMenuAba
          key={aba}
          titulo={aba}
          abaAtiva={abaAtiva}
          setAbaAtiva={setAbaAtiva}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',

  },
  imageView: {
    alignItems: "center",
    marginBottom: 25,
  },
  image: {
    height: 250,
    width: 300,
    borderRadius: 15,
    marginTop: 70,
  },
  nome: {
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: "#DDD",
    borderTopColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;