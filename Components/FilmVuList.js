// Components/FilmList.js

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmVuItem from './FilmVuItem'
import { connect } from 'react-redux'

class FilmVuList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.films}
          extraData={this.props.mesFilmsVu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <FilmVuItem
              film={item}
              displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    mesFilmsVu: state.toggleFilmsVu.mesFilmsVu
  }
}

export default connect(mapStateToProps)(FilmVuList)
