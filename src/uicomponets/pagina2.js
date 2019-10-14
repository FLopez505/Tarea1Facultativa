import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
  DrawerLayoutAndroid
} from 'react-native';

function Separador(){
  return <View style={styles.separator}></View>;
}

const Pagina2 = (propiedades)=>{
    const {cambiarPagina}  = propiedades;

    return(

      <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                Bienvenido a la Página 2
            </Text>

            <Text style={{fontWeight: 'bold',textAlign: 'center'}}>
                Página 2
            </Text>

            <Separador/>
            <Button
            title='Ir a Página 1'
            onPress={cambiarPagina}
            />
        </View>
      </SafeAreaView>  
    );
}
//Prueba de estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#B2FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    //marginVertical: 5,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}); 

//Fin de pruebas de estilos

export default Pagina2;
