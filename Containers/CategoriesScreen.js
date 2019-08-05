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

const dataList =[
    {
      "id": "1",
      "name": "Fish"
    },
    {
      "id": "2",
      "name": "Meat"
    },
    {
      "id": "3",
      "name": "Breakfast"
    }
  ];


export default class CategoriesScreen extends Component
{
  constructor(props)
  {
    super(props);
  }
  keyExtractor = (item, index) => item.id;
  renderRow = ({item}) =>
  {
    return <CategoryRow data ={item}/>
  };
  renderList = () =>{
    return(
      <FlatList
      contentContainerStyle={styles.listContent}
      keyExtractor={this.keyExtractor}
      data={dataList}
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