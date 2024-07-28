'use client';
import React, { useState, useEffect } from 'react';

const code = `import React from 'react';
import {
    RiEye2Line,
    RiEyeCloseLine
} from '@remixicon/react';

export default function Eye({show, setShow}) {

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <button onClick={handleClick} className="w-auto h-auto flex items-center justify-center">
            {  show ? <RiEye2Line /> : <RiEyeCloseLine /> }
        </button>
    )
}`;

const CodeEye = () => {
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
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default CodeEye;
