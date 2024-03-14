import React from "react";
import { Link } from 'react-router-dom';

export default function Second() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div clasasName="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your Account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Email Address </label>
                            <div className="mt-2">
                                <input id="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-400">Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-300 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                        </div>

                    </form>
                    <p className="mt-10 text-center text-sm text-gray-500"> Not a Member?{" "}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-400">Start a 14 day free trial</a>
                    </p>
                </div>

            </div>

            <div className="text-center">
                <Link to="/" className="mt-10 text-purple-500 font-bold hover:text-gray-900">Go to First Page</Link>
            </div>

        </>

    )

}