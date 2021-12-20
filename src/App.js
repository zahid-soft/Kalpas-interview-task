import { useState } from 'react';
import './App.css';
import Sidebar from './components/pages/Sidebar';
import UserData from './components/pages/UserData';

function App() {
  const [viewToggle,setViewToggle] = useState(false)

  return (
    <div className="app">
         <Sidebar/>
         <UserData/>
    </div>
  );
}

export default App;
