import React from 'react';
import {
    RiEye2Line,
    RiEyeCloseLine
} from '@remixicon/react';

const Eye = ({show, setShow}) => {

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <button onClick={handleClick} className="w-auto h-auto flex items-center justify-center">
            {  show ? <RiEye2Line /> : <RiEyeCloseLine /> }
        </button>
    )
}

export default Eye;