import './Header.css';
import { HiSearch } from "react-icons/hi";

import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';


function Header() {
    const [inputValue, setInputValue] = useState('')
    return (
            <div>
                <nav>
                    <div className='nav-options'>
                        <h1>REACTFLIX</h1>
                        <NavLink to="" style={({isActive}) => {return {color:isActive ? '#FFF' : '#EE9B00'}}} className='header__navigation-link'>
                        <span id={'Movies'}>MOVIE</span>
                        </NavLink>

                        <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#FFF' : '#EE9B00'}}} className='header__navigation-link'>
                        <span>TV SHOwS</span>
                        </NavLink>

                        <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? '#FFF' : '#EE9B00'}}} className='header__navigation-link'>
                        <span>TRENDING</span>
                        </NavLink>
                        
                    </div>
                    <div className='input-group'>
                    <input type="text" placeholder="Search Whatever you want" onChange={(e) => setInputValue(e.target.value)}/>
                    <HiSearch fontSize={21} color='black' id='search'/>
                    </div>
                </nav>

               
                    <Routes>
                        <Route path='' element={<Movies />} />
                        <Route path='TvShows' element={<TvShows />} />
                        <Route path='Trending' element={<Trends />} />
                    </Routes>
            </div>
    )
}



export default Header