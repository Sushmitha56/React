import React from 'react';
const heading={
    color:'blue',
    fontSize:'70px'
}
function Inlinestyle(){
    return(
        <div>
            <h4 className='error'>Erroor</h4>
            <h1 style={heading}>Inlinestyle</h1>
        </div>
    )
}
export default Inlinestyle