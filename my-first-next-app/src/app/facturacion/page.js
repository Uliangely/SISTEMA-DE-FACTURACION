// import Image from 'next/image'

// export default function facturación() {
//     return (
//         <>
        
//         {/* Menú Principal  */}

// <div class="min-h-screen flex flex-row bg-gray-100">
//   <div class="flex flex-col w-56 bg-gray-600 rounded-r-3xl overflow-hidden">
//     <div class="flex items-center justify-center h-20 shadow-md">
//       <h1 class="text-3xl uppercase text-yellow-500">Vecinos</h1>
//     </div>
//     <ul class="flex flex-col py-4">
//       <li>
//         <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800" >
//           <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
//           <span class="text-sm font-medium">Home</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
//           <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
//           <span class="text-sm font-medium">Perfiles</span>
//         </a>
//       </li>
//       <li>
//         <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
//           <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
//           <span class="text-sm font-medium">Usuario</span>
//         </a>
//       </li>
//       <li>
//         <a href="Productos.html" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
//           <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
//           <span class="text-sm font-medium">Productos </span>
//         </a>
//       </li>
//       <li>
//         <a href="login.html" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-50 hover:text-gray-800">
//           <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
//           <span class="text-sm font-medium">Cerrar Sesión</span>
//         </a>
//       </li>
//     </ul>
//   </div>


//  {/* modulo de facturación  */}

// <div class="min-w-screen min-h-screen bg-gray-50 py-5">

// {/* Título de la pagina y guías  */}
  
//     <div class="px-5">

//         <div class="mb-2">
//             <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Facturación</h1>
//         </div>
//         <div class="mb-5 text-gray-400">
//             <a href="index.html" class="focus:outline-none hover:underline text-gray-500">Home</a> / <span class="text-gray-600">Facturación</span>
//         </div>
//     </div>

//     <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
//         <div class="w-full">
//             <div class="-mx-3 md:flex items-start">
//                 <div class="px-3 md:w-7/12 lg:pr-10">
//                     <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
//                         <div class="w-full flex items-center">
//                             <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">

//                                 <Image

//                                 className="w-8 h-8 mr-2"
//                                 src="/Harina.png"
//                                 alt=""
//                                 width={100}
//                                 height={24}
//                                 priority

//                                 />

//                             </div>
//                             <div class="flex-grow pl-3">
//                                 <h6 class="font-semibold uppercase text-gray-600">Harina Pan</h6>
//                                 <p class="text-gray-400">x 1</p>
//                             </div>
//                             <div>
//                                 <span class="font-semibold text-gray-600 text-xl">$2</span><span class="font-semibold text-gray-600 text-sm">.00</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="mb-6 pb-6 border-b border-gray-200">
//                         <div class="-mx-2 flex items-end justify-end">
//                             <div class="flex-grow px-2 lg:max-w-xs">
//                                 <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Código de Descuento</label>
//                                 <div>
//                                     <input class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text"/>
//                                 </div>
//                             </div>
//                             <div class="px-2">
//                                 <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">Aplicar</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
//                         <div class="w-full flex mb-3 items-center">
//                             <div class="flex-grow">
//                                 <span class="text-gray-600">Subtotal</span>
//                             </div>
//                             <div class="pl-3">
//                                 <span class="font-semibold">$2.00</span>
//                             </div>
//                         </div>
//                         <div class="w-full flex items-center">
//                             <div class="flex-grow">
//                                 <span class="text-gray-600">Impuestos</span>
//                             </div>
//                             <div class="pl-3">
//                                 <span class="font-semibold">$1</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
//                         <div class="w-full flex items-center">
//                             <div class="flex-grow">
//                                 <span class="text-gray-600">Total</span>
//                             </div>
//                             <div class="pl-3">
//                                 <span class="font-semibold text-gray-400 text-sm">Dólares</span> <span class="font-semibold">$3</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="px-3 md:w-5/12">
//                     <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
//                         <div class="w-full flex mb-3 items-center">
//                             <div class="w-32">
//                                 <span class="text-gray-600 font-semibold">Contacto</span>
//                             </div>
//                             <div class="flex-grow pl-3">
//                                 <span>Vecinos</span>
//                             </div>
//                         </div>
//                         <div class="w-full flex items-center">
//                             <div class="w-32">
//                                 <span class="text-gray-600 font-semibold">Dirección</span>
//                             </div>
//                             <div class="flex-grow pl-3">
//                                 <span>Av.Sucre</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
//                         <div class="w-full p-3 border-b border-gray-200">
  
//                             <div>

//                               <div class="w-full rounded-lg bg-gray-200 p-5 w-2/4">
//                               <p>Seleccione un cliente</p>
//                               <div class="flex">
//                                 <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
//                                     <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
//                                     <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
//                                   </svg>
//                                 </div>
//                                 <input type="text"  class="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
//                                 <input type="button" value="+ Agregar" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
//                             </div>
//                           </div>

//                           <div class="flex items-center justify-center p-5 mb-3 mt-3 w-full">
//                             <div class="w-full rounded-lg bg-gray-200 p-5 w-2/4">
//                                 <p>Título de la Factura</p>
//                               <div class="flex">
//                                 <input type="text"  class="w-full h-9 rounded-md bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
//                             </div>
//                             </div>
//                           </div>

//                                 <div class="mb-3 -mx-2 flex items-end">
//                                     <div class="px-2 w-1/4">
//                                         <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Emisión</label>
//                                         <div>
//                                             <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
//                                                 <option value="01">01 - January</option>
//                                                 <option value="02">02 - February</option>
//                                                 <option value="03">03 - March</option>
//                                                 <option value="04">04 - April</option>
//                                                 <option value="05">05 - May</option>
//                                                 <option value="06">06 - June</option>
//                                                 <option value="07">07 - July</option>
//                                                 <option value="08">08 - August</option>
//                                                 <option value="09">09 - September</option>
//                                                 <option value="10">10 - October</option>
//                                                 <option value="11">11 - November</option>
//                                                 <option value="12">12 - December</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div class="px-2 w-1/4">
//                                         <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
//                                             <option value="2020">2020</option>
//                                             <option value="2021">2021</option>
//                                             <option value="2022">2022</option>
//                                             <option value="2023">2023</option>
//                                             <option value="2024">2024</option>
//                                             <option value="2025">2025</option>
//                                             <option value="2026">2026</option>
//                                             <option value="2027">2027</option>
//                                             <option value="2028">2028</option>
//                                             <option value="2029">2029</option>
//                                         </select>
//                                     </div>
//                                 </div>


//                                 <div class="mb-3 -mx-2 flex items-end">
//                                   <div class="px-2 w-1/4">
//                                       <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Vencimiento</label>
//                                       <div>
//                                           <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
//                                               <option value="01">01 - January</option>
//                                               <option value="02">02 - February</option>
//                                               <option value="03">03 - March</option>
//                                               <option value="04">04 - April</option>
//                                               <option value="05">05 - May</option>
//                                               <option value="06">06 - June</option>
//                                               <option value="07">07 - July</option>
//                                               <option value="08">08 - August</option>
//                                               <option value="09">09 - September</option>
//                                               <option value="10">10 - October</option>
//                                               <option value="11">11 - November</option>
//                                               <option value="12">12 - December</option>
//                                           </select>
//                                       </div>
//                                   </div>
//                                   <div class="px-2 w-1/4">
//                                       <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
//                                           <option value="2020">2020</option>
//                                           <option value="2021">2021</option>
//                                           <option value="2022">2022</option>
//                                           <option value="2023">2023</option>
//                                           <option value="2024">2024</option>
//                                           <option value="2025">2025</option>
//                                           <option value="2026">2026</option>
//                                           <option value="2027">2027</option>
//                                           <option value="2028">2028</option>
//                                           <option value="2029">2029</option>
//                                       </select>
//                                   </div>
//                                   <div class="px-2 w-1/4">
//                                       <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Código de seguridad</label>
//                                       <div>
//                                           <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
//                                       </div>
//                                   </div>
//                               </div>




//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                           <span class="text-gray-600 font-semibold text-sm mb-2 ml-1">Método de pago</span>
//                             <label for="type2" class="flex items-center cursor-pointer"> Divisas
//                                 <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
//                             </label>
//                             <label for="type2" class="flex items-center cursor-pointer"> Trajeta (Bolívares)
//                               <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
//                           </label>
//                         </div>
//                     </div>
//                     <div>
//                         <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> Generar Factura</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </div>

//         </>
//     )
// }
