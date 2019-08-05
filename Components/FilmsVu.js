// Components/FilmVu.js

import React from 'react'
import { StyleSheet, View } from 'react-native'
import FilmVuList from './FilmVuList'
import { connect } from 'react-redux'

class FilmsVu extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FilmVuList
          films={this.props.mesFilmsVu}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    mesFilmsVu: state.toggleFilmsVu.mesFilmsVu
  }
}

export default connect(mapStateToProps)(FilmsVu)
