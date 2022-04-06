import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import Color from './constants/color';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
    return (<Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: Color.accent700},
            headerTintColor: Color.primary600,
            headerTitleAlign: "center",
            sceneContainerStyle: {backgroundColor: Color.primary700},
            drawerContentStyle: {backgroundColor: Color.primary700},
            drawerActiveTintColor: Color.primary600,
            drawerActiveBackgroundColor: Color.accent700,
            drawerInactiveTintColor: Color.accent600,
          }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title: "Categories",
                                                                            drawerIcon: ({size, color}) => <Ionicons name="list" size={size} color={color}/>}}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen}  options={{title: "Favorites",
                                                                            drawerIcon: ({size, color}) => <Ionicons name="star" size={size} color={color}/>}}/>
    </Drawer.Navigator>)
}


export default function App() {

  return (
    <>
      <StatusBar style="inverted"/>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle: {backgroundColor: Color.accent700},
              headerTintColor: Color.primary600,
              headerTitleAlign: "center",
              contentStyle: {backgroundColor: Color.primary700}
            }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
