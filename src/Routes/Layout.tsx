
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const Layout = () => {
  return (
    <div id="app-content">
      <Header/>
      <div id='body-container' className=''>
        <Outlet/>
      </div>
    </div>
  )
}
