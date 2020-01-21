import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component{

    constructor() {
        super();

        this.state = {
            searchField: '',
            monsters: [
                {
                    id: '1',
                    employee_name: 'paro'
                },
                {
                    id: '2',
                    employee_name: 'melo'
                },
                {
                    id: '3',
                    employee_name: 'melo'
                },
                {
                    id: '4',
                    employee_name: 'palo'
                },
                {
                    id: '5',
                    employee_name: 'melo'
                },
                {
                    id: '6',
                    employee_name: 'meto'
                },
            ]
        };
    }

    componentDidMount() {
        fetch('https://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(usersJSON => this.setState({ monsters: usersJSON.data }) /*console.log(usersJSON.data)*/);
    }


    handleChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    /**
     * Process of searching:
     * By taking what we write and using the setState() in onChange for changing our stringSearch it obligates
     * the program to rerender the DOM (everytime we call this methods it rerender the component), so
     * it will change the variables monsters and searchField that are inside the method, and will
     * get the filteredMonsters depending on the last variables changes, what will update the monsters
     * to display by the card list.
     */
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.employee_name.toLocaleLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className="App">
                <h1> Monsters Rolodex </h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }

}

export default App;
