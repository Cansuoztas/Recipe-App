import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCars = ({ arr }) => {
  const navigate = useNavigate();
  console.log(arr.recipe);
  return (
    <div>
      <div className="card shadow" style={{ width: "18rem", height: "26rem" }}>
        <img src={arr?.recipe?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{fontSize:"20px"}}>{arr?.recipe?.label}</h5>

          <button
            onClick={() => navigate(`detail`,{state:arr.recipe})}
            href="#"
            style={{ fontWeight:"bold", color: "black", backgroundColor: "#7D6E83" }}
            className="btn "
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCars;