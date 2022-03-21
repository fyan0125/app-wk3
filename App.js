import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} >
        
        <Navigation />
      </SafeAreaView> 
    </SafeAreaProvider>
  );
}
//<StatusBar hidden={true}/>
export default App;