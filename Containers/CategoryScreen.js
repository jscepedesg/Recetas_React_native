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
import { observer, inject} from "mobx-react";
import RecipeStore from "../Mobx/RecipeStore";

@observer
export default class CategoryScreen extends Component
{
    static navigationOptions = {
        title: "Explore"
    };
  constructor(props)
  {
    super(props);  
    this.recipeStore = new RecipeStore();
    console.log("Constructor");
  }
  componentDidMount = () => {
    const { navigation} = this.props;
    const category = navigation.getParam("category",{});
    this.recipeStore.getRecipes(category.id);
  }
  keyExtractor = (item, index) => item.id;
  renderList = () =>{
    return(
      <FlatList
      keyExtractor={this.keyExtractor}
      data={this.recipeStore.recipesSource}
      renderItem={({ item})=> <RecipeRow data={item}/>}
      />
    );
  };
  render()
  {
    console.log("Render");
    const { navigation } = this.props;
    const category = navigation.getParam("category", {});
    return(
      <View style={styles.screen}>
        <NavBar leftButton={true} title={category.name} rightButton={false}/>
        <View style={{flex: 1}}>{this.renderList()}</View>
        {/* content goes here*/}
      </View>
    );
  }
}
