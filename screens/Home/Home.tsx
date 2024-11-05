import { SafeAreaView, StatusBar, Text, View } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import Style from "./style";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import Ionicons from "@expo/vector-icons/FontAwesome";
import Search from "../../components/Search/Search";

const Home = () => {
  const handleOnSearch = (inputValue) => {
    console.log(inputValue);
  };

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, { padding: 24 }]}
    >
      <StatusBar />
      <Header title="hello I am header 1" styleType={1} />
      <Button
        title={"hello button"}
        onPress={() => console.log("button press")}
      />
      <Button
        isDisabled
        title={"hello button"}
        onPress={() => console.log("button press")}
      />

      <Tab title={"Highlight"} />
      <Tab title={"Highlight"} isInactive={true} />
      <View>
        <Text>Hello world</Text>
      </View>

      <Badge title="ashish" />
      <Search onSearch={handleOnSearch} />
    </SafeAreaView>
  );
};

export default Home;
