import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, Button, FlatListComponent } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 
import Constants  from "expo-constants"

import ico1 from './assets/iconos/ico1.png'
import ico2 from './assets/iconos/ico2.png'
import ico3 from './assets/iconos/ico3.png'
import ico4 from './assets/iconos/ico4.png'
import ico5 from './assets/iconos/ico5.png'

import perro from './assets/frecu/perro.png'
import gato from './assets/frecu/gato.png'
import huron from './assets/frecu/huron.png'
import baca from './assets/frecu/baca.png'
import caballo from './assets/frecu/caballo.png'
import gallo from './assets/frecu/gallo.png'
import oveja from './assets/frecu/oveja.png'
import cerdo from './assets/frecu/cerdo.png'
import conejo from './assets/frecu/conejo.png'

import dosis from './assets/frecu/dosis.png'
import flu from './assets/frecu/flu.png'
import tras from './assets/frecu/tras.png'
import loogoo from './assets/frecu/loogoo.png'

import { styled, withExpoSnack } from 'nativewind';
import { DataDocumentos } from './datos/datos';


const Footer = () => {

  const navigation = useNavigation()

  return (
    <View className="w-screen h-[65px] flex-row justify-evenly items-center">
        <TouchableOpacity onPress={()=> navigation.navigate("Documentos")}>
          <View>
            <Image
              className="h-[40px] w-[40px]"
              style={{resizeMode: "contain"}}
              source={ico2}
            />
            <Text className="font-light text-sm text-center">Docu...</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Calculadoras")}>
          <View>
            <Image
              className="h-[40px] w-[40px]"
              style={{resizeMode: "contain"}}
              source={ico1}
            />
            <Text className="font-light text-sm text-center">Calc...</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Laboratorio")}>
          <View>
            <Image
              className="h-[40px] w-[40px]"
              style={{resizeMode: "contain"}}
              source={ico3}
            />
            <Text className="font-light text-sm text-center">Labo...</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Nomenglarutura")}>
          <View>
            <Image
              className="h-[40px] w-[40px]"
              style={{resizeMode: "contain"}}
              source={ico4}
            />
            <Text className="font-light text-sm text-center">Nome...</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Frecuencias")}>
          <View>
            <Image
              className="h-[40px] w-[40px]"
              style={{resizeMode: "contain"}}
              source={ico5}
            />
            <Text className="font-light text-sm">Frec...</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}


const App = () => {
  
  const Stack = createNativeStackNavigator();
  

  // const [ Titulo, setTitulo ] = useState("")

  return (
    <NavigationContainer >
      {/* <Text className="w-screen" style={{height: `${Constants.statusBarHeight}px`}} ></Text> */}
      {/* <Header /> */}
      <Stack.Navigator>

        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Documentos"
          component={Documentos}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            // headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="DataDocumento"
          component={DataDocumento}
        />

        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Frecuencias"
          component={Frecuencias}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Perro"
          component={Perro}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Gato"
          component={Gato}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Huron"
          component={Huron}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Bovino"
          component={Bovino}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Equino"
          component={Equino}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Aves"
          component={Aves}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Ovino"
          component={Ovino}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Porcino"
          component={Porcino}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Conejo"
          component={Conejo}
        />

        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Calculadoras"
          component={Calculadoras}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Dosis"
          component={Dosis}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Fluidoterapia"
          component={Fluidoterapia}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Transfusion"
          component={Transfusion}
        />
        
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Laboratorio"
          component={Laboratorio}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Perros"
          component={Perros}
        />
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Gatos"
          component={Gatos}
        />
        
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text className="font-semibold text-lg text-slate-700">{props.children}</Text>,
            headerRight: () => <View className="h-[36px] w-[36px]">
              <Image
                className="h-full w-full"
                style={{resizeMode: "contain"}}
                source={loogoo}
              />
            </View>,
          })}
          name="Nomenglarutura"
          component={Nomenglarutura}
        />

      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  )
}



const Documentos = ({ navigation }) => {

  const [ text, onChangeText ] = useState('');

  return (
    <ScrollView className="relative">
      
      <View className="p-3 flex flex-1 justify-center">
        <View className="px-9 mb-6 mt-5">
          <TextInput
            className="border-b border-red-200 focus:border-red-600"
            onChangeText={onChangeText}
            value={text}
            placeholder='Buscar'
          />
        </View>
        {
          DataDocumentos.map((value, key)=> {

            if(value.nombre.toLowerCase().includes(text.toLowerCase())) {
              return (
                <View key={key} className="my-1 h-10 relative">
                    <TouchableOpacity
                      onPress={() => {
                        // setVista(!vista)
                        navigation.navigate("DataDocumento", {
                          obj: value
                        })
                      }}
                      className="absolute top-0 left-0 bg-slate-200 h-full w-full flex-1 flex-row justify-between items-center px-2"
                    >
                      <Text className="text-slate-700">{value.nombre}</Text>
                      <AntDesign name="rightcircleo" size={24} color="#334155" />
                    </TouchableOpacity>
                </View>
              )
            }
          })
        }
      </View>
      
    </ScrollView>
  )
}
const DataDocumento = ({ route, navigation }) => {

  const { obj } = route.params

  let nombrelisto = obj.nombre

  if(obj.nombre.length > 15) {
    nombrelisto = obj.nombre.substring(0, 15)+"..."
  }

  return (
    <View >
      <View className="p-4 mt-3">
        <View className="flex-row justify-around">
          <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
            <Text className="font-semibold text-slate-700">Especies</Text>
          </View>
          <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
            <Text className="font-semibold text-slate-700">Dosis</Text>
          </View>
          <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
            <Text className="font-semibold text-slate-700">Via</Text>
          </View>
          <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
            <Text className="font-semibold text-slate-700">Frecuencia</Text>
          </View>
        </View>
        {
          obj.tabla.map((value, key) => {

            return (
              <View key={key} className="flex-row justify-around">
                <View className="flex-1 justify-center items-center border border-slate-400">
                  <Text className="text-slate-700">{value.especies}</Text>
                </View>
                <View className="flex-1 justify-center items-center border border-slate-400">
                  <Text className="text-slate-700">{value.dosis}</Text>
                </View>
                <View className="flex-1 justify-center items-center border border-slate-400">
                  <Text className="text-slate-700">{value.via}</Text>
                </View>
                <View className="flex-1 justify-center items-center border border-slate-400">
                  <Text className="text-slate-700">{value.frecuencia}</Text>
                </View>
              </View>
            )
          })
        }

        <View className="mt-5 border border-slate-400">
          <Text className="font-semibold bg-slate-200 text-center text-slate-700 border-b border-slate-400">Indicaciones</Text>
          <Text className="text-center text-slate-700">{obj.indicaciones}</Text>
        </View>

        <View className="mt-5 border border-slate-400">
          <Text className="font-semibold bg-slate-200 text-center text-slate-700 border-b border-slate-400">Contraindicaciones</Text>
          <Text className="text-center text-slate-700">{obj.indicaciones}</Text>
        </View>

        <View className="mt-5 border border-slate-400">
          <Text className="font-semibold bg-slate-200 text-center text-slate-700 border-b border-slate-400">Accion</Text>
          <Text className="text-center text-slate-700">{obj.indicaciones}</Text>
        </View>

        <View className="mt-5 border border-slate-400">
          <Text className="font-semibold bg-slate-200 text-center text-slate-700 border-b border-slate-400">Nombres Comerciales</Text>
          <Text className="text-center text-slate-700">{obj.indicaciones}</Text>
        </View>

      </View>
      
    </View>
  )
}



const Frecuencias = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="flex-1 h-[100vh] flex-wrap flex-row justify-center items-center bg-slate-200 p-3" >
    
        <TouchableOpacity onPress={()=> navigation.navigate("Perro")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
              <Image
                className="h-[80%] w-full"
                style={{resizeMode: "contain"}}
                source={perro}
              />
              <Text className="text-center">Perro</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Gato")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={gato}
            />
            <Text className="text-center">Gato</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Huron")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={huron}
            />
            <Text className="text-center">Huron</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Bovino")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={baca}
            />
            <Text className="text-center">Bovino</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Equino")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={caballo}
            />
            <Text className="text-center">Equino</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Aves")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={gallo}
            />
            <Text className="text-center">Aves</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Ovino")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={oveja}
            />
            <Text className="text-center">Ovino</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Porcino")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={cerdo}
            />
            <Text className="text-center">Porcino</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Conejo")}>
          <View className="h-[120px] w-[120px] rounded bg-slate-300 m-2">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={conejo}
            />
            <Text className="text-center">Conejo</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  )
}

const Perro = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Gato = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Huron = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Bovino = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Equino = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Aves = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Ovino = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Porcino = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}
const Conejo = ({ navigation }) => {

  const data = [
    {
      titulo: "Frecuencia Cardiaca",
      data: [
        {
          edad: "Cachorros",
          rango: "100 - 120",
          unidad: "Latidos por minutos",
        },
        {
          edad: "Adultos",
          rango: "80 - 100",
          unidad: "Latidos por minutos",
        },
        {
          edad: "seniles",
          rango: "70 - 90",
          unidad: "Latidos por minutos",
        }
      ],
    },
    {
      titulo: "Frecuencia Respiratoria",
      data: [
        {
          edad: "Cachorros",
          rango: "15 - 20",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "Adultos",
          rango: "10 - 30",
          unidad: "Ciclos por minutos",
        },
        {
          edad: "seniles",
          rango: "14 - 18",
          unidad: "Ciclos por minutos",
        }
      ],
    },
    {
      titulo: "Temperatura Rectal",
      data: [
        {
          edad: "Cachorros",
          rango: "38,5 - 38,5",
          unidad: "Grados Celsius",
        },
        {
          edad: "Adultos",
          rango: "38 - 39",
          unidad: "Grados Celsius",
        }
      ],
    },
    {
      titulo: "Tiempo de Rellene Capilar",
      data: [
        {
          edad: "Adultos",
          rango: "1 - 2",
          unidad: "Segundos",
        }
      ],
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Edad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.edad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}









const Calculadoras = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="flex-1 h-[100vh] flex-wrap flex-row justify-center items-center bg-slate-200" >
    
        <TouchableOpacity onPress={()=> navigation.navigate("Dosis")}>
          <View onPress={()=> alert("fff")} className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
              <Image
                className="h-[80%] w-full"
                style={{resizeMode: "contain"}}
                source={dosis}
              />
              <Text className="text-center">Dosis</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Fluidoterapia")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={flu}
            />
            <Text className="text-center">Fluidoterapia</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Transfusion")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={tras}
            />
            <Text className="text-center">Transfusion</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  )
}
const Dosis = ({ navigation }) => {
  const [peso, onChangePeso] = React.useState('');
  const [dosis, onChangeDosis] = React.useState('');
  const [concentracion, onChangeConcentracion] = React.useState('');

  return (
    <View className="mt-3">
      
      <View className="p-4">
        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Peso (Ej. 25 kg)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangePeso}
              placeholder="Digite Peso"
              keyboardType="numeric"
              value={peso}
            />
            <Text className="text-slate-700 w-10 ml-1">kg</Text>
          </View>

        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Dosis (Ej. 0.5 mg/kg)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeDosis}
              placeholder="Digite Dosis"
              keyboardType="numeric"
              value={dosis}
            />
            <Text className="text-slate-700 w-10 ml-1">mg/kg</Text>
          </View>
        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Concentracion (Ej. 1%)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeConcentracion}
              placeholder="Digite Concen..."
              keyboardType="numeric"
              value={concentracion}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>
        </View>
      </View>

      <View className="w-screen flex-row justify-center mt-4">
        <View className="w-[33vw]">
          <Button
            // onPress={onPressLearnMore}
            title="Calcular"
            color="#b91c1c"
            
          />
        </View>
      </View>
    </View>
  )
}
const Fluidoterapia = ({ navigation }) => {
  const [peso, onChangePeso] = React.useState('');
  const [dosis, onChangeDosis] = React.useState('');
  const [concentracion, onChangeConcentracion] = React.useState('');

  return (
    <View className="mt-3">
      
      <View className="p-4">
        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Deshidratacion (Ej. 5%)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangePeso}
              placeholder="Deshidratacion"
              keyboardType="numeric"
              value={peso}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>

        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Peso (Ej. 25 kg)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeDosis}
              placeholder="Peso"
              keyboardType="numeric"
              value={dosis}
            />
            <Text className="text-slate-700 w-10 ml-1">kg</Text>
          </View>
        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Perdidas estimadas al dia (Ej. 400 ml)</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeConcentracion}
              placeholder="Perdidas esti..."
              keyboardType="numeric"
              value={concentracion}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>
        </View>
      </View>

      <View className="w-screen flex-row justify-center mt-4">
        <View className="w-[230px] flex-row justify-evenly">
          <Button
            // onPress={onPressLearnMore}
            title="20 gotas/ml"
            color="#b91c1c"
            
          />
          <Button
            // onPress={onPressLearnMore}
            title="60 gotas/ml"
            color="#b91c1c"
            
          />
        </View>
      </View>
    </View>
  )
}
const Transfusion = ({ navigation }) => {
  const [peso, onChangePeso] = React.useState('');
  const [dosis, onChangeDosis] = React.useState('');
  const [concentracion, onChangeConcentracion] = React.useState('');

  return (
    <View className="mt-3">
      
      <View className="p-4">
        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Hematocrito paciente</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangePeso}
              placeholder="Digite Peso"
              keyboardType="numeric"
              value={peso}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>

        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Hematocrito deseado</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeDosis}
              placeholder="Digite Dosis"
              keyboardType="numeric"
              value={dosis}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>
        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Hematocrito donante</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeDosis}
              placeholder="Digite Dosis"
              keyboardType="numeric"
              value={dosis}
            />
            <Text className="text-slate-700 w-10 ml-1">%</Text>
          </View>
        </View>

        <View className="flex-row items-center my-2">
          <Text className="text-slate-700 w-[170px]">Peso paciente</Text>
          <View className="flex-1 flex-row ml-12">
            <TextInput
              className="bg-red-100 flex-1 rounded text-slate-700 border-b border-red-400 focus:border-red-700"
              onChangeText={onChangeConcentracion}
              placeholder="Digite Concen..."
              keyboardType="numeric"
              value={concentracion}
            />
            <Text className="text-slate-700 w-10 ml-1">kg</Text>
          </View>
        </View>
      </View>

      <View className="w-screen flex-row justify-center mt-4">
        <View className="w-[200px] flex-row justify-evenly">
          <Button
            // onPress={onPressLearnMore}
            title="Calcular"
            color="#b91c1c"
          />
          <Button
            // onPress={onPressLearnMore}
            title="Calcular"
            color="#b91c1c"
          />
        </View>
      </View>
    </View>
  )
}

const Laboratorio = ({ navigation }) => {
  return (
    <ScrollView>
      <View className="flex-1 h-[100vh] flex-wrap flex-row justify-center items-center bg-slate-200" >
    
        <TouchableOpacity onPress={()=> navigation.navigate("Perros")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
              <Image
                className="h-[80%] w-full"
                style={{resizeMode: "contain"}}
                source={ico2}
              />
              <Text className="text-center">Perros</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Gatos")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={ico5}
            />
            <Text className="text-center">Gatos</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  )
}
const Perros = ({ navigation }) => {

  const data = [
    {
      titulo: "Hemograma Linea Roja",
      data: [
        {
          abreviatura: "Hematocrito",
          unidad: "%",
          rango: "35 - 55",
        },
        {
          abreviatura: "Eritrocitos",
          unidad: "x 10^6/µl",
          rango: "5,5 - 8,5",
        },
        {
          abreviatura: "Hemoglobina",
          unidad: "g/dl",
          rango: "12 - 18",
        },
        {
          abreviatura: "Plaquetas",
          unidad: "x 10^3/µl",
          rango: "150 - 500",
        },
        {
          abreviatura: "V.C.M.",
          unidad: "Fl",
          rango: "60 - 77",
        },
        {
          abreviatura: "Hb.C.M.",
          unidad: "pg/g",
          rango: "19,5 - 24,5",
        },
        {
          abreviatura: "C.Hb.C.M.",
          unidad: "%",
          rango: "31 - 36",
        },
      ],
    },
    {
      titulo: "Hemograma Linea Blanca",
      data: [
        {
          abreviatura: "Leucocitos",
          unidad: "x 10^3/µ",
          rango: "l6 - 16",
        },
        {
          abreviatura: "N. Cayados",
          unidad: "x 10^3/µ",
          rango: "l0 - 0,3",
        },
        {
          abreviatura: "N. Segmentados",
          unidad: "x 10^3/µ",
          rango: "l3 - 11,5",
        },
        {
          abreviatura: "Eosinófilos",
          unidad: "x 10^3/µ",
          rango: "l0,1 - 1,5",
        },
        {
          abreviatura: "Basófilos",
          unidad: "x 10^3/µ",
          rango: "l0 - 0,1",
        },
        {
          abreviatura: "Linfocitos",
          unidad: "x 10^3/µ",
          rango: "l1 - 5",
        },
        {
          abreviatura: "Monocitos",
          unidad: "x 10^3/µ",
          rango: "l0,1 - 1,5",
        }
      ],
    },
    {
      titulo: "Perfil Bioqimico",
      data: [
        {
          abreviatura: "Ácido úrico",
          unidad: "mg / dl",
          rango: "0,2 - 1,6",
        },
        {
          abreviatura: "Ácidos biliares (Ayuno)",
          unidad: "µmol / l",
          rango: "< 10",
        },
        {
          abreviatura: "Ácidos biliares (Pospandrial)",
          unidad: "µmol / l",
          rango: "< 25",
        },
        {
          abreviatura: "Albúmina",
          unidad: "g / dl",
          rango: "2,5 - 3,5",
        },
        {
          abreviatura: "Amilasa",
          unidad: "UI / L",
          rango: "< 3000",
        },
        {
          abreviatura: "ALT - GPT",
          unidad: "UI / L",
          rango: "< 100",
        },
        {
          abreviatura: "AST - GOT",
          unidad: "UI / L",
          rango: "< 90",
        },
        {
          abreviatura: "Bilirrubina directa",
          unidad: "mg / dl",
          rango: "< 0,3",
        },
        {
          abreviatura: "Bilirrubina indirecta",
          unidad: "mg / dl",
          rango: "< 0,7",
        },
        {
          abreviatura: "Bilirrubina total",
          unidad: "mg / dl",
          rango: "0,1 - 1",
        },
        {
          abreviatura: "BUN",
          unidad: "mg / dl",
          rango: "10 - 25",
        },
        {
          abreviatura: "Colesterol",
          unidad: "mg / dl",
          rango: "120 - 255",
        },
        {
          abreviatura: "CPK",
          unidad: "UI / L",
          rango: "< 120",
        },
        {
          abreviatura: "Creatinina",
          unidad: "mg / dl",
          rango: "1 - 2",
        },
        {
          abreviatura: "FA",
          unidad: "UI / L",
          rango: "< 200",
        },
        {
          abreviatura: "Fructosamina",
          unidad: "µmol / L",
          rango: "250 - 350",
        },
        {
          abreviatura: "GGT",
          unidad: "UI / L",
          rango: "< 10",
        },
        {
          abreviatura: "Globulinas totales",
          unidad: "g / dl",
          rango: "2 - 4",
        },
        {
          abreviatura: "Glucosa",
          unidad: "mg / dl",
          rango: "60 - 120",
        },
        {
          abreviatura: "LDH",
          unidad: "UI / L",
          rango: "25 - 220",
        },
        {
          abreviatura: "Lipasa",
          unidad: "UI / L",
          rango: "< 800",
        },
        {
          abreviatura: "Lípidos totales",
          unidad: "mg / dl",
          rango: "300 - 800",
        },
        {
          abreviatura: "Proteínas totales",
          unidad: "g / dl",
          rango: "5,5 - 8",
        },
        {
          abreviatura: "TLI",
          unidad: "ng / ml",
          rango: "5 - 35",
        },
        {
          abreviatura: "Triglicéridos",
          unidad: "mg / dl",
          rango: "< 150",
        },
        {
          abreviatura: "Urea",
          unidad: "mg /dl",
          rango: "10 - 60",
        },
      ]
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Abreviatura</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.abreviatura}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>
  )
}
const Gatos = ({ navigation }) => {

  const data = [
    {
      titulo: "Hemograma Linea Roja",
      data: [
        {
          abreviatura: "Hematocrito",
          unidad: "%",
          rango: "35 - 55",
        },
        {
          abreviatura: "Eritrocitos",
          unidad: "x 10^6/µl",
          rango: "5,5 - 8,5",
        },
        {
          abreviatura: "Hemoglobina",
          unidad: "g/dl",
          rango: "12 - 18",
        },
        {
          abreviatura: "Plaquetas",
          unidad: "x 10^3/µl",
          rango: "150 - 500",
        },
        {
          abreviatura: "V.C.M.",
          unidad: "Fl",
          rango: "60 - 77",
        },
        {
          abreviatura: "Hb.C.M.",
          unidad: "pg/g",
          rango: "19,5 - 24,5",
        },
        {
          abreviatura: "C.Hb.C.M.",
          unidad: "%",
          rango: "31 - 36",
        },
      ],
    },
    {
      titulo: "Hemograma Linea Blanca",
      data: [
        {
          abreviatura: "Leucocitos",
          unidad: "x 10^3/µ",
          rango: "l6 - 16",
        },
        {
          abreviatura: "N. Cayados",
          unidad: "x 10^3/µ",
          rango: "l0 - 0,3",
        },
        {
          abreviatura: "N. Segmentados",
          unidad: "x 10^3/µ",
          rango: "l3 - 11,5",
        },
        {
          abreviatura: "Eosinófilos",
          unidad: "x 10^3/µ",
          rango: "l0,1 - 1,5",
        },
        {
          abreviatura: "Basófilos",
          unidad: "x 10^3/µ",
          rango: "l0 - 0,1",
        },
        {
          abreviatura: "Linfocitos",
          unidad: "x 10^3/µ",
          rango: "l1 - 5",
        },
        {
          abreviatura: "Monocitos",
          unidad: "x 10^3/µ",
          rango: "l0,1 - 1,5",
        }
      ],
    },
    {
      titulo: "Perfil Bioqimico",
      data: [
        {
          abreviatura: "Ácido úrico",
          unidad: "mg / dl",
          rango: "0,2 - 1,6",
        },
        {
          abreviatura: "Ácidos biliares (Ayuno)",
          unidad: "µmol / l",
          rango: "< 10",
        },
        {
          abreviatura: "Ácidos biliares (Pospandrial)",
          unidad: "µmol / l",
          rango: "< 25",
        },
        {
          abreviatura: "Albúmina",
          unidad: "g / dl",
          rango: "2,5 - 3,5",
        },
        {
          abreviatura: "Amilasa",
          unidad: "UI / L",
          rango: "< 3000",
        },
        {
          abreviatura: "ALT - GPT",
          unidad: "UI / L",
          rango: "< 100",
        },
        {
          abreviatura: "AST - GOT",
          unidad: "UI / L",
          rango: "< 90",
        },
        {
          abreviatura: "Bilirrubina directa",
          unidad: "mg / dl",
          rango: "< 0,3",
        },
        {
          abreviatura: "Bilirrubina indirecta",
          unidad: "mg / dl",
          rango: "< 0,7",
        },
        {
          abreviatura: "Bilirrubina total",
          unidad: "mg / dl",
          rango: "0,1 - 1",
        },
        {
          abreviatura: "BUN",
          unidad: "mg / dl",
          rango: "10 - 25",
        },
        {
          abreviatura: "Colesterol",
          unidad: "mg / dl",
          rango: "120 - 255",
        },
        {
          abreviatura: "CPK",
          unidad: "UI / L",
          rango: "< 120",
        },
        {
          abreviatura: "Creatinina",
          unidad: "mg / dl",
          rango: "1 - 2",
        },
        {
          abreviatura: "FA",
          unidad: "UI / L",
          rango: "< 200",
        },
        {
          abreviatura: "Fructosamina",
          unidad: "µmol / L",
          rango: "250 - 350",
        },
        {
          abreviatura: "GGT",
          unidad: "UI / L",
          rango: "< 10",
        },
        {
          abreviatura: "Globulinas totales",
          unidad: "g / dl",
          rango: "2 - 4",
        },
        {
          abreviatura: "Glucosa",
          unidad: "mg / dl",
          rango: "60 - 120",
        },
        {
          abreviatura: "LDH",
          unidad: "UI / L",
          rango: "25 - 220",
        },
        {
          abreviatura: "Lipasa",
          unidad: "UI / L",
          rango: "< 800",
        },
        {
          abreviatura: "Lípidos totales",
          unidad: "mg / dl",
          rango: "300 - 800",
        },
        {
          abreviatura: "Proteínas totales",
          unidad: "g / dl",
          rango: "5,5 - 8",
        },
        {
          abreviatura: "TLI",
          unidad: "ng / ml",
          rango: "5 - 35",
        },
        {
          abreviatura: "Triglicéridos",
          unidad: "mg / dl",
          rango: "< 150",
        },
        {
          abreviatura: "Urea",
          unidad: "mg /dl",
          rango: "10 - 60",
        },
      ]
    },
  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Abreviatura</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Unidad</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Rango</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.abreviatura}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.unidad}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.rango}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>
  )
}

const Nomenglarutura = () => {
  const data = [
    {
      titulo: "Unidades",
      data: [
        {
          abreviatura: "mg",
          significado: "Miligramo",
        },
        {
          abreviatura: "kg",
          significado: "Kilogramo",
        },
        {
          abreviatura: "kg",
          significado: "Microgramo",
        },
        {
          abreviatura: "ui",
          significado: "Unidades Internacionales",
        },
        {
          abreviatura: "ml",
          significado: "Mililitro",
        },
      ],
    },
    {
      titulo: "Frecuenciade administracion",
      data: [
        {
          abreviatura: "QD",
          significado: "Una vez al dia",
        },
        {
          abreviatura: "BID",
          significado: "Dos veces al dia",
        },
        {
          abreviatura: "TID",
          significado: "tres veces al dia",
        },
        {
          abreviatura: "QID",
          significado: "Cuatro veces al dia",
        },
      ],
    },
    {
      titulo: "vias de administracion",
      data: [
        {
          abreviatura: "EV",
          significado: "Endovenoso",
        },
        {
          abreviatura: "EVIL",
          significado: "Endovenoso Lento",
        },
        {
          abreviatura: "IM",
          significado: "Intramuscular",
        },
        {
          abreviatura: "SC",
          significado: "Subcutaneo",
        },
        {
          abreviatura: "PO",
          significado: "Oral",
        },
        {
          abreviatura: "IC",
          significado: "Intracardiaco",
        },
      ],
    },

  ]

  return (
    <ScrollView>
      <View className="p-4">

        {
          data.map((value, key) => {
            
            return (
              <View key={key} className="my-3">
                <Text className="text-slate-700 text-center font-semibold text-base border border-slate-400 bg-slate-200">{value.titulo}</Text>
                <View className="flex-row justify-around">
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Abreviatura</Text>
                  </View>
                  <View className="flex-1 bg-slate-200 justify-center items-center border border-slate-400">
                    <Text className="font-semibold text-slate-700">Significado</Text>
                  </View>
                </View>
                {
                  value.data.map((valor, llabe) => {

                    return (
                      <View key={llabe} className="flex-row justify-around">
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.abreviatura}</Text>
                        </View>
                        <View className="flex-1 justify-center items-center border border-slate-400">
                          <Text className="text-slate-700">{valor.significado}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }
      
      </View>
    </ScrollView>

  )
}



const Home = ({ navigation }) => {

  

  return (
    <ScrollView>
      <View className="flex-1 h-[100vh] flex-wrap flex-row justify-center items-center bg-slate-200" >
    
        <TouchableOpacity onPress={()=> navigation.navigate("Documentos")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
              <Image
                className="h-[80%] w-full"
                style={{resizeMode: "contain"}}
                source={ico2}
              />
              <Text className="text-center">DOCUMENTOS</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Frecuencias")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={ico5}
            />
            <Text className="text-center">FRECUENCIAS</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Calculadoras")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={ico1}
            />
            <Text className="text-center">CALCULADORAS</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Laboratorio")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={ico3}
            />
            <Text className="text-center">LABORATORIO</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Nomenglarutura")}>
          <View className="h-[40vw] w-[40vw] rounded bg-slate-300 m-3">
            <Image
              className="h-[80%] w-full"
              style={{resizeMode: "contain"}}
              source={ico4}
            />
            <Text className="text-center">NOMENGLATURA</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}






export default App







// npm install --global eas-cli && \
// npx create-expo-app clinic-info && \
// cd clinic-info && \
// eas init --id 2185a920-eb79-4b52-9060-f3ce24085196
// Vincular una base de código existente
// Ejecute los siguientes comandos en el directorio raíz de su proyecto:

// Terminal
// npm install --global eas-cli && \
// eas init --id 2185a920-eb79-4b52-9060-f3ce24085196