import React from 'react';
import { useSelector } from 'react-redux';

function Previewer() {
    const codeOutput = useSelector((state) => state.markdown.codeOutput);

    return (
        <div className='window'>
            <div className='window-title-container'>
                <h2 className='window-title'>Previewer</h2>
            </div>

            <div id='preview' className='preview'>
                {codeOutput}
            </div>
        </div>
    );
}

export default Previewer;
