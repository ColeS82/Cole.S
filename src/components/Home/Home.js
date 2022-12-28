import { Link } from 'react-router-dom'
import Particle from '../Particles/Particles'
import './Home.css'

export default function Home() {
    return (
        <div id='home-main'>
            <Particle></Particle>
            <div className='d-flex justify-content-center'>
                {/* <div id='hello' className='d-flex card align-items-center container justify-content-center col-sm-4'> */}
                <div id='hello' className='container card position-absolute top-50 start-50 translate-middle text-center col-sm-3 p-4'>
                    <h1>Welcome</h1>
                    <p>
                        To Cole Sexson's Portfolio
                    </p>
                    <Link to='/Aboutme'>
                        <button id='about-btn' className='btn btn-primary m-2'>About Me

                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}