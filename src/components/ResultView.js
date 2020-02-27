import React, { Component } from 'react';

class ResultView extends Component {
    
    render() {
        let longest_crawl = '';
        let most_char = '';
        let most_spec = '';
        let most_vehicle_pilot = '';
        
        if(this.props.results.isclicked) {
            this.props.results.longest_crawl.data.forEach((v) => {
                longest_crawl = `${v.title} \n`;
            });

            this.props.results.most_char_appearance.data.forEach((v) => {
                most_char += `${v.name} (${v.num_appearance}) \n`;
            });

            this.props.results.most_spec_appearance.data.forEach((v) => {
                most_spec += `${v.name} (${v.num_appearance}) \n`;
            });
            
            this.props.results.most_vehicle_pilot.data.forEach(function(d,i){
                for(let key in d) {
                    most_vehicle_pilot += `Planet: ${key} - Pilots: (${d[key].length}) ${d[key].map((k) => { return k.driver + ' - ' + k.species}).join(' , ')} \n`;
                }
            })

        }

        return (
            <div id = 'result_view_container'>
                <div className = "question"> Which of all StarWars movies has longest opening crawl?</div>
                <div className = "answer">
                   {longest_crawl}
                </div>
            
                <div className = "question"> What character (person) appeared in the most of StarWars films?</div>
                <div className = "answer">
                    {most_char}
                </div>

                <div className = "question"> What species appeared in the most number of StarWars films?</div>
                <div className = "answer">
                    {most_spec}
                </div>

                <div className = "question"> What planet in StarWars universe provided largest number of vehicle pilots?</div>
                <div className = "answer">
                    {most_vehicle_pilot}
                </div>
            </div>
        );
    }
}

export default ResultView;