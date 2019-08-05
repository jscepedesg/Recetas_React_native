import {StyleSheet} from "react-native";
import {Metrics, Colors, Fonts} from "../../Themes/";

const BARHEIGHT = 56;

export default StyleSheet.create(
    {
      navBar:{
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      title:{
          ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
      },
      favIcon:
      {
        justifyContent: "center",
        alignItems: "center",
        fontSize: Metrics.icons.tab*1.5
      },
      titleWrapper:
      {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      rigtContainer:
      {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
      },
      leftContainer:
      {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
      },
      favorite: 
      {
        color: Colors.darkOrange,
        justifyContent: "center",
        alignItems: "center",
        fontSize: Metrics.icons.tab
      },
      transparent: 
      {
        position : "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        zIndex: 10
      },
      alternate:
      {
        color: Colors.whiteFull
      }
    });