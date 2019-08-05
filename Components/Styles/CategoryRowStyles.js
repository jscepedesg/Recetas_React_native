import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";

export default StyleSheet.create(
    {
        categoryRow: {
            height: 56,
            backgroundColor: Colors.darkWhite,
            marginHorizontal: Metrics.baseSpace,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: Metrics.baseSpace
        },
        categoryText:{
            ...Fonts.style.h3
        }
    }
);