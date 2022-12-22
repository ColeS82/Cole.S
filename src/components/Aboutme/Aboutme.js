import proPic from '../../images/Cole.png';
import './Aboutme.css'
export default function Aboutme() {
    return (
        <main className="">
            <div id='container1' className='d-flex container-fluid justify-content-center'>
                <figure id='idCard' className='bg-primary card text-white'>
                    <img src={proPic} id='pic' />

                    <figcaption className='card-body'>
                        <section className='border-bottom'>
                            <span id='cardTitle'>
                                Cole Sexson
                            </span><br></br>
                            Full Stack Developer
                        </section>

                        <p className='mt-3'>
                            GitHub:<br></br>
                            https://github.com/ColeS82
                        </p>
                        <button className='btn btn-info'>
                            Resume
                        </button>
                    </figcaption>
                </figure>

                <div id='aboutCont' className='d-flex flex-column justify-content-center col-8'>
                    <section id='about' className=' p-4'>
                        <h2 className='text-center'>
                            About Me
                        </h2>

                        <p className='aboutP'>
                            I am a recent graduate of the Univerity of Arizona Full Stack Web Development Certificate porgram.  Throughout the course we learned to use Mongodb, Expressjs, Reactjs and Nodejs comprising the MERN software stack.
                        </p>

                        <h4>
                            Technologies that I am comfortable with:
                        </h4>


                    </section>
                </div>
            </div>


        </main>
    )
}