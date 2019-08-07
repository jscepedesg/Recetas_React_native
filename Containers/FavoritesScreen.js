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
@inject("recipes")
@observer
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
  componentDidMount = () => {
    const {recipes } = this.props;
    recipes.getFavorites();
  };
  keyExtractor = (item, index) => item.id;
  renderList = () =>{
    const {recipes } = this.props;
    return(
      <FlatList
      keyExtractor={this.keyExtractor}
      data={recipes.favoritesSource}
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
