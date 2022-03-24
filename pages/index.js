import { useState } from 'react';

function Home(){
    return (
        <div>
            <h2>Finalmente!!!</h2>
            <Contador></Contador>
            <h3>É isso!!!</h3>
            <div>O peixe é gay!</div>
        </div>
    )
}

function Contador(){
    const [contador, setcontador] = useState(1);
   
    function adicionarContador(){
        setcontador(contador + 1);
    }    
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home