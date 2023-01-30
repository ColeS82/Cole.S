import myWorks from './myWorks.css'
import { Link } from 'react-router-dom'
import crypto from '../../images/crypto.jpeg'
import noteTaker from '../../images/noteTaker.png'
import onlyDevs from '../../images/only-devs.png'
import antidrink from '../../images/antidrink.webp'
export default function Myworks() {
    return (
        <main style={{fontFamily: 'Georgia, serif'}}>
            <h1 className="text-white text-center py-4 border-bottom">
                My Work
            </h1>

            <div className="d-sm-flex container justify-content-around mx-auto text-white text-center mt-5">
                <section className="col-sm-3 works">
                    <h5 className='border-bottom mx-5 pb-1'>
                        My Crypto Ticker
                    </h5>
                    <div className="card mt-sm-5 bg-secondary">
                        <Link to='/crypto'>
                        <div className="card-body">
                            <img className='rounded' src={crypto} style={{maxWidth: '100%'}}>
                            </img>
                        </div>
                        </Link>
                    </div>
                </section>

                <section className="col-sm-3 works">
                    <h5 className='border-bottom mx-5 pb-1'>
                        OnlyDevs
                    </h5>
                    <div className="card mt-sm-3 bg-secondary">
                        <div className="card-body">
                            <a href='https://the-only-devs.herokuapp.com/' target='_blank'>
                                <img className='rounded' src={onlyDevs} style={{maxWidth: '100%'}}>
                                </img>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="col-sm-3 works">
                    <h5 className='border-bottom mx-4 pb-1'>
                        The Anti Social Drinker App
                    </h5>
                    <div className="card mt-sm-3 bg-secondary">
                        <div className="card-body">
                        <a href='https://trufl.github.io/nonsocial-drinker/' target='_blank'>
                            <img className='rounded' src={antidrink} style={{maxHeight: '130px'}}>
                            </img>
                        </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className='d-sm-flex container justify-content-around mx-auto text-white text-center mt-sm-5'>
                <section className="col-sm-3 works invisible">
                    <h5 className='border-bottom mx-5 pb-1'>
                        card 1
                    </h5>
                    <div className="card mt-sm-3 bg-secondary">
                        <div className="card-body">
                           
                        </div>
                    </div>
                </section>

                <section className="col-sm-3 works">
                <h5 className='border-bottom mx-5 pb-1'>
                        Note Taker - Express
                    </h5>
                    <div className="card mt-sm-3 bg-secondary">
                        <div className="card-body">
                            <a href='https://github.com/ColeS82/Note_taker' target='_blank'>
                                <img className='rounded' style={{maxWidth:'100%'}} src={noteTaker}>
                                </img>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="col-sm-3 works invisible">
                    <h5 className='border-bottom mx-5 pb-1'>
                        card 6
                    </h5>
                    <div className="card mt-sm-3 bg-secondary">
                        <div className="card-body">
                        </div>
                    </div>
                </section>
            </div>

            <div className='d-sm-flex container justify-content-around mx-auto text-white text-center mt-sm-5 mb-5 invisible'>
                <section className="col-sm-3 works">
                    <h5>
                        card 7
                    </h5>
                    <div className="card">
                        <div className="card-body">
                        </div>
                    </div>
                </section>

                <section className="col-sm-3 works">
                    <h5>
                        card 8
                    </h5>
                    <div className="card">
                        <div className="card-body">
                        </div>
                    </div>
                </section>

                <section className="col-sm-3 works">
                    <h5>
                        card 9
                    </h5>
                    <div className="card">
                        <div className="card-body">
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
