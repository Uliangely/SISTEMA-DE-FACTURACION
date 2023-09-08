import Image from 'next/image'

export default function Registro() {
    return  (
<>
    <section className="bg-gray-50 dark:bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-950">
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
                       
            <div class=" p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Crear Cuenta
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="text" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950">Nombre</label>
                        <input
                        type="text" 
                        name="text"
                        id="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Escriba su nombre" 
                        required=""/>
                    </div>

                    <div>
                        <label for="text" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950">Apellido</label>
                        <input
                        type="text" 
                        name="text" 
                        id="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Escriba su apellido" 
                        required=""/>
                    </div>

                    <div>
                        <label for="text" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950">Carnet</label>
                        <input
                        type="text" 
                        name="text" 
                        id="text" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Escriba su número de carnet" 
                        required=""/>
                    </div>
                    
                    <div>
                        <label for="password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950">Contraseña</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required=""/>
                    </div>
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-950">Confirme su contraseña</label>
                        <input 
                        type="confirm-password" 
                        name="confirm-password" 
                        id="confirm-password" 
                        placeholder="••••••••" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-slate-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required=""/>
                    </div>
                  
                    <button type="submit" class="w-full text-gray-950 bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrarme</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-700">
                    ¿Ya tienes una cuenta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-Emerald-400">Ir a login</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  </>
    )
}

