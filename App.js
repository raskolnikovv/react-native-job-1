import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './screens/Home';
import Form from './screens/Form';
import List from './screens/List';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />        
          <Stack.Screen name="Form" component={Form} />        
          <Stack.Screen name="List" component={List} />        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
