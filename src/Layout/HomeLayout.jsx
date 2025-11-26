import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <button className='btn btn-primary'>ggggggg</button>
                <button className='btn btn-secondary'>ggggggg</button>
                <Outlet></Outlet>
                <section><h2 className='text-accent'>custom section</h2></section>
                <section><h2>custom section</h2></section>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;