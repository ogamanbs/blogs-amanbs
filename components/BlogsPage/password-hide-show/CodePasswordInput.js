'use client';
import React, { useState, useEffect } from 'react';

const code = `'use client'
import React, {useState} from 'react';
import Eye from './Eye';

const PasswordInput = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-full md:w-1/4 h-auto border border-zinc-100 rounded-full flex items-center justify-center px-5 py-2 gap-2 z-10">
            <input
                type={show ? 'text' : 'password'}
                placeholder="password"
                className="w-full outline-none bg-transparent bg-red-500"
            />
            <Eye show={show} setShow={setShow} />
        </div>
    )
}

export default PasswordInput;`;

const CodePasswordInput = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const fetchCodeToHtml = async () => {
      const shiki = await import('shiki');
      const { codeToHtml } = shiki;
      const result = await codeToHtml(code, {
        lang: 'javascript',
        theme: 'slack-dark',
      });
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

export default CodePasswordInput;
