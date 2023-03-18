<template>
    <div class="column is-2">
        <div class="box">
            <figure class="image mb-4">
                <img v-bind:src="icon_src">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToolBox',
    props: {
        icon_src: String
    }
}
</script>

<style scoped>

  .box {
    width: 150px;
    height: 150px;

    border-radius: 20%;
  }

  .box img {
    transition: 1s; 
    display: block;
  }

  .box img:hover {
    transform: scale(1.1);
  }
</style>