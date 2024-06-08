"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()

  const [carnet, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [showErr, setShowErr] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowErr(false);

    // Validar el formulario

    if (carnet.length === 0) {
      alert("Error, carnet vacío");
      return;
    }

    if (password.length === 0) {
      alert("Error, contrasena vacía");
      return;
    }

    // Enviar el formulario
    console.log(carnet, password);

    const response = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ carnet, password }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (response.status != 200) {
      // MUESTAS MENSAJE
      setShowErr(true);
      return;
    } 
    const { result } = await response.json()
    localStorage.setItem("user", JSON.stringify(result));
    router.push('/productos')
  };

  return (
    <>
      <section className="h-full bg-gray-50 bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white "
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

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Escriba su usuario
              </h1>
              <div>
                {showErr && (
                  <h1 className="text-red-600 text-sm">
                    El carnet que ingresaste no existe en nuestro sistema. ¿Te
                    gustaría intentarlo de nuevo?
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
                    className="block mb-2 text-sm font-medium text-gray-900 text-white"
                  >
                    Carnet
                  </label>
                  <input
                    type="text"
                    name="lisence"
                    value={carnet}
                    onChange={(e) => setLicense(e.target.value)}
                    id="lisence"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escriba aquí..."
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Escriba Aquí..."
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Iniciar Sesión
                </button>
                <p className="text-sm font-light text-white">
                  ¿No te haz registrado?{" "}
                  <a
                    href="../registro"
                    className="font-medium text-primary-600 hover:underline text-blue-400"
                  >
                    Registrarme
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
