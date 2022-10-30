// import {TextInput} from './conponents/TextInput'; 
// import {Counter} from './conponents/Counter'; 
// import {ToggleButton} from './conponents/ToggleButton'; 
// import {Square} from './conponents/Square'; 
// import {Board} from './conponents/Board'; 
import {Game} from './conponents/Game'; 


export default function App() {
  return (
    <div>
      <Game />
      
    </div>
  );
}

// export default App; 
// import { useEffect, useState } from "react";

// export default function App() {
//   const [id, setId] = useState('ayatama523')

//   useEffect(() => { 
//     fetch(`http://api.github.com/users/${id}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }, [id])

//   return (
//     <div>
//       <p>{id}</p>
//     </div>
//   );
// }
