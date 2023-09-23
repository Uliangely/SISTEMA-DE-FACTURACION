import React from "react";
import Image from 'next/image'
import Link from 'next/link'
 
export default function Login () {
  return (
    <>

<section className="h-full bg-gray-50 dark:bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-950">
                <Image

                 className="w-8 h-8 mr-2" 
                 src="/logo.svg" 
                 alt="logo"
                 width={100}
                 height={24}
                 priority

                 />

                tiendanube   
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Escriba su usuario
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carnet</label>
                            <input 
                            type="text" 
                            name="text" 
                            id="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Escriba aquí..." 
                            required=""/>
                        </div>

                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Escriba Aquí..." 
                            required=""/>
                        </div>

                        <button type="submit" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar Sesión</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-700">
                    ¿No te haz registrado? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-Emerald-400">Registrarme</a>
                    </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    
    
    </>
  )
}