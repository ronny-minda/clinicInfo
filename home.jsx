import { Text, View } from 'react-native';
import { useColorScheme } from "nativewind";

import { styled, withExpoSnack } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const Home = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <StyledText onPress={()=> navigation.navigate('About')} className="bg-[#F00]">Hosmeaa</StyledText>
    </View>
  );
}

export default Home