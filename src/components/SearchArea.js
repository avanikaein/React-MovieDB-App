import React from 'react';

const SearchArea = (props) => {
    return (

            <section className="search-body">
                <form onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="search for a movie" onChange={props.handleChange}/>
                </form>
            </section>
    )
}

export default SearchArea;