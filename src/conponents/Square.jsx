import React from "react";

// export function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// export defaul Square;

export const Square = ({onClick, value}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}