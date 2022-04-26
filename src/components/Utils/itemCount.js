import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({stock, initial, action}) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const minusCount = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <>

                <div className='row button-container justify-content-around'>
                    <div className='col'>
                        <button onClick={minusCount} id='control'><RemoveIcon /></button>
                    </div>
                    <div className='col'>
                        <p>{count}</p>
                    </div>
                    <div className='col'>
                        <button onClick={addCount} id='control'><AddIcon /></button>
                    </div>
                </div>
                <button onClick={(e) => action (e, count)} id='addToCart'>Add to Cart</button>

        </>
    )

}

export default ItemCount;