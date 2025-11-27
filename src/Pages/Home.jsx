import React from 'react';
import AllJobs from './AllJobs';

const Home = () => {
    return (
        <div>
            <h2 className='text-center'>Home page</h2>
            <section>
                <AllJobs></AllJobs>
            </section>
            <section></section>
            <section></section>
        </div>
    );
};

export default Home;