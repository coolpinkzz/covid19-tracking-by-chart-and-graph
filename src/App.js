import React, { Component } from "react";

import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      country: "",
      states: [],
    };
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });

    axios
      .get(`http://covid19-india-adhikansh.herokuapp.com/states`)
      .then((res) => {
        this.setState({ states: res.data.state });
        console.log(this.state.states);
      });
  }
  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
    console.log(country);
  };

  render() {
    return (
      <div className="App">
        <h1 className="head">
          <img src="img/2.png" alt="corona" />
        </h1>

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={this.state.data} />

        {/* <StatePicker
          states={this.state.states}
          handleCountryChange={this.handleStateChange}
        /> */}
        <Charts data={this.state.data} country={this.state.country} />

        <h6>Copyright@2020 -- Made by Pratik Yadav --</h6>
      </div>
    );
  }
}

export default App;
