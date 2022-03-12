import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors.styles";
import { Fonts } from "../../styles/fonts.styles";

export const styles = StyleSheet.create({
    page: {
        height: "100%",
        backgroundColor: Colors.yellow,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        ...Fonts.body,
    },
});
