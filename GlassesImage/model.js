import React, { Component } from "react";
import styles from "./model.module.css";

import model from '../assets/img/glassesImage/model.jpg';
import v1 from '../assets/img/glassesImage/v1.png';

import {dataUrl, dataChangeUrl} from './data.js';

class Model extends Component {
    state = {
        img: v1,
    }

    data = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./glassesImage/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./glassesImage/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./glassesImage/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./glassesImage/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./glassesImage/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./glassesImage/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
    ];

    
    selectGlasses = (img) =>{
        this.setState({
            img:img,
        });
    };

    renderGlasses() {
        return this.data.map((item, index) => {
            return (
                <div key={item.id} className={styles.col} onClick={ () => this.selectGlasses(dataUrl[index])}>
                    <img src={dataChangeUrl[index]} alt=""></img>
                </div>
            );
        });
    }

    render() {
        return (
            <div className={styles.model}>
                <div className={styles.mid}>
                    <div className={styles.left}>
                        <img className={styles.img_model} src={model} alt=""></img>
                    </div>
                    <div className={styles.right}>
                        <img className={styles.img_model} src={model} alt=""></img>
                        <img className={styles.image} src={this.state.img} alt=""></img>
                    </div>
                </div>
                <div className={styles.row}>
                    {this.renderGlasses()}
                </div>
            </div>
        );
    }
}

export default Model;
