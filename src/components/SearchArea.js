import React from 'react';

const SearchArea = (props) => {
    return (
        <div>
            <section>
                <form onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="search for a movie" onChange={props.handleChange}/>
                </form>
            </section>
        </div>
    )
}

export default SearchArea;