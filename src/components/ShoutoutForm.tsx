import { FormEvent, useState } from "react";
import Shoutout from "../models/Shoutout";

interface Props {
    onSubmit: (shoutout: Shoutout) => void;
}

function ShoutoutForm({onSubmit}: Props) {
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const shoutout: Shoutout = {
            to,
            from,
            comment
        };
        onSubmit(shoutout);
        setTo('');
        setFrom('');
        setComment('');
    }

    return (
        <form className='ShoutoutForm' onSubmit={handleSubmit}>
            <p>
                <label htmlFor='ShoutoutForm__to'>
                    To: 
                    <input id='Shoutout__to' value={to} onChange={e => setTo(e.target.value)} />
                </label>
            </p>
            <p>
                <label htmlFor='ShoutoutForm__from'>
                    From:  
                    <input id='Shoutout__from' value={from} onChange={e => setFrom(e.target.value)} />
                </label>
            </p>
            <p>
                <label htmlFor='ShoutoutForm__comment'>
                    Shout Out:
                    <input id='Shoutout__comment' value={comment} onChange={e => setComment(e.target.value)} />
                </label>
            </p>
            <input id='addShoutout' type="submit" value="Submit Shout Out!"/> 
        </form>
    );
}

export default ShoutoutForm;