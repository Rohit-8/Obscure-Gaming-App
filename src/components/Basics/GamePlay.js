import React, { useState } from 'react'
import Games from "./gameApi"
import GameCard from "./GameCard";
import Navbar from "./Navbar.js";
import Footer from "./Footer";

const uniqueList = [
    ...new Set(
        Games.map((curElem)=>{
            return curElem.category;
        })
),
    "All",
];

const GamePlay = ({setLoginUser}) => {
    
    const [gameData, setMenuData] = useState(Games);
    const [gameList] = useState(uniqueList);

    const filterItem = (category) => {
        if(category === "All"){
            setMenuData(Games);
            return;
        }
        const updatedList = Games.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

  return (
    <div>
        <Navbar filterItem = {filterItem} gameList = {gameList}/>
        <GameCard gameData = {gameData}/> 
        <Footer setLoginUser={setLoginUser}/>
    </div>
  );
};

export default GamePlay;