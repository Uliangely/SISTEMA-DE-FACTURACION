import Image from 'next/image'

export default function productos() {
    return  (
<>

{/* Menú Principal */}

    <div class="min-h-screen flex flex-row bg-gray-100">
        <div class="flex flex-col w-56 bg-gray-600 rounded-r-3xl overflow-hidden">
          <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-yellow-500">Vecinos</h1>
          </div>
          <ul class="flex flex-col py-4">
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800" >
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                <span class="text-sm font-medium">Home</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                <span class="text-sm font-medium">Perfiles</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                <span class="text-sm font-medium">Usuario</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-sm font-medium">Productos</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                <span class="text-sm font-medium">Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </div>


        <div class="bg-white">

{/* Título de la pagina y guías  */}

    <div class="min-w-screen bg-white py-5">
      <div class="px-5">
      
        <div class="mb-2">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Productos</h1>
        </div>
        <div class="mb-5 text-gray-400">
            <a href="index.html" class="focus:outline-none hover:underline text-gray-500">Home</a> / <span class="text-gray-600">Productos</span>
        </div> 
      </div> 
    </div> 

            {/* <div class="w-64  h-10 inset-x-0 top-0 ml-16 mt-2">
                <h1 class="text-gray-400 text-3xl"> Menú/Productos</h1>
              </div>  */}

{/* Productos  */}

            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            
              <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                <a href="#" class="group">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">                   
                    <Image

                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src="/Harina.png"
                    alt="logo"
                    width={100}
                    height={24}
                    priority
                    />

                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">Harina Pan</h3>
                  <p class="mt-1 text-sm text-gray-500">1kg</p>
                  <p class="mt-1 text-lg font-medium text-gray-900">$2</p>
                </a>

             
                <a href="#" class="group">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image

                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        src="/mantequilla.jpeg"
                        alt="logo"
                        width={100}
                        height={24}
                        priority

                        />

                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">Mantequilla</h3>
                  <p class="mt-1 text-sm text-gray-500">500g</p>
                  <p class="mt-1 text-lg font-medium text-gray-900">$2,5</p>
                </a>

                <a href="#" class="group">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                 <Image

                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src="/mayonesa.png"
                    alt="logo"
                    width={100}
                    height={24}
                    priority
                    />

                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">Mayonesa</h3>
                  <p class="mt-1 text-sm text-gray-500">445g</p>
                  <p class="mt-1 text-lg font-medium text-gray-900">$3,5</p>
                </a>

                
                <a href="#" class="group">
                  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image

                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        src="/azucar.jpeg"
                        alt="logo"
                        width={100}
                        height={24}
                        priority
                        />

                  </div>
                  <h3 class="mt-4 text-sm text-gray-700">Azúcar</h3>
                  <p class="mt-1 text-sm text-gray-500">1kg</p>
                  <p class="mt-1 text-lg font-medium text-gray-900 text-left">$2</p>
                </a>
          
                
              </div>
            </div>
          </div>
          
        </div>
</>
    )
}