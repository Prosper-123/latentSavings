import {react} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoansScreen from './screens/LoansScreen';
import SavingsScreen from './screens/SavingsScreen';
import { SafeAreaView, StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer> 
    <SafeAreaView styles = {{flex :1, backgroundColor : '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="Savings" component={SavingsScreen} />
      </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  )
}