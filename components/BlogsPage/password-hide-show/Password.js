import React from 'react';
import PasswordInput from './PasswordInput';
import Homebutton from "../HomeButton";
import Explanation from './Explanation';

const Password = () => {
    return (
        <div className="w-[100vw] min-h-screen p-5 md:p-10 relative bg-zinc-900 text-white overflow-hidden">
            <Homebutton />
            <div className="absolute w-72 h-72 bg-blue-400 blur-[200px] left-96"></div>
            <div className="mt-10 flex flex-col items-center justify-center">
                <h1 className="text-3xl text-center z-10">Password Hide and Show in React</h1>
                <div className="flex flex-col items-center mt-5">
                    <h2 className="z-10">Aman Sharma</h2>
                    <h2 className="text-xs z-10">Thu | 12 July 2024 | 10:14 pm</h2>
                </div>
            </div>
            <div className="w-full min-h-[40vh] rounded-[30px] bg-zinc-700/30 flex items-center justify-center mt-10 p-5">
                <PasswordInput />
            </div>
            <div className="h-full w-full flex justify-center mt-10">
                <Explanation />
            </div>
        </div>
    );
}

export default Password;
