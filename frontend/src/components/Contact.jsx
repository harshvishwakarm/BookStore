import React from 'react';
import Navbar from './Navbar.jsx';

function Contact() {
  
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center ml-40 border-black-[1px]">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog" className="dark:bg-slate-900 dark:text-white">
              {/* if there is a button in form, it will close the modal */}
              <h3 className="font-bold text-lg">Contact</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Enter your message"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                />
              </div>
              {/* Button */}
              <div className="flex justify-around mt-6">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-900 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
