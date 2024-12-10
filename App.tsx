import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';
import * as Font from 'expo-font';
import React, { useEffect } from 'react';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito, Operadores,
         establecerOperacion,resultado  } = useCalculadora();
  
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'pixelButtonFont': require('./assets/fonts/rainyhearts.ttf'),
        'pixel': require('./assets/fonts/VCR_OSD_MONO_1.001.ttf')
      });
    };
    loadFonts();
  }, []);


  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla tamanyo='p1' numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla tamanyo ='p2' numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla tamanyo = 'p2' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo = 'botonDemas' label='C' width={80} onPress={clean}></BotonOperacion>
      <BotonOperacion tipo = 'botonDemas' label='+/-' width={80} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion tipo = 'botonDemas' label='del' width={80} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion tipo = 'botonOperador' label='/' width={80} onPress={() => establecerOperacion(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo = 'botonNumero' label='7' width={80} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='8' width={80} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='9' width={80} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion tipo = 'botonOperador' label='x' width={80} onPress={() =>establecerOperacion(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo = 'botonNumero' label='4' width={80} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='5' width={80} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='6' width={80} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion tipo = 'botonOperador' label='-' width={80} onPress={() =>establecerOperacion(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo = 'botonNumero' label='1' width={80} onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='2' width={80} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion tipo = 'botonNumero' label='3' width={80} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion tipo = 'botonOperador' label='+' width={80} onPress={() =>establecerOperacion(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo = 'botonNumero' label='0' width={180} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion tipo = 'botonDemas' label='.' width={80} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion tipo = 'botonOperador' label='=' width={80} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}
