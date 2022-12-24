import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb, SiReact, SiGraphql,} from 'react-icons/si';
import proPic from '../../images/Cole.png';
import './Aboutme.css';
export default function Aboutme() {
    return (
        <main id='about-main' className="">
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
                        <h1 className='text-center'>
                            About Me
                        </h1>

                        <p className='aboutP'>
                            I am a recent graduate of the Univerity of Arizona Full Stack Web Development Certificate program.
                        </p>

                        <h2 className='text-center container col-5 pb-2'>
                            Skills
                        </h2>

                        <table className='mt-3 mx-auto text-white'>
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
                                    <SiBootstrap className='me-2'></SiBootstrap>Bootstrap CSS framework
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