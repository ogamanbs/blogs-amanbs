'use client'
import React, { useState, useEffect } from 'react';

const code = `import './App.css';
import React from 'react';
import PasswordInput from './Components/PasswordInput';

export default function App() {
    return(
        <div className="min-h-screen w-full bg-zinc-900 flex items-center justify-center">
            <PasswordInput />
        </div>
    )
}
`;

const CodeApp = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const fetchCodeToHtml = async () => {
      // Dynamically import Shiki
      const shiki = await import('shiki');
      const { codeToHtml } = shiki;

      // Convert code to HTML
      const result = await codeToHtml(code, {
        lang: 'javascript',
        theme: 'slack-dark',
      });

      // Set the HTML result
      setHtml(result);
    };

    fetchCodeToHtml();
  }, []);

  return (
    <div className="h-auto w-full p-3 text-xs overflow-x-auto">
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
};

export default CodeApp;
