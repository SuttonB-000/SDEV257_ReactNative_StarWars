import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Planets from "./planets.js";
import Spaceships from "./spaceships.js";
import Films from "./films.js";
import Settings from "./settings.js";

const Tab = createBottomTabNavigator(); //empty () because no args
const Drawer = createDrawerNavigator();

const Base_Url = "https://swapi.tech/api/";


export default function App() {
  return (
    // tab or drawer navigation
    <NavigationContainer>
      {/* identifies platform viewport */}
      {Platform.OS === "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Spaceships" component={Spaceships} />
          <Tab.Screen name="Planets" component={Planets} />
        </Tab.Navigator>
      )}{" "}
      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Spaceships" component={Spaceships} />
          <Drawer.Screen name="Planets" component={Planets} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
