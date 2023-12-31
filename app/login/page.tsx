import React from 'react';

const Login = () => {
  return (
    <div className="mt-12 flex items-center justify-center ">
      <div className="px-10 py-12 md:px-12 md:py-16 flex flex-col gap-10 bg-stone-200 dark:bg-slate-800 rounded-lg">
        <button className=" button-google-light p-2 dark:button-google-dark rounded-lg text-sm md:text-base">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
