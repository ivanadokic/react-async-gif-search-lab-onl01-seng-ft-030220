//<GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.
import React from 'react';

function GifList(props) {
    return (
        <div className="col-md-8">
            <ul>
                {props.gifs.map((gif, i) => {
                    return (
                        <li key={i}>
                            <img src={gif} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default GifList