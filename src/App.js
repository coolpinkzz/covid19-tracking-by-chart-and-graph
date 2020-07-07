import React ,{Component} from 'react';

import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


import './App.css';

class App extends Component {
  state = {
    data: [],
    country:'',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({data : data})
    }
 handleCountryChange = async (country) =>{
   const data = await fetchData(country);
   this.setState({data : data, country:country});

 }



  render(){

    return (
      <div className="App">
        <img src={'img/2.png'} alt="corona-image"/>
        <Cards data ={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={this.state.data} country={this.state.country}/>
        <h6>Copyright@2020 -- Made with <FontAwesomeIcon icon={faHeart} /> by Pratik Yadav --</h6>

      </div>
    );
  }


}

export default App;
