import React, { Component } from 'react';
import axios from 'axios';

class Button extends Component {
    getLongestCrawl() {
        return axios.get(`http://localhost/swapi/api/longest_crawl.php`);
    }

    getMostCharAppearance () {
        return axios.get(`http://localhost/swapi/api/most_char_appearance.php`);
    }

    getMostSpecAppearance () {
        return axios.get(`http://localhost/swapi/api/most_spec_appearance.php`);
    }

    getMostVehiclePilot () {
        return axios.get(`http://localhost/swapi/api/most_vehicle_pilot.php`);
    }

    execute(e) {
        axios.all([this.getLongestCrawl(), this.getMostCharAppearance(), this.getMostSpecAppearance(), this.getMostVehiclePilot()])
            .then(axios.spread((...resp) => {
                this.props.setAppState(resp);
            })).catch(errors => {
                console.log(errors);
            });
    }
    
    render() {
        return (
            <div className = 'btn-starwars button is-warning is-size-3' onClick = { (e) => this.execute(e) }>
                &#9733; Do. Or do not. There is no try. &#9733;
            </div>
        );
    }
}

export default Button;