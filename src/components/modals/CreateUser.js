'use client'
import React, { useState } from 'react';

const CrateUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => {
        setIsOpen(false);
    }
    const addNewUser = async (event) => {
        event.preventDefault();
        const { name, email, address, username, phone } = event.target.elements;
        let data =
        {
            name: name.value,
            username: username.value,
            email: email.value,
            address: address.value,
            phone: phone.value
        }
        const res = await fetch('http://localhost:3001/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        setIsOpen(false);
    }

    return (
        <>
            <button
                onClick={openDialog}
                className="select-none self-end mb-5 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white "
            >
                Add User
            </button>
            {isOpen && (
                <form className="max-w-sm mx-auto" onSubmit={addNewUser}>
                    <div
                        className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
                    >
                        <div
                            className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
                        >
                            <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                                Create New User
                            </div>
                            <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                                <div className="mb-5">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                                    <input name='name' className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5  " required />
                                </div>
                                <div className="mb-5">
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input name='username' className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 " />
                                </div>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input name='email' className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5  " required />
                                </div><div className="mb-5">
                                    <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <input name='address' className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5  " required />
                                </div><div className="mb-5">
                                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
                                    <input name='phone' className="bg-gray-50 border  text-sm rounded-lg block w-full p-2.5  " />
                                </div>


                            </div>
                            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                                <button
                                    onClick={closeDialog}
                                    type='button'
                                    className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default CrateUser;

