"use client";

import { React, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Registro() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassworde] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Validar el formulario
    if (name.length === 0) {
      alert("Error, nombre vacío");
      return;
    }

    if (lastname.length === 0) {
      alert("Error, apellido vacío");
      return;
    }

    if (license.length === 0) {
      alert("Error, carnet vacío");
      return;
    }

    if (password === confirmpassword) {
    } else {
      alert("Contrasenas no coinciden");
    }

    // Enviar el formulario
    console.log(name, lastname, license, password, confirmpassword);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-950"
          >
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

          <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:gray-50 dark:border-white">
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Crear Cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escriba su nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escriba su apellido"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="license"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950"
                  >
                    Carnet
                  </label>
                  <input
                    type="text"
                    name="license"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    id="license"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escriba su número de carnet"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmpassword"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950"
                  >
                    Confirme su contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassworde(e.target.value)}
                    placeholder="••••••••"
                    id="confirmpassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Registrarme
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-700">
                  ¿Ya tienes una cuenta?{" "}
                  <a
                    href="../login"
                    className="font-medium text-primary-600 hover:underline dark:text-Emerald-400"
                  >
                    Ir a login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
