import { Text, View } from 'react-native';
import { useColorScheme } from "nativewind";

import { styled, withExpoSnack } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const Home2 = ({ navigation }) => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText onPress={()=> navigation.navigate('About')} className="bg-[#ECE551]">Hosmeaa</StyledText>
    </StyledView>
  );
}

export default Home2