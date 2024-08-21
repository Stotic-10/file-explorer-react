import { useState } from 'react';
import Fileexplorer from './component/Fileexplorer';
import explorer from './data/Data';

function App() {
  const [explorerFile, setExplorerFile] = useState(explorer);

  return (
    <>
      <h3 style={{color: 'black'}}>Folder & File Structure</h3>
      <div style={{border: '3px solid green', borderRadius: '15px', padding: '22px',}}>
        <Fileexplorer data={explorerFile} />      
      </div>
    </>
  );
}

export default App;
