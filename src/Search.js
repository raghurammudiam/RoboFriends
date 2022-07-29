const Search = (props) => {
    return (
        <input type="search" placeholder="robot search" 
        onChange={props.onTextChange} value={props.value}>

        </input>
    )
}

export default Search;