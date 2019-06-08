import React from 'react';
import axios from 'axios'
import style from './heroes.scss'

export class Heros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        }
    }


    componentDidMount() {
        this.getHeroes()
    }

    async getHeroes() {
        const {data} = await axios.get('http://eastflag.co.kr:8080/api/heroes')
        this.setState({heroes: data})

    }


    render() {
        return (
            <ul>
                {this.state.heroes.map(hero => (
                    <li key={hero.hero_id} className="row align-items-center m-0">
                        <div className="col-1 py-2">
                            <img src={hero.photo} alt={hero.name} className="img-fluid rounded-circle"/>
                        </div>
                        <span className="col">{hero.name}</span>
                    </li>
                ))}
            </ul>
        );
    }
}
