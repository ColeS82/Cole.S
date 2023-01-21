import { useState, useEffect, createElement } from 'react'
import axios from 'axios'


export default function Ticker() {

    const [btc, setBtc] = useState([])
    const [eth, setEth] = useState([])
    const [ada, setAda] = useState([])


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setBtc(res.data[0]);
                setEth(res.data[1]);
                setAda(res.data[7]);
            })
            .catch(error => console.log(error))
    }, []
    );

    return (
        <table id='Ticker' className='text-success col bg-black mt-5 mx-auto'>
            <tbody>
                <tr id='btc' className='align-middle tr'>
                    <td className='col-1 p-1'>
                        <img src={btc.image} className=' coin-image m-2'></img>
                        
                    </td>
                    <td className='col-2'>
                        {btc.name}
                    </td>
                    <td className='text-center'>
                        <a href='https://bitcoin.org/bitcoin.pdf' target='_blank' rel='noreferrer'>
                            <button className='btn btn-sm btn-warning'>White Paper
                            </button>
                        </a>
                    </td>
                    <td className='text-end pe-4'>
                        ${btc.current_price}
                    </td>
                </tr>
                <tr id='eth' className='align-middle tr'>
                    <td className='p-1'>
                        <img src={eth.image} className='coin-image m-2'></img>
                    </td>
                    <td>
                        {eth.name}
                    </td>
                    <td className='text-center'>
                        <a href='https://ethereum.org/en/whitepaper/' target='_blank' rel='noreferrer'>
                            <button className='btn btn-sm btn-secondary'>White Paper
                            </button>
                        </a>
                    </td>
                    <td className='text-end pe-4'>
                        ${eth.current_price}
                    </td>
                </tr>
                <tr id='ada' className='align-middle'>
                    <td className='p-1'>
                        <img src={ada.image} className='coin-image m-2'></img>
                        
                    </td>
                    <td>
                        {ada.name}
                    </td>
                    <td className='text-center'>
                        <a href='https://docs.cardano.org/introduction' target='_blank' rel='noreferrer'>
                            <button style={{backgroundColor: 'rgb(5, 77, 162)'}} className='btn btn-sm text-white'>White Paper
                            </button>
                        </a>
                    </td>
                    <td className='text-end pe-4'>
                        ${ada.current_price}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}