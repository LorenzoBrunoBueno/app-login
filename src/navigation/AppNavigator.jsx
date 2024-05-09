import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Inicial",
          }}
        />
         <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Inicial",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
