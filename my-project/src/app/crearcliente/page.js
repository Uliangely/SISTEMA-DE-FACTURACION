"use client";

import { React, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRouter } from 'next/navigation';

export default function Crearcliente() {
  const router = useRouter()

  const [showError, setShowErr] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [identificationDocument, setIdentificationDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowErr(false);


    // Validar el formulario
    if (name === "") {
      alert("Error, nombre vacío");
      return;
    }

    if (lastname === "") {
      alert("Error, apellido vacío");
      return;
    }

    if (identificationDocument === "") {
      alert("El campo de identificación debe estar lleno");
      return;
    } 
    
    if (isNaN(identificationDocument)) {
      alert("El campo de identificación debe contener solo números");
      return;
    }

    if (phone.length === 0) {
      alert("El campo de telefono debe estar lleno");
      return;
    }

    if (!phone.match(/^[0-9]+$/)) {
      alert("El campo de número de teléfono debe tener 10 dígitos numéricos");
      return;
    }

    if (address === "") {
      alert("Error, direccion vacía");
      return;
    }

    // Enviar el formulario
    console.log(name, lastname, identificationDocument, phone, address);


    const response = await fetch("api/cliente", {
      method: "POST",
      body: JSON.stringify({  name, lastname, identificationDocument, phone, address  }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    // Mostramos el mensaje de error.
    if (response.status != 201) {
      setShowErr(true);
      return;
    }
    //SE ENVIA AL LOGIN
    router.push('/sistema')

  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <Navbar />

        <section className="h-full bg-gray-50 dark:bg-white">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Registro de cliente
                </h1>

                <div>
                  {showError && (
                    <h1 className="text-red-600 text-sm">
                      Lo sentimos, pero la cedula <span className="font-bold">{identificationDocument}</span> que ingresaste ya
                      está en uso. ¿Te gustaría intentar con otra?
                    </h1>
                  )
                  }
                </div>


                <form
                  onSubmit={onSubmit}
                  className="space-y-4 md:space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Escriba aquí..."
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      id="lastname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Escriba aquí..."
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="identificationDocument"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Documento de identidad del cliente:
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="identificationDocument"
                        value={identificationDocument}
                        onChange={(e) =>
                          setIdentificationDocument(e.target.value)
                        }
                        id="identificationDocument"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escriba Aqui..."
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          id="tipo_docuemnto"
                          name="tipo_docuemnto"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>V</option>
                          <option>E</option>
                          <option>P</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Numero telefonico
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Escriba aquí..."
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Direccion
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Escriba aquí..."
                      required=""
                    />
                  </div>

                  {/* <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre cajero</label>
                            <input 
                            type="text" 
                            name="text" 
                            id="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Escriba aquí..." 
                            required=""/>
                        </div> */}

                  <button
                    type="submit"
                    className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Crear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
