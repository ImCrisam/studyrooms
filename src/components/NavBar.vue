<template>
  <div class="relative bg-yellow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center  py-4 md:justify-start md:space-x-6"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img class=" h-14" :src="logo" alt="studyRooms" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex lg:space-x-16  space-x-5 my-auto">
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Inicio
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Cursos
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Servicios
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Academia
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Blog
          </a>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
       
          <a
            href="#"
            class=" rounded-full py-2 px-8 text-blue bg-white hover:bg-blue hover:text-white "
          >
            Ingresar
          </a>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->

    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 "
      >
        <div class="pt-5 pb-6 px-5 bg-yellow">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="h-12 w-auto"
                :src="logo"
                alt="logo"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset"
                aria-hidden="false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8 bg-yellow">
               <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Inicio
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Cursos
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Servicios
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Academia
          </a>
          <a
            href="#"
            class="text-base font-semibold text-white hover:text-blue hover:underline"
          >
            Blog
          </a>

            </nav>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      logo: require("../assets/logo-nav.svg")
    };
  }
};
</script>

<style></style>
