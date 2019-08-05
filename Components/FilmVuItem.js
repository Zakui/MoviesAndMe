// Components/FilmItem.js

import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class FilmVuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text_to_display: this.props.film.title
        }
    }
    _displayText() {
        if (this.state.text_to_display === this.props.film.title) {
            this.setState({text_to_display: `Sorti le ${moment(new Date(this.props.film.release_date)).format('DD/MM/YYYY')}`})
        } else {
            this.setState({text_to_display: this.props.film.title})
        }
        
    }

    render() {
        const { film, displayDetailForFilm } = this.props
        return (
        <FadeIn>
            <TouchableOpacity
            style={styles.main_container}
            onPress={() => displayDetailForFilm(film.id)}
            onLongPress={() => this._displayText()}
            >
            <Image
                style={styles.image}
                source={{uri: getImageFromApi(film.poster_path)}}
            />
                <Text style={styles.text_to_display}>{this.state.text_to_display}</Text>
            </TouchableOpacity>
        </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    margin: 7,
    borderRadius: 50
  },
  text_to_display: {
    fontSize: 16,
    flexWrap: 'wrap',
    margin: 5
  }
})

export default FilmVuItem
