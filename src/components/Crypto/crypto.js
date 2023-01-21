
import Ticker from '../Tickers/Ticker'

export default function Crypto () {
    return(
        <div className='container py-5 mt-3'>
            <p className='text-white h4 w-75 mx-auto' style={{fontFamily: 'Georgia, serif'}}>
                Here is a simple crypto ticker that I made using axios.get to fetch the image, id and price. I included buttons linked to the white papers that created these projects for those interested in the technology.
            </p>
            <Ticker />
        </div>
    )
}