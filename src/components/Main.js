import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, TouchableHighlight, Animated } from 'react-native';

import { GIPHY_API, GIPHY_KEY } from '../consts'

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      activeImageIndex: undefined,
      anim: new Animated.Value(0),
    }
  }

  componentDidMount () {
    fetch(`${GIPHY_API}/search?q=gopnik&api_key=${GIPHY_KEY}`)
      .then(res => res.json())
      .then(({ data }) => this.setState({ pics: data }));

    Animated.loop(Animated.timing(
      this.state.anim,
      {
        toValue: 1,
        duration: 500,
      }
    )).start()
  }

  setRandomImage () {
    const { pics } = this.state;
    this.setState({
      activeImageIndex: Math.floor(Math.random() * pics.length)
    })
  }

  render () {
    const { pics, activeImageIndex } = this.state;
    const image = pics && pics[activeImageIndex] && pics[activeImageIndex].images.original
    const { navigation } = this.props
    const buttonText = 'Weee';
    return (
      <View>
        <Text>Hello, Ethworks! :)</Text>
        <TouchableOpacity
          onPress={() => this.setRandomImage()}
        >
          {image && (
            <Image style={styles.image} source={{ uri: image.url }}/>
          )}
          <Text>Click</Text>
        </TouchableOpacity>
        <TouchableHighlight
          onPress={() => navigation.navigate('NotHome')}
        >
          <Text>Show me the way!</Text>
        </TouchableHighlight>
        <Animated.Text style={{
          opacity: this.state.anim
        }}>Animated</Animated.Text>
        {!!buttonText && (
          <TouchableHighlight>
            <Text>{buttonText}</Text>
          </TouchableHighlight>)}
      </View>
    )
  }
}


const styles = {
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },

};
