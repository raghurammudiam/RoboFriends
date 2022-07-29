import { useState } from "react";

import CardList from "./CardList";
import {robots} from './robots'
import Search from "./Search";
import 'tachyons'

const App = () => {
    const [searchText, setSearchText] = useState("");
    
    const onSearchTextChanged = (e) => {
        setSearchText(e.target.value)
    }

    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchText));

    return (
        <div className="tc">
            <h1>Robot company</h1>
            <Search value={searchText} onTextChange={onSearchTextChanged}></Search>
            <CardList dataSource={filteredRobots}></CardList>
        </div>
    )
}

export default App;