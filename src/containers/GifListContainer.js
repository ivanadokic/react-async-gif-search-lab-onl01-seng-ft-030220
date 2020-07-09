import React, { Component } from 'react'
import GifList from './components/GifList.js';
import GifSearch from './components/GifSearch.js';


// <GifListContainer /> will be responsible for fetching the data from the giphy API, storing the first 3 gifs from the response in its component state, and passing that data down to its child, the <GifList> component, as a prop.
class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    // fetching the data from our API
    fetchGIFs = (query = "dolphins") => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=BygC9tvtLVJvVR2q5bZV9sBTqYS5ZQ7D')

            .then(res => res.json())
            // data is our stored "data" in our API
            // gif.images.original.url is locating our nested data from our API
            .then(({ data }) => {
                this.setState({
                    gifs: data.map(gif => ({ url: gif.images.original.url }))
                })
            })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer 