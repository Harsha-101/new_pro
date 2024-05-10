import React, { useState } from 'react';
function Card() {
    let var1 = 10
    let var2 = 20
    const num = [1, 2, 3, 4, 5]
    const doubled = num.map((num) => num * 2)
    const [name, setname] = useState("jasu")
    return (
        <>
            <h1> Evaluating expression </h1>
            <p>var1{var1} {">"} {var2}: {var1 > var2 ? 'true' : 'false'}</p>
            {doubled}
            <p>{name}</p>
            <button onClick={() => setname("harsha")}>change</button>
        </>
    );
}
export default Card