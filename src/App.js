import { useState } from 'react';
import './App.css';
import Sidebar from './components/pages/Sidebar';
import UserData from './components/pages/UserData';


function App() {
  const [viewToggle,setViewToggle] = useState(false);

  const viewdata = () => {
    setViewToggle(false)
  }
  const horizontaldata = () => {
    setViewToggle(true)
  }

  return (
    <div className="app">
         <Sidebar vertical={viewdata} horizontal={horizontaldata}/>
         <UserData verticaldata={viewToggle} />
    </div>
  );
}

export default App;
