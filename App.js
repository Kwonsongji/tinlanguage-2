import { Text, View, Button } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function App() {
  const tw = useTailwind();
  return (
    <View style={tw('pt-12 flex-1 items-center justify-center')}>
      <Text>Hello World!</Text>
      <Button title="click on me">    </Button> 
    </View>
    //Au lieu de div, on a des views ( compilent le relevant code pour un andoid/ un ios/le web)  pour car on veut build sur des natives devices.
  );
}


