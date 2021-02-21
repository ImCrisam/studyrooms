<template>
  <div class="h-50vh lg:h-75vh bg-secondary lg:bg-cover bg-contain bg-no-repeat bg-right-bottom" :style="{'background-image': 'url('+ img + ')'}">
    <div class=" text-white text-left mx-10 pt-10 md:w-2/5">
      <p class="text-2xl">Formacion Online Para</p>
      <p class="text-primary text-2xl font-bold">Profecionales Tic</p>
      <p class="font-extralight">Sea Dueño de su futuro aprendiendo nuevas habilidades en linea</p>


    </div>

  </div>
</template>

<script>
export default {
name: "SectionSearch",


data(){
  return{
    img: '"'+require('../assets/Seccion1/Grupo 1520.png')+'"',
    img2: "./Grupo 1520.png",
    
  }
}
}
</script>

<style>

.bg-img{
  background-image: img;

}
</style>