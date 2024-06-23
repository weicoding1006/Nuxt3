<template>
  <div class="flex gap-3">
    <template v-for="(item,i) in data" :key="item.id">
      <Product @log="showData(item.id)" :title="item.title" :id="item.id" :price="item.price"></Product>
    </template>
  </div>
</template>

<script setup>
  let data = ref([
    {id:1,title:"PS5",price:15000},
    {id:2,title:"GameBoy",price:3000}
  ]);

function showData(id){
  let currentData = data.value.filter((item) => item.id === id);
  console.log(currentData);
};
</script>
