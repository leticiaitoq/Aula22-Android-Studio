import { StyleSheet }  from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    marginTop: 30,
  },
  // logo:{
  //   width: 120,
  //   height: 140,
  // },
  titulo:{
    marginTop: 25,
    fontSize: 32,
    fontWeight: 700,
    color: "hotpink",
  },
  subtitulo:{
    marginTop: 35,
  },
  inputText:{
    fontSize: 12,
    fontWeight: 500,
    width: "100%",
    textAlign: "left",
    padding: 5,
  },
  input :{
    width: "100%",
    borderRadius: 10,
    backgroundColor: "gray",
    marginBottom: 25,
  },
      button:{
      backgroundColor: "green",
      width: "80%",
      height: 52,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      marginTop: 30,
      flexDirection: "row"
    },
    buttonText:{
      color: "#fff",
      fontSize: 18,
      fontWeight: 600,
      marginLeft: 25,
    }
});

export default styles;