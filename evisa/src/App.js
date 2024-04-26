import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Footer from './components/Footer';
import CustomRoutes from './components/CustomRoutes';
import Sidebar  from './components/Sidebar';
import FAQ from './components/Faq';

function App({store}) {
  return (
    < div className='App'>
      <Routes>
        <Route exact path='/' element={<Login store={store}/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes> 
      {/* <Footer/> */}
      {/* <Sidebar/> */}
      <CustomRoutes/>
  </div>
  );
}

export default App;
