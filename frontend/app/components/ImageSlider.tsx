import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage, ParallaxImageProperties} from 'react-native-snap-carousel'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const sliderImages =[
//     require('../../assets/images/slider/gym1.jpg'),
//     require('../../assets/images/slider/gym2.jpg'),
//     require('../../assets/images/slider/gym3.jpg'),
//     require('../../assets/images/slider/gym4.jpg'),
//     require('../../assets/images/slider/gym5.jpg'),
//     require('../../assets/images/slider/gym6.jpg'),
//     require('../../assets/images/slider/gym7.jpg'),
// ]
const ImageSlider = ({item,index}:{item:any, index:number}) => {
    return (
        <View>
        <Text>ImageSlider</Text>
        </View>
    )
//   return (
//     <Carousel
//         data={sliderImages}
//         loop={true}
//         autoplay={true} 
//         hasParallaxImages={true}
//         sliderWidth={wp(100)}
//         firstItem={1}
//         autoplayInterval={4000}
//         itemWidth={wp(100)-70}
//         slideStyle={{display:'flex', alignItems:'center'}}
//         renderItem={ItemCard}
//     />
//   )
// }

// const ItemCard = ({props}:any) => {
//   return (
//     <View style={{width:wp(100)-70, height:hp(25)}}>
//       <ParallaxImage
//         source={props.item}
//         containerStyle={{flex: 1, borderRadius: 30}}
//         style={{resizeMode:'contain'}}
//         parallaxFactor={1}
//         showSpinner={true}
//         {...props.parallaxProps}
//       />
//     </View>
//   )
}

export default ImageSlider

const styles = StyleSheet.create({})