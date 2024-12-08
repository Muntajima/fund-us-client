import { Link } from 'react-router-dom';
import oldAge from '../assets/old-age.webp';
import { Slide } from 'react-awesome-reveal';

const OldAgeProject = () => {
    return (
        <div className='my-12'>
            <h1 className='text-5xl text-center font-bold p-4 text-slate-800 mb-4'>Donate to Our New Project </h1>
            <Slide>
            <div className="hero bg-base-200 min-h-[400px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={oldAge}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-2/4 pr-8'>
                        <h1 className="lg:text-4xl text-3xl font-bold">FundUs Old-Age Home</h1>
                        <p className="py-6">
                            In the bustling streets of Bangladesh, amidst the cacophony of daily life, there exists a sanctuary for the elderly FundUs’s Old Age Home. Founded with a vision to provide solace, care, and dignity to the elderly population, this institution stands as a beacon of hope and compassion in a society where aging often brings neglect and abandonment.
                        </p>
                        <Link to="/all-campaign-card">
                            <button className="btn btn-outline">View more</button>
                        </Link>

                    </div>
                </div>
            </div>
            </Slide>
            
        </div>
    );
};

export default OldAgeProject;