## BEGIN PROJECT
1) EXPO & TAILWIND CSS:
-expo init nomduProjet (initialise un pck.json)
-go to tailwind rn repo of https://github.com/vadimdemedes/tailwind-rn
then npm install tailwind-rn
-for run expo start 
-go to app.js 
import {useTailwind} from 'tailwind-rn';
const tailwind = useTailwind();
and change css 

2) INSTALL BLOCS DE CONSTRUCTION & FONDATION PARTAGÉES :
Les bibliothèques que nous avons installées jusqu'à présent sont les blocs de construction et les fondations partagées des navigateurs : 
go to react navigation, read docs
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack

3) CREATE REACTNATIVE COMPONENT :
-Pour utiliser le navigateur de pile natif, nous devons installer @react-navigation/native-stack:
npm install @react-navigation/native-stack
-touch StackNavigator.js 
-rfne ( snippet de react native fonctional export component ) 

4) CREATE STACK NAVIGATOR :
touch StackNAvigator.js and fill it ( cf navigator)
go to App.js and change by StackNavigator component
<View style={tw('pt-12 flex-1 items-center justify-center')}>
      <Text>Hello World!</Text>
        <Button className="" title="click me" > click me   </Button> 
</View>
