import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView,TextInput, } from 'react-native';

const WomensJacket = () => {
  return (
    <View style={styles.container}>
         <View style={styles.StarsTop}>   
              
                  <Image style={styles.StarImg2}  source={require("../assets/R.png")} /> 
                  <Image style={styles.StarImg1}  source={require("../assets/Cart.jpg")} />
            
        </View>
        <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Womens Jacket</Text>
          </View>
        <View style={styles.InputBox}>
        <TextInput
            placeholderTextColor="black"
            placeholder="Select Jacket"
            onChangeText={(email) => {
              console.log(email);
              this.setState({ email: email })
            }}
            style={styles.input}
          />
       
        </View>
       
         
          <View style={styles.Image_Text}>
              <View>
                  <Image style={styles.Image} source={require("../assets/794287.jpg")} />
                  
              </View>
              <View style={styles.starText_PR}>
                  <Text style={styles.JacketText}>Bike Jacket Softshell warm</Text>
                  <View  style={styles.Stars}>
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/L3.png")} /> 
                </View>
                <Text style={styles.JacketPrice}>$99</Text>
              </View>
          </View>
          
          <View style={styles.Image_Text}>
              <View>
                  <Image style={styles.Image} source={require("../assets/letterman_for_women__39040_std.jpg")} />
                  
              </View>
              <View style={styles.starText_PR}>
                  <Text style={styles.JacketText}>Pink Hoody Merino</Text>
                  <View  style={styles.Stars}>
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/L3.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/L3.png")} /> 
                </View>
                <Text style={styles.JacketPrice}>$99</Text>
              </View>
          </View>
          <View style={styles.Image_Text}>
              <View>
                  <Image style={styles.Image} source={require("../assets/letterman_jacket_for_women__83407_std.jpg")} />
                  
              </View>
              <View style={styles.starText_PR}>
                  <Text style={styles.JacketText}>Hooded Jacket Classic</Text>
                  <View  style={styles.Stars}>
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                </View>
                <Text style={styles.JacketPrice}>$99</Text>
              </View>
          </View>
          <View style={styles.Image_Text}>
              <View>
                  <Image style={styles.Image} source={require("../assets/P00751336.jpg")} />
                  
              </View>
              <View style={styles.starText_PR}>
                  <Text style={styles.JacketText}>Red Women Jacket</Text>
                  <View  style={styles.Stars}>
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/star_filled.png")} /> 
                  <Image style={styles.StarImg}  source={require("../assets/L3.png")} /> 
                </View>
                 <Text style={styles.JacketPrice}>$99</Text>
              </View>
          </View>
      </View>
  )
}

export default WomensJacket;

const styles = StyleSheet.create({
    container:{
      justifycontent:"center",
      backgroundColor:"#dcdcdc",
      borderRadius:20,
      marginHorizontal:15,
      marginVertical:40
    },
    Image: {
      width:130,
      height:135,
      marginHorizontal:10,
      marginVertical:15,
      backgroundColor:"white",
     borderRadius:20
     // alignSelf: "flex-start",
   
  },
  Heading: {
      marginHorizontal: 10,
      marginTop:2,
      marginBottom:20,
  },
  HeadingText:{
      fontSize:20,
      fontWeight:"bold",
      marginHorizontal:20,
  },
  Image_Text:{
    flexDirection:"row",
  },
  StarImg:{
   width:20,
   height:20,
  },
  StarImg2:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:"white",
    alignSelf:"center"
   },
  StarImg1:{
    width:40,
    height:40,
    borderRadius:20,
   },
  Stars:{
    flexDirection:"row",
    marginVertical:5,
  },
  starText_PR:{
    justifyContent:"center",
    marginHorizontal:5,
    marginVertical:8,
  },
  JacketText:{
    fontSize:16,
    fontWeight:"bold",
  },
  JacketPrice:{
    fontSize:20,
    fontWeight:"bold",
    color:"blue",
    marginVertical:1,
  },
  StarsTop:{ 
    marginHorizontal:20,
    marginTop:10,
    marginBottom:3,
    flexDirection:"row",
    justifyContent: 'space-between',
  },
  StarsTopArrow:{
    marginTop:10,
    marginHorizontal:10,
    alignSelf: "flex-start",
    alignItems:"flex-start",
    borderRadius:20
  },
  topbar_Text:{
    flexDirection:"row",
  },
  input: {
    //borderWidth:1,
    //borderBottom,
    textShadowColor:"",
    fontSize: 15,
    marginVertical:10,
    marginHorizontal:10,
  },
  InputBox: {
    alignSelf:"center",
    width:350,
    borderWidth:0.5,
    backgroundColor:"white",
    fontSize: 20,
    marginVertical:1,
    marginHorizontal:20,
    borderRadius:10,

  },
  });