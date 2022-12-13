import { useState, useEffect, useMemo } from 'react';

const Teste = () => {
    
    const [name, setName] = useState('Myllena')

    const handleChangedName = () => {
        setName(prev => prev === 'Myllena' ? 'Tayná' : 'Myllena')
    }


    useEffect(()=>{
        alert('renderizei')
    },[])

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangedName}>Alterar</button>
        </div>
    )
}
export {Teste}