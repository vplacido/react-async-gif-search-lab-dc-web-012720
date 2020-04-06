import React, {Component} from 'react'
import GiftList from '../components/GiftList'
import GiftSearch from '../components/GiftSearch'

class GifListContainer extends component {
  state ={
    gifts: []
  }

  fetchGIFs = (query = "food") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  render() {
    return (
      <div>
        <GiftList data={this.state.gifts}/>
        <GiftSearch submitFunction={this.fetchGIFs}/>
      </div>
    )
  }
}
export default GifListContainer
