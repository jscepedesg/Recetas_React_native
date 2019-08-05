import {createStackNavigator, 
        createAppContainer, 
        createBottomTabNavigator
    } from "react-navigation";
import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import RecipeDetailScreen from "../Containers/RecipeDetailScreen";
import FavoritesScreen from "../Containers/FavoritesScreen";
import CategoryScreen from "../Containers/CategoryScreen";

const TabNav = createBottomTabNavigator(
    {
        Explore: { screen: ExploreScreen},
        Categories: { screen: CategoriesScreen},
        Favorites: { screen: FavoritesScreen}
    },
    {
        headerMode: "none",
        initialRouteName: "Explore",
        defaultNavigationOptions: { tabBarVisible: false}
    }
);
const AppNavigator = createStackNavigator(
    {
        Home: { screen: TabNav},
        Details: { screen: RecipeDetailScreen },
        Category: { screen: CategoryScreen}
    },
    {
        headerMode: "none"
    }
);

const App1 = createAppContainer(AppNavigator);
export default App1;