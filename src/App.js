import React,{useEffect, useContext} from 'react';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from './Context/AppContext';
import './App.css'

export default function App() {
  const {fetchData} = useContext(AppContext);
  useEffect( ()=>{
    fetchData();

  },[] )
  return (
    <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
