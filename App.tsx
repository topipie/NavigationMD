import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/homescreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import SecondScreen from './pages/secondscreen';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './navigation';
import MainAppbar from './components/appbar';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{header: (props) => <MainAppbar {...props} />,
}}
        >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
    />     
    <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
        />
      </Stack.Navigator>


      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
