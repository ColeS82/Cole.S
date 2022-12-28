
import Resume from '../../images/Resume.pdf'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiReact, SiGraphql, } from 'react-icons/si';
import proPic from '../../images/Cole.png';
import './Aboutme.css';
export default function Aboutme() {
    return (
        <main id='about-main'>
            <div id='container1' className='d-flex flex-wrap container-fluid justify-content-center'>
                <figure id='idCard' className='bg-primary card text-white pb-0'>
                    <img src={proPic} id='pic' />

                    <figcaption className='card-body'>
                        <section className='border-bottom'>
                            <span id='cardTitle'>
                                Cole Sexson
                            </span><br></br>
                            Full Stack Developer
                        </section>

                        <div className='my-3'>
                            <h5>GitHub:</h5>
                            <a href='https://github.com/ColeS82' target='_blank' className='text-white'>
                                https://github.com/ColeS82
                            </a>
                        </div>
                        <a type='button' className='btn btn-info mt-3' href={Resume} target='_blank'>
                            Resume
                        </a>
                    </figcaption>
                </figure>

                <div id='aboutCont' className='d-flex flex-column justify-content-center col-sm-8'>
                    <section id='about' className=' p-4'>
                        <h1 className='text-center'>
                            About Me
                        </h1>

                        <p className='aboutP'>
                            Hello!  Thanks for checking out my online portfolio.  I am a recent graduate of the Univerity of Arizona Full Stack Web Development Certificate program.
                        </p>
                        <p className='aboutP'>
                            I find myself most enjoying the front end of my apps that I have created.  This website is my excersise in honing my skills with React.  I am enjoying the website so far and have much planned for it.
                        </p>

                        <h3 className='text-center container col-5 mt-5 pb-1'>
                            Skills
                        </h3>

                        <table className='mx-auto text-white '>
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
                        </table>
                    </section>
                </div>
            </div>


        </main>
    )
}