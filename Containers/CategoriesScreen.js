import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import styles from "./Styles/CategoriesScreenStyles";
import TabBar from "../Components/TabBar";
import NavBar from "../Components/NavBar";
import CategoryRow from "../Components/CategoryRow";
import { observer, inject} from "mobx-react";


@inject("recipes")
@observer
export default class CategoriesScreen extends Component
{
  constructor(props)
  {
    super(props);
  }
  componentDidMount = () => {
    const { recipes } = this.props;
    recipes.getCategories();
  }
  keyExtractor = (item, index) => item.id;
  renderRow = ({item}) =>
  {
    return <CategoryRow data ={item}/>
  };
  renderList = () =>{
    const { recipes } = this.props;
    return(
      <FlatList
      contentContainerStyle={styles.listContent}
      keyExtractor={this.keyExtractor}
      data={recipes.categoriesSource}
      renderItem={this.renderRow}
      />
    );
  };
  render()
  {
    return(
        <View style= {styles.screen}>
        <NavBar leftButton={false} title="Categories" rightButton={false}/>
        <View style={styles.container}>{this.renderList()}</View>
        <TabBar selected="categories" />
        {/* content goes here*/}
      </View>
    );
  }
}