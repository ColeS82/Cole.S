import './Clock.css'

export default function Clock() {
    const now = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = days[now.getDay()]
    const month = months[now.getUTCMonth()]
    const date = month + ' ' +  now.getDate()+ ', ' + now.getUTCFullYear();
    return (
        <div id='clock' className="d-flex flex-column text-center col-sm-6">
            <div>
                {day}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
} 
