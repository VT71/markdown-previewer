import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCode } from '../store/slices/markdownParserSlice';

function Editor() {
    const code = useSelector((state) => state.markdown.code);
    const dispatch = useDispatch();

    return (
        <div className='window'>
            <div className='window-title-container'>
                <h2 className='window-title'>Editor</h2>
            </div>
            <textarea
                id='editor'
                value={code}
                onChange={() => {
                    dispatch(
                        updateCode(document.getElementById('editor').value)
                    );
                }}
            ></textarea>
        </div>
    );
}

export default Editor;
