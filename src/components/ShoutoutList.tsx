import { useState } from "react";
import Shoutout from "../models/Shoutout";
import ShoutoutForm from "./ShoutoutForm";

function ShoutoutList() {
    const [shoutouts, setShoutouts] = useState<Shoutout[]>([
        {to: 'Yvonne', from: 'Shelly', comment: 'You rocked on this project!! Thanks!'},
        {to: 'Justin', from: 'Billy', comment: 'BEST PROGRAM EVER BECAUSE OF YOU!! AWESOME!!'}
    ]);
    
    function handleAddShoutout(shoutout: Shoutout): void {
        setShoutouts(prev => [... prev, shoutout]);
    }

    return (
        <div className='ShoutoutList'>
            <h2>All Shout Outs</h2>
            <ul>
                {shoutouts.map(shoutout =>
                    <li key={shoutout.to} >{shoutout.to} (from: {shoutout.from}) (comment: {shoutout.comment})</li>)}
            </ul>
            <ShoutoutForm onSubmit={handleAddShoutout}/>
        </div>
    );
}

export default ShoutoutList;