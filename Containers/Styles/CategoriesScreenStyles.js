import {StyleSheet} from "react-native";
import {Metrics, AppStyles, Colors, Fonts} from "../../Themes";

export default StyleSheet.create(
    {
      screen: {
          flex: 1,
          backgroundColor: Colors.mainBackground
      },
      container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: Colors.mainBackground
      },
      navBar: {
        marginTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        alignItems: "center",
        justifyContent: "center"
      },
      title: {
        ...Fonts.family.recipeNameCard,
        fontWeight: "bold"
      }
    });