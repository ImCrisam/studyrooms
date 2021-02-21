<template>
  <div class="relative bg-primary">
    <!--  -> no mobile -->
    <div class=" mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center  py-4 md:justify-start md:space-x-6"
      >
        <!--  -> logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img class=" h-14" :src="logo" alt="studyRooms" />
          </a>
        </div>
        <!--  <- logo -->
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="hiddenMenu = !hiddenMenu"
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
        <!--  -> menu -->
        <nav
          class="hidden md:inline-flex lg:space-x-16  space-x-5 my-auto inline-block"
        >
          <a
            v-for="item in itemsMenu"
            :key="item.name"
            :href="item.url"
            class="text-base font-semibold text-white hover:text-secondary hover:underline my-auto"
          >
            {{ item.name }}
          </a>
          <div class="flex justify-around">
            <a
              v-for="item in btnMenu"
              :key="item.name"
              :href="item.url"
              class=" rounded-full  ml-12 py-2 px-8 text-secondary bg-white hover:bg-secondary hover:text-white "
            >
              {{ item.name }}
            </a>
          </div>
     
        </nav>
        <!--  <- menu -->
      </div>
    </div>
    <!--  <- no mobile -->

    <!--  ->  mobile -->
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right "
      :class="{ hidden: hiddenMenu }"
    >
      <div
        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 "
      >
        <div class="pt-5 pb-6 px-5 bg-primary">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-12 w-auto" :src="logo" alt="logo" />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset"
                aria-hidden="false"
                @click="hiddenMenu = true"
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
            <nav class="grid gap-y-8 bg-primary">
              <a
                v-for="item in itemsMenu"
                :key="item.name"
                :href="item.url"
                class="text-base font-semibold text-white hover:text-secondary hover:underline"
              >
                {{ item.name }}
              </a>
              <div class="flex justify-around">
                <a
                  v-for="item in btnMenu"
                  :key="item.name"
                  :href="item.url"
                  class=" rounded-full py-2 px-8 text-secondary bg-white hover:bg-secondary hover:text-white "
                >
                  {{ item.name }}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--  <-  mobile -->
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      hiddenMenu: true,
      logo: require("../assets/logo-nav.svg"),
      itemsMenu: [
        { name: "Inicio", to: "#" },
        { name: "Cursos", to: "#" },
        { name: "Servicios", to: "#" },
        { name: "Academia", to: "#" },
        { name: "Blog", to: "#" }
      ],
      btnMenu: [{ name: "Ingresar", to: "#" }]
    };
  }
};
</script>

<style></style>
