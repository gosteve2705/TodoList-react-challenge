import React, { useState } from "react";

function List(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prevValue => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={
        isClicked ? { textDecoration: "line-through" } : { color: "green" }
      }
    >
      {props.item}
    </li>
  );
}

export default List;
