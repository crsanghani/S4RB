import React, { Component } from 'react';
import axios from 'axios';
import ComplaintList from './components/ComplaintsList';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      complaints: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/CPMU')
      .then(response => {
        const complaints = response.data;

        // the data didn't come with IDs and they are important in React
        // I chose to manipulate them here at the source of data as it would have the least impact
        // on performance 

        let i = 0;
        complaints.forEach(complaint => {
          complaint.id = i;
          i++;
        })

        this.setState({complaints: complaints});
      })
      .catch(error => {
        console.log('Error fetching and parsing data');
      });
  }

  render() {
    return (
      // passing the state we retrieved from the API down as props
      <ComplaintList complaints={this.state.complaints}/>
    )
  }
  
}  