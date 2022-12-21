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

                <section id='welcome' className=' p-5'>
                    <h2 className='text-center'>
                        Something to say
                    </h2>
                    
                    <p className='welcomP'>
                        Here I will have something to say; for now, it's just... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper. Venenatis lectus magna fringilla urna porttitor. Libero enim sed faucibus turpis in eu mi. A pellentesque sit amet porttitor eget dolor morbi non arcu. Diam sit amet nisl suscipit adipiscing bibendum est. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Commodo elit at imperdiet dui accumsan sit amet nulla. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Risus in hendrerit gravida rutrum quisque non. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
                    </p>
                    
                </section>
            </div>


        </main>
    )
}