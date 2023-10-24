import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Navbar from "../components/Navbar";
 
export default function Facturas () {
  return (
    <>
    <div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
 
 <Navbar/>

  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    ID FACTURA
                </th>
                <th scope="col" className="px-6 py-3">
                    DIA 
                </th>
                <th scope="col" className="px-6 py-3">
                    MES 
                </th>
                <th scope="col" className="px-6 py-3">
                    ANO
                </th>
                <th scope="col" className="px-6 py-3">
                    BORRAR
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    00001
                </th>
                <td className="px-6 py-4">
                    01
                </td>
                <td className="px-6 py-4">
                    09
                </td>
                <td className="px-6 py-4">
                    2023
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Borrar</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   00002
                </th>
                <td className="px-6 py-4">
                    24
                </td>
                <td className="px-6 py-4">
                     07
                </td>
                <td className="px-6 py-4">
                    1999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Borrar</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>







  </div>
    </>
  )
}