import { MD3LightTheme, Provider } from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { themeLight } from "./src/config/theme";
import { themeDark } from "./src/config/theme";

export default function App() {

  const theme = {
    ...MD3LightTheme,
    colors: themeLight.colors,
  }
  return (
    <Provider theme={theme}>
      {}
      <AppNavigator />
    </Provider>
  );
}