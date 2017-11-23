import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles
  
  return (
    <View style={container}>
      <Text style={text}>Redux Saga</Text>
      <TouchableHighlight style={button} onPress={() => props.fetchData()}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
      <MapView
        style={styles.map}
        region={{
          latitude: 32.824539,
          longitude: -96.674718,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      {
        props.appData.data.length ? (
          props.appData.data.map((location, i) => {
            return <View key={i} >
              <MapView.Marker
                coordinate={{latitude:location.lat, longitude:location.lon}}
              />
            </View>
          })
        ) : null
      }
      </MapView>
      <View style={mainContent}>
      {
        props.appData.isFetching && <Text>Loading</Text>
      }
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  },
  map: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
