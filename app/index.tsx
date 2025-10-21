import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View  className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-dark-200 " >Welcome !</Text>
        <Link href="/onboarding">Onboarding</Link>
        <Link href="/movie/avengers">Avengers: Age of Ultron</Link>
    </View
      >
  );
}
