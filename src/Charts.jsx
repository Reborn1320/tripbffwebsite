import './App.css';
import React from 'react';
import { TRIP_URL } from "./ServiceConstants";
import {Line} from 'react-chartjs-2';
import { DateRange } from 'react-date-range';
import moment from 'moment';

export default class ChartsComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          fromDate: moment().add(-1, 'month'),
          toDate: moment()          
      };
    }

    componentDidMount() {
        var { fromDate, toDate } = this.state;
                console.log(fromDate);
                console.log(toDate);
        this._getGrowthChart(this.state.fromDate, this.state.toDate);
    }

    _getGrowthChart = (fromDate, toDate) => {
        var url = new URL(TRIP_URL + "/statistics/growthCharts"),
            params = {fromDate: moment(fromDate).startOf('day'), toDate: moment(toDate).endOf('day')}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        fetch(url)                
        .then(res => res.json())
        .then(
            (data) => {                
                this.setState({data: data});
            },
            (error) => {
                console.log(error);
            }
        );
    }

    _handleSelect = (range) => {
        this.setState({
            fromDate: range.startDate,
            toDate: range.endDate
        })
    }

    _handleSearch = () => {
        var { fromDate, toDate } = this.state;
        console.log(fromDate);
        console.log(toDate);
        this._getGrowthChart(this.state.fromDate, this.state.toDate);
    }

   render() {
       const { data } = this.state;
       let linesData = {};

       if (data) {
        const colors = [
            "hsl(46, 70%, 50%)",
            "hsl(135, 70%, 50%)",
            "hsl(100, 50%, 30%)",
            "hsl(212, 70%, 50%)",
            "hsl(21, 70%, 50%)"];
        const labels = [
            "Total Users",
            "Total Facebook Users",
            "Total Created Trip Users",
            "Total Exported Infographic Users",
            "Total Shared Infographic Users"
        ];

        linesData = {
            labels: data[0].data.map(item => item.x),
            options: {
                responsive: true,
                maintainAspectRatio: false
            },
            datasets: data.map((item, index) => {
                return {
                    label: labels[index],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: colors[index], 
                    pointHoverBorderColor: colors[index],
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: item.data.map(item => item.y)
                  }
            })
          };
       }       

       return (
           <div>
               <h2>Charts</h2>
               <div className='charts-filter-container'>
                    <DateRange
                        onInit={this._handleSelect}
                        onChange={this._handleSelect}
                        rangedCalendars={true}
                    />
                    <button onClick={this._handleSearch}>
                        Search
                    </button>
               </div>
               <div className='charts-container'>
                {
                    data && <Line data={linesData} />                
                }               
               </div>                    
           </div>    
       )
   }
}