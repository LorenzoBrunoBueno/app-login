import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import  SplashScreen  from "../screens/SplashScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NoteInsert from "../screens/Noteinsert";

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: "SplashScreen",
            headerShown: false,
          }}
        />
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabsNavigation}
          options={{
            title: "Inicial",
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Cadastrar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tabs = createMaterialBottomTabNavigator();

export function TabsNavigation(){
  return(
    <Tabs.Navigator>
      <Tabs.Screen name="Insert" component={NoteInsert} />
      <Tabs.Screen name="Home" component={HomeScreen} />
    </Tabs.Navigator>
  );
}