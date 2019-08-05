import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    marginLeft: Metrics.baseSpace,
    justifyContent: "center",
    height: 128,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Metrics.borderRadius
  },
  recipeImage: {
    width: 208,
    height: 128
  }
});