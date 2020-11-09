import React, { useState, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, 
  TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Icon from 'react-native-vector-icons/MaterialIcons';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default function Conteudo(route) {
    return(
        
        const carouselRef = useRef(null);
      
        const [lista, setLista] = useState([
          {
          "adult":false,
          "backdrop_path":"/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
          "belongs_to_collection":null,
          "budget":63000000,
          "genres":[{"id":18,"name":"Drama"}],
          "homepage":"http://www.foxmovies.com/movies/fight-club",
          "id":550,
          "imdb_id":"tt0137523",
          "original_language":"en",
          "original_title":"Fight Club",
          "overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
          "popularity":38.023,
          "poster_path":"/9dlcOgehxDK4QaC2QDfqwQFbk5C.jpg",
          "production_companies":[
            
            {"id":508,
          "logo_path":"/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
          "name":"Regency Enterprises",
          "origin_country":"US"},
          
          {"id":711,
          "logo_path":"/tEiIH5QesdheJmDAqQwvtN60727.png",
          "name":"Fox 2000 Pictures",
          "origin_country":"US"},
          
          {"id":20555,
          "logo_path":"/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
          "name":"Taurus Film",
          "origin_country":"DE"},
          
          {"id":54051,
          "logo_path":null,
          "name":"Atman Entertainment",
          "origin_country":""},
          
          {"id":54052,
          "logo_path":null,
          "name":"Knickerbocker Films",
          "origin_country":"US"},
          
          {"id":25,
          "logo_path":"/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
          "name":"20th Century Fox",
          "origin_country":"US"},
          
          {"id":4700,
          "logo_path":"/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
          "name":"The Linson Company",
          "origin_country":""}],
          
          "production_countries":
          [{"iso_3166_1":"DE","name":"Germany"},
          {"iso_3166_1":"US",
          "name":"United States of America"}],
          "release_date":"1999-10-15",
          "revenue":100853753,
          "runtime":139,
          "spoken_languages":[{"iso_639_1":"en","name":"English"}],
          
          "status":"Released",
          "tagline":"Mischief. Mayhem. Soap.",
          "title":"Fight Club",
          "video":false,"vote_average":8.4,"vote_count":20379}
      
        ]);

        const [background, setBackground] = useState(lista[0].img);
        const [activeIndex, setActiveIndex] = useState(0);
      
        const _renderItem = ({ item, index }) => {
          return(
            <View>
              <TouchableOpacity>
                <Image
                source={{uri: }}
                style={styles.carouselImg}
                />
                <Text style={styles.carouselText}>{item.title}</Text>
                <Icon 
                name="play-circle-outline" 
                size={30} color="#FFF" 
                style={styles.carouselIcon} 
                />
              </TouchableOpacity>
            </View>
          );
        };
      
       return (
         <ScrollView style={styles.container}>
           <View style={{flex:1, height: screenHeight}}>
              <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
                <ImageBackground
                source={{ uri: background}}
                style={styles.imgBg}
                blurRadius={8}
                >
      
                  <View style={styles.viewSearch}>
                    <TextInput
                      style={styles.input}
                      placeholder="Procurando algo?"
                    />
                    <TouchableOpacity style={styles.icon}>
                      <Icon name="search" color="#000" size={25} />
                    </TouchableOpacity>
                  </View>
      
                  <Text 
                  style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
                  marginLeft: 10, marginVertical: 10, }}
                  >
                    Acabou de chegar
                  </Text>
      
                  <View style={styles.slideView}>
                    <Carousel
                    style={styles.carousel}
                    ref={carouselRef}
                    data={lista}
                    renderItem={_renderItem}
                    sliderWidth={screenWidth}
                    itemWidth={200}
                    inactiveSlideOpacity={0.5}
                    onSnapToItem={ (index) => {
                      setBackground(lista[index].img);
                      setActiveIndex(index);
                    }}
                    />
                  </View>
      
                  <View style={styles.moreInfo}>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                      <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
                    </View>
                    <TouchableOpacity 
                    style={{ marginRight: 15, marginTop: 10 }} 
                    onPress={() => alert('CLICOU')}
                    >
                      <Icon 
                      name="queue" 
                      color="#131313" 
                      size={30} 
                      />
                    </TouchableOpacity>
                  </View>
      
                </ImageBackground>
              </View>
           </View>
         </ScrollView>
        );
      }
      
      const styles = StyleSheet.create({
        container:{
          flex:1,
        },
        imgBg:{
          flex:1,
          width: null,
          height: null,
          opacity: 1,
          justifyContent: "flex-start",
          backgroundColor: '#000'
        },
        viewSearch:{
          marginTop: 20,
          backgroundColor: '#FFF',
          elevation: 10,
          borderRadius: 5,
          marginVertical: 10,
          width: '95%',
          flexDirection: 'row',
          alignSelf: 'center'
        },
        input:{
          width: '90%',
          padding: 13,
          paddingLeft: 20,
          fontSize: 17,
        },
        icon:{
          position: 'absolute',
          right: 20,
          top: 15,
        },
        slideView:{
          width: '100%',
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        },
        carousel:{
          flex:1,
          overflow: 'visible'
        },
        carouselImg:{
          alignSelf: 'center',
          width: 200,
          height: 300,
          borderRadius: 12,
          backgroundColor: 'rgba(0,0,0,0.5)'
        },
        carouselText:{
          padding: 15,
          color: '#FFF',
          position: 'absolute',
          bottom: 10,
          left: 2,
          fontWeight: 'bold'
        },
        carouselIcon:{
          position:'absolute',
          top: 15,
          right: 15,
        },
        moreInfo:{
          backgroundColor: '#FFF',
          width: screenWidth,
          height: screenHeight,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        },
        movieTitle:{
          paddingLeft: 15,
          fontSize: 22,
          fontWeight: 'bold',
          color: '#131313',
          marginBottom: 5,
        },
        movieDesc:{
          paddingLeft: 15,
          color: '#131313',
          fontSize: 14,
          fontWeight: 'bold'
        }
      });