
import React, { Component } from 'react';
import { Button, View, Text,Title } from 'react-native';


class AnycolorButton extends Component {
  displayAlert = ()=> {
alert("This is an alert text");
  }
  render(){
    return(
      <Button color={this.props.color} title="Click Me" onPress = {this.displayAlert}/> 
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnycolorButton color="purple"/>
      </View>
    );
}
}
