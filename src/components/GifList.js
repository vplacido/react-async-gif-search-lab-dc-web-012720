import React from 'react'

class GiftList {
  return (
    <div>
      {this.props.map(gif => <img key={gif.url} src={gif.url}/>)}
    </div>

  )
}
export default GiftList
