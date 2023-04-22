import React from "react";

const GameCard = ({ gameData }) => {
  return (
    <div>
      <section className="main-card--cointainer">
        {gameData.map((curElem) => {

          const {id,name,category, image, description, hr, rd} = curElem;

          return (
            <div>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-author categ">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                    {description}
                    </span>

                    <a href={rd}>
                      <div className="card-read">Read More</div>
                    </a>

                    <a href={hr}>
                      <img src={image} alt="images" className = "card-media"/>
                    </a>
                    <a href={hr} > 
                      <span className="card-tag subtle playsize">Play Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default GameCard;
