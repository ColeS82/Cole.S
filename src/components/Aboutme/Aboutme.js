import Ticker from '../Tickers/Ticker';
import Resume from '../../images/Resume.pdf';
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiReact, SiGraphql, } from 'react-icons/si';
import proPic from '../../images/Cole.png';
import Crypto from '../../images/crypto.jpeg';
import Onlydevs from '../../images/only-devs.png'
import './Aboutme.css';
import MyCarousel from './MyCarousel';
import { Link } from 'react-router-dom'
export default function Aboutme() {
    return (
        <main id='about-main'>
            <div id='container1' className='d-flex flex-wrap container-fluid col-sm-10'>
                <figure id='idCard' className='bg-primary card col-sm-2 text-white pb-0 mx-5'>
                    <img src={proPic} id='pic' alt='Cole Sexson' />

                    <figcaption className='card-body'>
                        <section className='border-bottom'>
                            <span id='cardTitle'>
                                Cole Sexson
                            </span><br></br>
                            Full Stack Developer
                        </section>

                        <div className='my-3'>
                            <h5>GitHub:</h5>
                            <a href='https://github.com/ColeS82' target='_blank' rel='noreferrer' className='text-white'>
                                https://github.com/ColeS82
                            </a>
                        </div>
                        <a type='button' className='btn btn-info mt-3' href={Resume} target='_blank' rel='noreferrer'>
                            Resume
                        </a>
                    </figcaption>
                </figure>

                <div id='aboutCont' className='d-flex flex-column justify-content-center col '>
                    <section id='about' className=' p-4 mb-5 bg-dark'>
                        <h1 className='text-center'>
                            About Me
                        </h1>

                        <p className='aboutP'>
                            Hello!  Thanks for checking out my online portfolio.  I specialize in front end development and design with the React front end framework.
                        </p>
                        <p className='aboutP'>
                            I am a recent graduate of the University of Arizona's Full Stack Web Development Certification Program. Additionally, I have 5 years of experience in leadership and project management.
                        </p>
                        <p>
                            Please take a look around my site, I am always working on something new.
                        </p>

                    </section>
                    <section id='skills' className='bg-secondary col-sm-8 mx-auto mb-5'>
                        <h3 id='skills-banner' className='text-center p-1 mb-1'>
                            Skills
                        </h3>

                        <table id='skills-table' className='mx-auto text-white'>
                            <tbody>
                                <tr>
                                    <td className='cell'>
                                        <SiHtml5 className='me-2'></SiHtml5>
                                        HTML-5
                                    </td>
                                    <td className='cell'>
                                        <SiMongodb className='me-2'></SiMongodb>
                                        Mongo db
                                    </td>
                                    <td className='cell'>
                                        <SiReact className='me-2'></SiReact>
                                        Ract js
                                    </td>
                                </tr>
                                <tr>
                                    <td className='cell'>
                                        <SiCss3 className='me-2'></SiCss3>
                                        CSS
                                    </td>
                                    <td className='cell'>
                                        <SiBootstrap className='me-2'></SiBootstrap>Bootstrap
                                    </td>
                                    <td className='cell'>
                                        <SiNodedotjs className='me-2'></SiNodedotjs>
                                        Node js
                                    </td>
                                </tr>
                                <tr>
                                    <td className='cell'>
                                        <SiJavascript className='me-2'></SiJavascript>
                                        JavaScript
                                    </td>
                                    <td className='cell'>
                                        <SiGraphql className='me-2'></SiGraphql>
                                        Graphql
                                    </td>
                                    <td className='cell'>
                                        <SiExpress className='me-2'></SiExpress>
                                        Express js
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                
            </div>
        
            <div id='carousel' className='mx-3 mx-sm-auto col-sm-4 p-4 bg-dark border'>
                <h3 className='text-center text-white border-bottom pb-1 container mb-3'>Featured Works</h3>
            <MyCarousel />
            </div>

            <p className='text-center text-white'>
                Be sure to check out my other work <Link to='/Myworks'>
                here
                </Link>
            </p>
        </main>
    )
}