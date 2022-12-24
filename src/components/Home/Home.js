import { Link } from 'react-router-dom'
import Particle from '../Particles/Particles'
import './Home.css'

export default function Home() {
    return(
        <div id='home-main'>
            <Particle></Particle>
            <div id='hello' className='d-flex card align-items-center container justify-content-center col-4'>
                <h2>Welcome</h2>
                <p>
                    To Cole Sexson's Portfolio
                    </p>
                <Link to ='/Aboutme'>
                <button className='btn bg-primary mt-5'>About Me

                </button>
                </Link>
            </div>
        </div>
    )
}