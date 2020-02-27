import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'

class Button extends Component {
    getLongestCrawl() {
        return axios.get(`${config.api_root_url}/api/longest_crawl.php`);
    }

    getMostCharAppearance () {
        return axios.get(`${config.api_root_url}/api/most_char_appearance.php`);
    }

    getMostSpecAppearance () {
        return axios.get(`${config.api_root_url}/api/most_spec_appearance.php`);
    }

    getMostVehiclePilot () {
        return axios.get(`${config.api_root_url}/api/most_vehicle_pilot.php`);
    }

    execute(e) {
        if(!this.props.data.isclicked) {
            axios.all([this.getLongestCrawl(), this.getMostCharAppearance(), this.getMostSpecAppearance(), this.getMostVehiclePilot()])
                .then(axios.spread((...resp) => {
                    this.props.setAppState(resp, true);
                    document.getElementById('result_view_container').style.display = "block";
                })).catch(errors => {
                    console.log(errors);
                });
        } else {
            document.getElementById('result_view_container').style.display = "none";
            this.props.setAppState(null, false)
        }
    }
    
    render() {
        return (
            <div 
                className = {
                    this.props.data.isclicked 
                    ? 'btn-starwars button is-warning is-size-3 is-clicked' 
                    : 'btn-starwars button is-warning is-size-3'
                } 
                onClick = { (e) => this.execute(e) }>
                &#9733; Do. Or do not. There is no try. &#9733;
            </div>
        );
    }
}

export default Button;