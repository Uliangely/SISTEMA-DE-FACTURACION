"use client";

import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Agregar() {
  const [nameproduct, setNameproduct] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Validar el formulario
    if (nameproduct.length === 0) {
      alert("Error, ingrese un nombre para el producto");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Error, ingrese una cantidad válida");
      return;
    }

    if (!isNaN(price) && price.match(/^[0-9]+(\.[0-9]{1,2})?$/)) {
      alert("Error, ingrese un precio válido");
    } else if (price.length === 0) {
      alert("Error, ingrese un precio para el producto");
    }

    // Enviar el formulario
    console.log(nameproduct, price, amount);
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
                  Agregar Producto
                </h1>
                <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="nameproduct"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre del producto
                    </label>
                    <input
                      type="text"
                      name="nameproduct"
                      value={nameproduct}
                      onChange={(e) => setNameproduct(e.target.value)}
                      id="nameproduct"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Escriba aquí..."
                      required=""
                    />
                  </div>

                  {/* <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                            <input 
                            type="text" 
                            name="text" 
                            id="text" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Escriba aquí..." 
                            required=""/>
                        </div> */}

                  <div>
                    <label
                      htmlFor="amount"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      cantidad
                    </label>

                    <input
                      type="number"
                      name="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      id="amount"
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />

                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Precio
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0,00"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Agregar
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
