import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import {Asset} from 'expo-asset';
import {AppLoading} from 'expo';
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
const {width, height} = Dimensions.get('window');

export default class Login extends Component {

  constructor() {
    super()
    this.state={
      isReady: false
    }
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/logo.png')
    ]);

    
    await Promise.all([...imageAssets]);
  }
  render() {

    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
  return (
    <View style={styles.container}>
     
      <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000', justifyContent:'flex-end'}}>
          <Image source={require('./assets/logo.png')} />
      <View style={{height: height/2, backgroundColor: '#ffff', justifyContent:'center', alignItems:'center' }}> 
           
      <TextInput style = {styles.TextInput}  placeholder= {"example@gmail.com"} 
          onChangeText = {(email) => this.setState({email})}
          value = {this.state.email}
         /> 
       <TextInput style = {styles.TextInput}  placeholder= {"Password"} 
            secureTextEntry
            maxLength = {6}
            onChangeText = {(pass)=> this.setState({pass})}
            value = {this.state.pass}
           keyboardType = 'numeric'
           
         /> 
          <TouchableOpacity style= {styles.G} activeOpacity ={0.5} >
            
         
             
             
               <Text style={{color:'#e2ed07'}}>LOGIN</Text>
 
           
             
            
            </TouchableOpacity>
            <TouchableOpacity style= {styles.G} activeOpacity ={0.5} onPress={()=>{this.props.navigation.navigate("Signup");}} >
            
         
             
             
            <Text style={{color:'#e2ed07'}}>SIGN UP</Text>

        
          
         
         </TouchableOpacity>
           
       </View>
          
      </View>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  G: {
    
    alignItems: 'center',
    backgroundColor: '#000',
      borderWidth: 3,
    borderColor: '#ccc',
    height: 40,
    borderRadius: 10 ,
   margin: 5,
   width: 160,
   paddingTop:5
 },
 TextInput: {
  width: 270,
   marginTop: 10,
   borderRadius: 15,
   borderWidth: 2,
   marginBottom: 10,
   justifyContent: "center",
   alignContent: "center",
   padding: 10,
   borderColor:"#ffffa6",
   
   },

 
});
