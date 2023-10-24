"use client"

import { React, useState } from "react";

import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../components/Navbar";
 
export default function Cliente() {
    const [identificationDocument, setIdentificationDocument] = useState("");

const handleChange = (event) => {
  setIdentificationDocument(event.target.value);
};

const handleSubmit = () => {
  // Validar el valor del input
  if (identificationDocument.length === 0) {
    alert("El campo de identificación debe estar lleno");
    return;
  }

  if (isNaN(identificationDocument)) {
    alert("El campo de identificación debe contener solo números");
    return;
  }

  // Enviar el formulario
  console.log(identificationDocument);
};

    
  return (
    
    <>
   
<div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  
  <Navbar/>



<div className="h-full bg-gray-50 dark:bg-white">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

        <div className="w-96">
            <label htmlFor="identification_document" className="block text-sm font-medium leading-6 text-gray-900">Documento de identidad del cliente:</label>

            <div className="relative mt-2 rounded-md shadow-sm">
                <input type="text" 
                name="identificationDocument"
                value={identificationDocument}
                onChange={handleChange}
                id="identificationDocument" 
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                placeholder="Escriba Aqui..."/>

                <div className="absolute inset-y-0 right-0 flex items-center">
                    <select id="tipo_docuemnto" name="tipo_docuemnto" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                        <option>V</option>
                        <option>E</option>
                        <option>P</option>
                    </select>
                </div>
            </div>

            </div>

            <div className="mt-6 flex md:order-2">
                <button href="/src/app/crearcliente/page.js" type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear cliente</button>
            </div>
        </div>
        </div>
    </div>
</div>



</div>


  </>
  )
}