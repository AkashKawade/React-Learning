// ----------Functio component In React--------------------
import React from 'react'

// function Greet(){
//     return <h1>Hello,My name is akash</h1>
// }

// ----------Arrow Function--------------
const Greet = ({name,heroName}) => {
return (
    <div>
        <h1>
            Hello {name} A. K. A {heroName}
        </h1>
    </div>
)
}

export default Greet