import { Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Style from "./Style";
import { getFontFamily } from "../../assets/fonts/helper";

const Search = () => {
  return (
    <View style={Style.searchContainer}>
      <FontAwesome name="search" size={22} color={"#25C0FF"} />
      <TextInput
        placeholder="Search"
        style={[Style.search, { fontFamily: getFontFamily("400") }]}
      />
    </View>
  );
};

export default Search;
