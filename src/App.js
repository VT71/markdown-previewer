import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
    return (
        <>
            <div className='title-container'>
                <h1 className='title'>&lt;Markdown Previewer/&gt;</h1>
            </div>
            <div className='windows-container'>
                <Editor />
                <Previewer />
            </div>
        </>
    );
}

export default App;
