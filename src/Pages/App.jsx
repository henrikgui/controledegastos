import Home from './Home'
import Register from './Register'
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
<Routes>

  <Route exact path="/"element={<Home/>}/>
    

  <Route path="/register" element={<Register/>}/>
   

 
</Routes>
  );
};

export default App;