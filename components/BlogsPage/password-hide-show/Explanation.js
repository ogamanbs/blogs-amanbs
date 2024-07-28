'use client'
import React from 'react';
import OneCopy from './OneCopy';
import CodePasswordInput from './CodePasswordInput';
import CodeEye from './CodeEye';
import CodeApp from './CodeApp';
import TwoCopy from './TwoCopy';

const Explanation = () => {
    return (
        <div className="h-full w-full md:w-[60%] bg-zinc-700/30 py-10 px-5 md:p-10 rounded-[30px] text-sm">
            <p className="">We will be making it in React and be using the simple <a className="text-blue-300" href="https://react.dev/learn/conditional-rendering#conditional-ternary-operator--">conditional rendering</a> in react to achieve this.</p>
            <p className="mt-2">First,  let us discuss what is actually happenning and how are we going to tackle it ?</p>
            <p className="">So, There are mainly two parts which are responding to the onClick event: </p>
            <p className="mt-2">1. <span className="font-bold">The Eye button</span> : It is being changed from the &#34;Eye Closed&#34; to &#34;Eye Open&#34; button</p>
            <p className="mt-2">2. <span className="font-bold">The input type</span> : It is being changed from the type=&#34;password&#34; to type=&#34;text&#34;</p>
            <p className="mt-2">So we just need to render these two things conditionally</p>
            <p className="mt-2">Let&#39;s discuss how to create it step by step</p>
            <a href="#react-app-setup"><h1 id="rect-app-setup" className="text-xl mt-5 mb-3">Step 1: React App Setup</h1></a>
            <p className="">First, Make a directory and name it  &#34;<span className="text-lime-300">react-project</span>&#34;</p>
            <p className="">Then, create React app, using following command and type or paste it in terminal:</p>
            <div className="mt-5 mb-5 relative w-full bg-zinc-900 px-5 py-2 rounded-[10px] flex justify-between text-xs">
                <code>npx create-react-app@latest .<br/>npm i @remixicon/react</code>
                <OneCopy />
            </div>
            <p className="">When you will get all the files downloaded in your project directory</p>
            <ul className="list-disc">
                <li className="">In the src folder create a <span className="text-lime-300">Components</span> directory</li>
                <li className="">In public folder open <span className="text-lime-300">index.js</span> and add the <a className="text-blue-300" href="https://tailwindcss.com/docs/installation/play-cdn">Tailwind CSS CDN</a> in the head tag in it.</li>
                <li className="">Now, you can easily use the tailwind css in your react app
                    <div className="w-full h-full bg-red-500/20 p-5 mt-5 mb-5 rounded-[10px]">
                        <h1 className="text-red-500 font-bold text-xl mb-2">WARNING: </h1>
                        <p>Using Tailwind CSS CDN in your react app is</p>
                        <p>Not recommended for production, Only for this tutorial or just when you focus on practicing react</p>
                        <p>SHOULD NOT BE USED WHILE DEPLOYING YOUR APPLICATION</p>
                        <p>For deploying follow tailwind css official documentation for react app integration of tailwind.</p>
                        <p className="mt-2 mb-2">But still if you want to use this method of tailwind integration with react, then you should go for it, try exploring this side, that why is it not recommended ?  or what are the drawbacks of using this method while deploying ? or are there actuall consequences or they are just making a fool of yours ? EXPLORE!!</p>
                        <p>Good Luck!</p>
                    </div>
                </li>

                <li className="">In src directory click on <span className="text-lime-300">App.js</span> and remove every thing inside it.</li>
            </ul>
            <p className="">Now, you are ready for going on next step</p>
            <a href="#react-app-setup"><h1 id="rect-app-setup" className="text-xl mt-5 mb-3">Step 2: Setting up Password Input component</h1></a>
            <p className="">In <span className="text-lime-300">./components/</span> create a file named <span className="text-lime-300">PasswordInput.js</span> and write the below written code in it:</p>
            <div className="">
                <CodePasswordInput />
            </div>
            <a href="#react-app-setup"><h1 id="rect-app-setup" className="text-xl mt-5 mb-3">Step 3: Setting up eye component</h1></a>
            <p className="">In <span className="text-lime-300">./components/</span> create a file named <span className="text-lime-300">Eye.js</span> and write the below written code in it:</p>
            <div className="mt-3">
                <CodeEye />
            </div>
            <a href="#react-app-setup"><h1 id="rect-app-setup" className="text-xl mt-5 mb-3">Step 4: Adding the Password Input component in the App to display it</h1></a>
            <p className="">In <span className="text-lime-300">App.js</span>, write the below written code in it:</p>
            <div className="mt-3">
                <CodeApp />
            </div>
            <a href="#react-app-setup"><h1 id="rect-app-setup" className="text-xl mt-5 mb-3">Step 5: Running the react app</h1></a>
            <p className="">Then, run the React App, using following command and type or paste it in terminal:</p>
            <div className="mt-5 mb-5 relative w-full bg-zinc-900 px-5 py-2 rounded-[10px] flex justify-between text-xs">
                <code>npm start</code>
                <TwoCopy />
            </div>
            <p className="">Now open a web browser and go to <a target="__blank" href="http://localhost:3000/"><span className="text-lime-300">http://localhost:3000/</span></a></p>
        </div>
    )
}

export default Explanation;