import { useState } from 'react';
import './App.css';
import Sidebar from './components/pages/Sidebar';
import UserData from './components/pages/UserData';
import ViewToggle from './components/pages/ViewToggle';

function App() {
  const [viewToggle,setViewToggle] = useState(false);

  const viewdata = () => {
    setViewToggle(true)
  }
  const horizontaldata = () => {
    setViewToggle(false)
  }

  return (
    <div className="app">
         <Sidebar vertical={viewdata} horizontal={horizontaldata}/>
         <UserData verticaldata={viewToggle} />
    </div>
  );
}

export default App;
