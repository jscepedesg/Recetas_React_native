/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import { observable } from "mobx";
import { observer, inject} from "mobx-react";
import TestStore from "../Mobx/TestStore";

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
@inject("test","recipes")
@observer
export default class ExploreScreen extends Component
{
    static navigationOptions = {
        title: "Explore"
    };
   timer = null;
  constructor(props)
  {
    super(props);  

    console.log("Constructor");
    const { test } = this.props;
    test.start();
  }
  componentDidMount = () => 
  {
    const {recipes} = this.props;
    recipes.getRecipes();
    recipes.getRecommended(); 
  }
  componentDidUpdate = (prevProps, prevState) => {
    const { test } = this.props;
    if(test.counter >= 5)
    {
      test.stop();
    }
  };
  keyExtractor = (item, index) => item.id;
  renderList = () =>{
    const {recipes} = this.props;
    return(
      <FlatList
      ListHeaderComponent={this.renderRecommended}
      keyExtractor={this.keyExtractor}
      data={recipes.recipesSource}
      renderItem={({ item})=> <RecipeRow data={item}/>}
      />
    );
  };
  renderRecommended = () => 
  {
    const {recipes} = this.props;
    return <RecommendationBox data= {recipes.recommendedSource}/>
  };
  render()
  {
    console.log("Render");
    const {test} = this.props;
    return(
      <View style={styles.screen}>
        <NavBar leftButton={false} title={test.doubleValue} rightButton={false}/>
        <View style={{flex: 1}}>{this.renderList()}</View>
        <TabBar selected="explore" />
        {/* content goes here*/}
      </View>
    );
  }
}