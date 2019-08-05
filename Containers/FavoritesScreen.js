import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';


import NavBar from "../Components/NavBar";
import TabBar from "../Components/TabBar";
import RecipeRow from "../Components/RecipeRow";
import styles from "./Styles/ExploreScreenStyles";
import RecommendationBox from "../Components/RecommendationBox";

const dataList =[
  {
    "id": "76459",
    "name": "Escovitch Fish",
    "categoryId": "1",
    "categoryName": "Fish",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    "description": 
    "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
    "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    "id": "2222",
    "name": "Escovitch Fish",
    "categoryId": "1",
    "categoryName": "Fish",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    "description": 
    "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
    "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    "id": "3333",
    "name": "Escovitch Fish",
    "categoryId": "1",
    "categoryName": "Fish",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    "description": 
    "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
    "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
  },
  {
    "id": "4444",
    "name": "Escovitch Fish",
    "categoryId": "1",
    "categoryName": "Fish",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    "description": 
    "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
    "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
  }
];
const recipeDate = {
    "id": "52944",
    "name": "Escovitch Fish",
    "categoryId": "1",
    "categoryName": "Fish",
    "duration": 11,
    "complexity": "Hard",
    "people": 3,
    "recommended": true,
    "favorite": true,
    "ingredients": "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
    "description": 
    "Rinse fish, rub with lemon or lime, seasoned with salt and pepper or use your favorite",
    "photo": "http://www.themealdb.com/images/media/meals/1520084413.jpg"
}
export default class FavoritesScreen extends Component
{
    static navigationOptions = {
        title: "Explore"
    };
  constructor(props)
  {
    super(props);  

    console.log("Constructor");
  }
  keyExtractor = (item, index) => item.id;
  renderList = () =>{
    return(
      <FlatList
      keyExtractor={this.keyExtractor}
      data={dataList}
      renderItem={({ item})=> <RecipeRow data={item}/>}
      />
    );
  };
  render()
  {
    console.log("Render");
    return(
      <View style={styles.screen}>
        <NavBar leftButton={false} title="Favorites" rightButton={false}/>
        <View style={{flex: 1}}>{this.renderList()}</View>
        <TabBar selected="favorites" />
        {/* content goes here*/}
      </View>
    );
  }
}
