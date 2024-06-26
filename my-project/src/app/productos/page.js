"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fecth } from "../services/fecth";
// import React from "react";
import Navbar from "../components/Navbar";

export default function Productos() {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  //API

  useEffect(() => {
    (async () => {
      const res = await fecth({ url: "http://localhost:3000/api/producto" });

      if (res) setProduct(res.result);
    })();
  }, []);

  // useEffect(() => {

  // }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 fixed h-full w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <Navbar />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre del producto
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Editar
                </th> */}
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.nombre_producto}
                  </th>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.cantidad_producto}</td>
                  <td className="px-6 py-4">{item.precio_producto}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 ms-8">
          <button
            onClick={() => router.push("../agregar")}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Agregar Producto
          </button>
        </div>
      </div>
    </>
  );
}
