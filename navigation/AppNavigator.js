// src/navigation/AppNavigator.js
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SplashScreen from '../Screens/SplashScreen';
// import ChooseRoleScreen from '../Screens/ChooseRoleScreen';

import SplashScreen from '../screens/SplashScreen'
import ChooseRoleScreen from '../screens/ChooseRoleScreen'
import LoginScreen from '../screens/LoginScreen'

import SignUpScreen from '../screens/SignUpScreen'
import ParentMainScreen from '../screens/ParentMainScreen'
import ParentProfileScreen from '../screens/ParentProfileScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import SearchBabySitterScreen from '../screens/SearchBabySitterScreen'
import BabySitterProfileScreen from '../screens/BabySitterProfileScreen';
 import MyJobsScreen from '../screens/MyJobsScreen';
  import CryAlertScreen from '../screens/CryAlertScreen';
  import MonitorChildScreen from '../screens/MonitorChildScreen';
 import SetChildProfileScreen from '../screens/SetChildProfileScreen';
 import ViewChildProfileScreen from '../screens/ViewChildProfileScreen'
  import EditChildProfileScreen from '../screens/EditChildProfileScreen'
  import JobTimerScreen from '../screens/JobTimerScreen'
  import RatingScreen from '../screens/RatingScreen'
  import BabySitterDashBoardScreen from '../BabySitterScreens/BabySitterDashboard'
  import JobDetailsScreen from '../BabySitterScreens/JobDetailsScreen'
  import JobRequestsScreen from '../BabySitterScreens/JobRequestsScreen'
    import BabysitterViewChildProfileScreen from '../BabySitterScreens/BabysitterViewChildProfileScreen'
  import JobTimerScreenBabySitter from '../BabySitterScreens/JobTimerScreenBabySitter'
    import ProfileScreen from '../BabySitterScreens/ProfileScreen'
   import EditBabySitterProfileScreen from '../BabySitterScreens/EditBabySitterProfileScreen'
   import MyJobsScreenBabySitter from '../BabySitterScreens/MyJobsScreenBabySitter'
   import UpcomingJobDetailsScreen from '../BabySitterScreens/UpcomingJobDetailsScreen'
     import JobHistoryDetailsScreen from '../BabySitterScreens/JobHistoryDetailsScreen'
     import SetAvailabilityScreen from '../BabySitterScreens/SetAvailabilityScreen'
     import CryDetectionBaby from '../BabySitterScreens/CryDetectionBaby'



// import BabySitterHome from '../screens/BabysitterHome'
// import HomeScreen from '../screens/HomeScreen'; // optional for now

//  import SearchBabysitterScreen from '../screens/SearchBabySitterScreen';


// import MonitorChildScreen from '../screens/MonitorChildScreen';


 
// import MoreScreen from '../screens/MoreScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
          
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash"> 
      {/* <Stack.Navigator initialRouteName="parentmain">   */}
    {/* //  <Stack.Navigator initialRouteName="searchbabysitter">   */}
    {/* // <Stack.Navigator initialRouteName="babysitterprofile"> */}
     
        
         {/* <Stack.Navigator initialRouteName="MyJobsScreen">    */}
     
      {/* //  <Stack.Navigator initialRouteName="ParentProfileScreen">   */}
             {/* <Stack.Navigator initialRouteName="editparentprofile">       */}
   
             
     
    
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          
              <Stack.Screen name="SignUp" component={SignUpScreen} />
               <Stack.Screen name="parentmain" component={ParentMainScreen} />
               <Stack.Screen name="ParentProfileScreen" component={ParentProfileScreen} />
                 <Stack.Screen name="editparentprofile" component={EditProfileScreen} />
                 <Stack.Screen name="searchbabysitter" component={SearchBabySitterScreen}/> 
                  <Stack.Screen name="babysitterprofile" component={BabySitterProfileScreen} /> 
                  <Stack.Screen name="MyJobsScreen" component={MyJobsScreen} />
                  <Stack.Screen name="JobTimerScreen" component={JobTimerScreen} />
                  <Stack.Screen name="RatingScreen" component={RatingScreen} />
                
                   <Stack.Screen name="CryAlertScreen" component={CryAlertScreen} />
                   <Stack.Screen name="MonitorChildScreen" component={MonitorChildScreen} /> 
                    <Stack.Screen name="SetChildProfileScreen" component={SetChildProfileScreen} />
                    <Stack.Screen name="ViewChildScreen" component={ViewChildProfileScreen} />
                    <Stack.Screen name="editchildprofile" component={EditChildProfileScreen} />
                         <Stack.Screen name="BabySitterDashBoard" component={BabySitterDashBoardScreen} />
                         <Stack.Screen name="JobRequestsScreen" component={JobRequestsScreen} />
                         <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} />
                         <Stack.Screen name="BabysitterViewChildScreen" component={BabysitterViewChildProfileScreen} />
                        <Stack.Screen name="babysitterjobtimer" component={JobTimerScreenBabySitter}></Stack.Screen>
                         <Stack.Screen name="BabysitterProfileScreen" component={ProfileScreen}></Stack.Screen>
                         <Stack.Screen name="editbabysitterprofile" component={EditBabySitterProfileScreen}></Stack.Screen>
                 
                       <Stack.Screen name="MyJobsScreenBabySitter" component={MyJobsScreenBabySitter}></Stack.Screen>
                        <Stack.Screen name="upcomingjobs" component={UpcomingJobDetailsScreen}></Stack.Screen>
                         <Stack.Screen name="jobhistory" component={JobHistoryDetailsScreen}></Stack.Screen>   
                         <Stack.Screen name="setavailabilityscreen" component={SetAvailabilityScreen}></Stack.Screen>   
                         <Stack.Screen
                        name="CryDetectionScreen"
                      component={CryDetectionBaby}
                        />

                  {/* <Stack.Screen name="babysitterhome" component={BabySitterHome} />  */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
         
{/* // <Stack.Screen name="MyJobsScreen" component={MyJobsScreen} />
// <Stack.Screen name="ViewChildScreen" component={ViewChildScreen} />
// <Stack.Screen name="MonitorChildScreen" component={MonitorChildScreen} />
// <Stack.Screen name="SetChildProfileScreen" component={SetChildProfileScreen} />
// <Stack.Screen name="CryAlertScreen" component={CryAlertScreen} />

// <Stack.Screen name="MoreScreen" component={MoreScreen} />  */}
      </Stack.Navigator>
  
  );
};

export default AppNavigator;



// <Stack.Screen name="MonitorChildScreen" component={MonitorChildScreen} />
// <Stack.Screen name="SearchBabysitterScreen" component={SearchBabysitterScreen} />
// <Stack.Screen name="ParentProfileScreen" component={ParentProfileScreen} />
// <Stack.Screen name="AllFeaturesScreen" component={AllFeaturesScreen} />