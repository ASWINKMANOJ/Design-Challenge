import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const Icons: any = {
  index: (props: any) => <AntDesign name="home" size={24} {...props} />,
  discover: (props: any) => <Feather name="compass" size={24} {...props} />,
  favorite: (props: any) => (
    <MaterialIcons name="favorite-border" size={24} {...props} />
  ),
  options: (props: any) => <Feather name="list" size={24} {...props} />,
};
