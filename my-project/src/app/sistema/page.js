import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Sistema() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">

        <Navbar/>

        <div className="w-1/2 mt-6 mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
          <h2>Datos del cliente</h2>
          <p>
            <strong>Nombre:</strong>
          </p>
          <p>
            <strong>Apellido:</strong>
          </p>
          <p>
            <strong>Cedula:</strong>
          </p>
          <p>
            <strong>Teléfono:</strong>
          </p>
          <p>
            <strong>Direccion:</strong>Buscar producto
          </p>
          <p>
            <strong>Numero de factura:</strong>
          </p>
        </div>

        <div className="w-1/2 mt-6 mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
          <div className="w-80  mt-6 rounded-lg bg-gray-200 p-5 w-2/4">
            <p>Buscar producto</p>
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full bg-white pl-2 text-base font-semibold outline-0"
                placeholder=""
                id=""
              />
              <input
                type="button"
                value="Buscar"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </div>
          </div>
          <div className="flex p-8">
            <div className="flex-initial w-64">
                <span className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Método de pago
                </span>
                <label
                  htmlFor="efectivo"
                  className="flex items-center cursor-pointer"
                >
                  {" "}
                  Efectivo
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="efectivo"
                    id="efectivo"
                  />
                </label>
                <label
                  htmlFor="punto"
                  className="flex items-center cursor-pointer"
                >
                  {" "}
                  Punto de Venta
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="punto"
                    id="punto"
                  />
                </label>
                <label
                  htmlFor="pagoMovil"
                  className="flex items-center cursor-pointer"
                >
                  Pago movil
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="pagoMovil"
                    id="pagoMovil"
                  />
                </label>
            </div>
            <div>
              <div className="flex-initial w-64" >
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                  <div className="w-full flex mb-3 items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$2.00</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Impuestos</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">$1</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold text-gray-400 text-sm">
                        Dólares
                      </span>{" "}
                      <span className="font-semibold">$3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
