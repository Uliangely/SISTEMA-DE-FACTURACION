"use client";

import { React, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Cliente() {
  const router = useRouter();

  const [showErr, setShowErr] = useState("");
  const [identificationDocument, setIdentificationDocument] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("HERE");
    setShowErr(false);

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

    const response = await fetch("api/dash", {
      method: "POST",
      body: JSON.stringify({ identificationDocument }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (response.status != 200) {
      // MUESTAS MENSAJE
      setShowErr(true);
      return;
    }

    const { result } = await response.json();
    localStorage.setItem("user", JSON.stringify(result));
    router.push("/sistema");
  };

  return (
    <>
      <div className="bg-gray-900 dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <Navbar />

        <div className="h-full bg-gray-50 bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="w-96">
                  <h1>Documento de identidad del cliente:</h1>

                  <div>
                    {showErr && (
                      <h1 className="text-red-600 text-sm">
                        La cedula que ingresaste no existe en nuestro sistema.
                        ¿Te gustaría intentarlo de nuevo?
                      </h1>
                    )}
                  </div>

                  <form
                    onSubmit={onSubmit}
                    className="space-y-4 md:space-y-6"
                    action="#"
                  >
                    <div>
                      <label
                        htmlFor="lisence"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >

                      </label>
                      <input
                        type="text"
                        name="identificationDocument"
                        value={identificationDocument}
                        onChange={(e) =>
                          setIdentificationDocument(e.target.value)
                        }
                        id="identificationDocument"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Escriba aquí..."
                        required=""
                      />
                    </div>
                    <div className="w-1/2 mt-6 flex md:order-2">
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Crear cliente
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
