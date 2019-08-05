import React from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

import CustomIcon from "./CustomIcon";

import styles from "./Styles/NavBarStyles";
import { withNavigation } from "react-navigation";


class NavBar extends React.Component
{
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }
    pressFavorite = () => 
    {
        const {onPressFavorite} = this.props;
        if(typeof onPressFavorite === 'function')
        {
            onPressFavorite();
        }
    }
    backButton = () => 
    {
        const { leftButton, transparent } = this.props;
        if(leftButton)
        {
            return(
                <TouchableOpacity onPress={this.goBack}>
                    <CustomIcon name = "angle-left" style={[styles.favIcon, transparent ? styles.alternate: null]}/>
                </TouchableOpacity>
            );
        }
    }

    rightButton = () => 
    {
        const { rightButton, favorite, transparent } = this.props;
        if(rightButton)
        {
            if(favorite)
            {
                return(
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <CustomIcon name="heart" style = {styles.favorite}/>
                    </TouchableWithoutFeedback>
                );
            }
            else
            {
                return(
                    <TouchableWithoutFeedback onPress={this.pressFavorite}>
                        <CustomIcon name="heart" style = {[styles.favorite, transparent ? styles.alternate: null]}/>
                    </TouchableWithoutFeedback>
                )
            }
        }
    }
    render()
    {
        const {title, transparent} = this.props;
        return(
            <View {...this.props} style = {[styles.navBar, transparent ? styles.transparent: null]}>
                <View style= {styles.leftContainer}>
                    {this.backButton()}
                </View>
                <View style = {styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style = {styles.leftContainer}>
                    {this.rightButton()}
                </View>
            </View>
        );
    }
}

export default withNavigation(NavBar);