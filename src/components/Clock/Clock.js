import './Clock.css'
const now = new Date()
console.log(now)
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const day = days[now.getDay()]
const month = months[now.getUTCMonth()]
const date = now.getDate() + ' / ' + month + ' / ' + now.getUTCFullYear();

export default function Clock() {
    return (
        <div id='clock' className="d-flex flex-column text-center col-6">
            <div>
                {day}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
} 
