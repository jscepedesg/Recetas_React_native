import {StyleSheet} from "react-native";
import {Metrics, Colors, Fonts} from "../../Themes/";

const BARHEIGHT = 56;

export default StyleSheet.create(
    {
      navBar:{
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: "center",
        justifyContent: "center"
      },
      title:{
          ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
      }
    });