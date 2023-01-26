import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import OnboardingOne from './app/screens/OnboardingOne';
import { Provider } from 'react-redux';

import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';
import { Store } from './app/redux/store';
import Home from './app/screens/Home';
import Toast from 'react-native-toast-message';
import MainHome from './app/screens/MainHome';
import Details from './app/screens/Details';
import BookHome from './app/screens/BookHome';
import StudentMainHome from './app/screens/StudentMainHome';
import StudentProfile from './app/screens/StudentProfile';
import colors from './app/config/colors';
import UploadImage from './app/screens/UploadImage';


const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen options={{ headerShown: false }} name='UploadImage' component={UploadImage}></Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name='SignUp' component={SignUp}></Stack.Screen>
    {/* <Stack.Screen options={{
      headerShown: true,
      title: 'My Profile',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTitleAlign: 'center',
      headerTintColor: colors.white,
    }} name='BookHome' component={StudentProfile}></Stack.Screen> */}
    <Stack.Screen options={{ headerShown: false }} name='OnboardingOne' component={OnboardingOne}></Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name='MainHome' component={Home}></Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name='Details' component={Details}></Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name='Home' component={MainHome}></Stack.Screen>
    <Stack.Screen options={{ headerShown: false }} name='SignIn' component={SignIn}></Stack.Screen>
  </Stack.Navigator>
);
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator />
        <Toast />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
