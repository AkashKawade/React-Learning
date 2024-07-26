// ------------------JSX in React-------------------

import React from 'react'

const Hello = () => {
//     return (
//         <div>
//             <h1>
//                 Hello Akash
//             </h1>
//         </div>
// )
// ---------------------Without JSX-------------------
return React.createElement('div',null,React.createElement('h1',null,"Hello JS"))
}

export default Hello