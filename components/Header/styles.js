import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 20,
  },
});
export default styles;
