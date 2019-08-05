import { StyleSheet, Platform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";

export default StyleSheet.create(
    {
        container: {
            marginHorizontal: Metrics.baseSpace,
            marginBottom: Metrics.baseSpace,
            justifyContent: "flex-start",
            alignItems: "stretch",
            backgroundColor: Colors.darkWhite,
            overflow: "hidden",
            borderRadius: Metrics.borderRadius
        },
        imageContainer: {
            height: 128
        },
        infoContainer: {
            paddingVertical: Metrics.samllSpace,
            paddingHorizontal: Metrics.baseSpace,
            justifyContent: "center",
            alignItems: "stretch"
        },
        recipeImage: {
            flex: 1
        },
        properties: {
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
        },
        cell: {
            justifyContent: "flex-start",
            alignItems: "center",
            marginRight: Metrics.samllSpace,
            flexDirection: "row"
        },
        cellIcon: {
            fontSize: Metrics.icons.small,
            color: Colors.mediumGrey,
            marginRight: Metrics.samllSpace
        },
        cellText: {
            fontFamily: Fonts.family.base,
            fontSize: 13,
            fontWeight: "300",
            fontStyle: "normal",
            lineHeight: 24,
            letterSpacing: 0.5,
            color: Colors.mediumGrey
        }
    }
);