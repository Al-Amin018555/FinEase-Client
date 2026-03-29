import { Link } from 'react-router';
import errorImg from '../assets/error_pic.jpg';
const Error = () => {
    return (
        <div className='flex gap-4 flex-col justify-center items-center'>
            <img className='w-2/6' src={errorImg} alt="" />
            <p className='text-3xl font-bold'>Page Not Found</p>
           <Link to='/'><button className='btn btn-primary'>Go to home</button></Link> 
        </div>
    );
};

export default Error;