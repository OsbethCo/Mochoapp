// navigation/AppNavigator.js
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/welcome';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../components/login/register';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF', // Color de header común
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Iniciar Sesión' }} 
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Registro' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;