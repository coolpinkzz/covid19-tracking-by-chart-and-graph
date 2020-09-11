import React, { Component } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./StatePicker.module.css";

class StatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentstate: "state",
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }
  handleStateChange = (state) => {
    this.setState({ currentstate: state });
    console.log(this.state.currentstate);
  };
  render() {
    return (
      <div>
        <h3 className={styles.head}>Filter by State </h3>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => {
              this.handleStateChange(e.target.value);
            }}
          >
            <option value={this.state.value}>Select State</option>
            {this.props.states.map((details, i) => (
              <option key={i} value={details}>
                {details.name}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

export default StatePicker;
