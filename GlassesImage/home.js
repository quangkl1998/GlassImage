import React, { Component } from "react";
import Header from "./header";
import styles from "./home.module.css";
import Model from "./model";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <Model />
      </div>
    );
  }
}

export default Home;
