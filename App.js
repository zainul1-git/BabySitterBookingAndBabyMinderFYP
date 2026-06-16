import React, { useEffect } from 'react';


import AppNavigator from './navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
const App = () => {

  return(
        <NavigationContainer>
      <AppNavigator/>
      {/* <ParentBottomTabs /> */}
    </NavigationContainer>
  

   
  )
  

 

};

export default App;

