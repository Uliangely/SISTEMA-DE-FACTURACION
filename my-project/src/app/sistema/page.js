import React from "react";
import Image from 'next/image'
import Link from 'next/link'
 
export default function Sistema () {
  return (
    <>

<div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flex items-center">

  <Image
      src="/logo.svg"
      width={50}
      height={50}
      alt=""
    />

      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tienda Nube</span>
  </div>

  <div className="flex md:order-2">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cerrar sesion</button>
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <div class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

    <Link href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</Link>

    <Link href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Produtos</Link>

    <Link href="" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Facturas</Link>
    </div>
  </div>
  </div>


                    <div class="w-1/2 mt-6 mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Datos del cliente:</h1>
                        <div class="w-full mt-3 flex mb-3 items-center">
                            <div class="w-42">
                                <span class="text-gray-600 font-semibold">Nombre:</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>**********</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="w-42">
                                <span class="text-gray-600 font-semibold">Apellido:</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>**********</span>
                            </div>
                        </div>
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-42">
                                <span class="text-gray-600 font-semibold">Documento Identidad:</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>**********</span>
                            </div>
                        </div>
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-42">
                                <span class="text-gray-600 font-semibold">N de Factura:</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>**********</span>
                            </div>
                        </div>
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-42">
                                <span class="text-gray-600 font-semibold">Nombre del cajeros:</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>**********</span>
                            </div>
                        </div>
                    </div>



<div  className="w-1/2 h-96 mt-6 mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                    <div class="w-80  mt-6 rounded-lg bg-gray-200 p-5 w-2/4">
                              <p>Buscar producto</p>
                              <div class="flex">
                                <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                    <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                  </svg>
                                </div>
                                <input type="text"  class="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
                                <input type="button" value="Buscar" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                            </div>
                          </div>

                          <div class="w-full mt-16 p-3">
                          <span class="text-gray-600 font-semibold text-sm mb-2 ml-1">Método de pago</span>
                            <label for="type2" class="flex items-center cursor-pointer"> Efectivo
                                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                            </label>
                            <label for="type2" class="flex items-center cursor-pointer"> Punto de Venta
                              <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                          </label>
                          <label for="type2" class="flex items-center cursor-pointer"> Pago movil
                              <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                          </label>
                        </div>


                        {/* <div className="w-96 ">
                        <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div class="w-full flex mb-3 items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Subtotal</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$2.00</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Impuestos</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">$1</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold text-gray-400 text-sm">Dólares</span> <span class="font-semibold">$3</span>
                            </div>
                        </div>
                    </div>
                        </div> */}

</div>







  </div>

    </>
  )
}