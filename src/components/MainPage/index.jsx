import React from 'react';
import {useContext} from 'react';
import styles from './MainPage.module.css';
import {ThemeCont} from "../../App";
import image from '../img/image.jpeg';

function MainPage() {
  const theme = useContext(ThemeCont);
  const container = styles['mainPageWrap-' + theme];
  return(
    <div className={container}>
      <h1> Welcome to our page </h1>
      <img src={image} alt="pic" />
    </div>
  )
}

export default MainPage;