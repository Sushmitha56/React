import REACT from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>hello world</h1>
    //     </div>
    // )

    return REACT.createElement(
        'div',
        {'id':'hello',className:'dummy class'},
        REACT.createElement('h1',null,'hello react')
        )
}

export default Hello;