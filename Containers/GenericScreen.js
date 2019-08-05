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
} from 'react-native';

import styles from "./Styles/GenericScreenStyles";

import NavBar from "../Components/NavBar";



export default class GenericScreen extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      var1: 5,
      favorite: false
    }

    console.log("Constructor");
  }
  //Estados de un componente
/*
  componentWillMount()
  {
    console.log("componentWillMount");
  }
  componentDidMount()
  {
    console.log("componentDidMount");

    setTimeout(() => {
      console.log("Changing state");
      this.setState(
        {
          var1: 2
        }
      );
    },500);
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate()
  {
    console.log("componentWillUpdate");
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate");
  }

  componentWillUnmount()
  {
    console.log("componentWillUnmount");
  }
  */

  pressFavorite = () => {
    const { favorite } = this.state;
    this.setState({
      favorite: !favorite
    });
  }
  render()
  {
    console.log("Render");
    const { favorite } = this.state;
    return(
      <View>
        <NavBar 
        leftButton={true} 
        title="Titulo" 
        style = {styles.navBar} 
        rightButton={true}
        onPressFavorite={this.pressFavorite} 
        favorite={favorite}/>
        {/* content goes here*/}
      </View>
    );
  }
}


