import './App.css';
import GetValue from './GetValue';
import CharCount from './CharCount';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className='App '>
      <RecoilRoot>
        <h1>Char counter</h1>
        <CharCount />
        <GetValue/>
      </RecoilRoot>
    </div>

  );
}

export default App;
