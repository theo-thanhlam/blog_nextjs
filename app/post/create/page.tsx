'use client';
import { ThemeContext } from '@/context/themeContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import '@/styles/createPost.css';
import 'react-quill/dist/quill.bubble.css';

const CreatePostPage = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState('');

  return (
    <div className="relative flex flex-col mt-5">
      <input
        type="text"
        placeholder="Title"
        className="py-12 px-2 text-5xl border-none outline-none bg-transparent"
      />
      <div className="editor">
        <button type="button" className="button" onClick={() => setOpen(!open)}>
          <Image
            src={
              theme === 'light'
                ? '/icons/plus_light.png'
                : '/icons/plus_dark.png'
            }
            alt=""
            width={16}
            height={16}
          />
        </button>
        {open && (
          <div className="add ">
            <button type="button" className="addButton">
              <Image
                src={
                  theme === 'light'
                    ? '/icons/image_light.png'
                    : '/icons/image_dark.png'
                }
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button type="button" className="addButton">
              <Image
                src={
                  theme === 'light'
                    ? '/icons/video_light.png'
                    : '/icons/video_dark.png'
                }
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button type="button" className="addButton">
              <Image
                src={
                  theme === 'light'
                    ? '/icons/external_light.png'
                    : '/icons/external_dark.png'
                }
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
        )}

        <ReactQuill
          theme="bubble"
          placeholder="Write something...."
          className="w-full placeholder:left-0"
          value={value}
          onChange={setValue}
        />
      </div>
      <button className="absolute top-0 right-0 px-3 py-2 button-light dark:button-dark rounded-full">
        Publish
      </button>
    </div>
  );
};

export default CreatePostPage;
