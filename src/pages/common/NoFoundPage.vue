<template>
  <div class="no-found">
    <img src="../../assets/common/404_icon.png" alt="icon" style="width: 160px;" />
    <h1 data-shadow='404'>
      404
    </h1>
    <h3 style="color: #66E0FF">
      Page is not found
    </h3>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/style/var";

.no-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  text-align: center;
  gap: 20px;
  h1 {
    display: inline-block;
    color: $primary-color;
    font-size: 60px;
    text-shadow: .02em .02em 1px $input-text;
    margin: 0;
    position: relative;
  }
  h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: 55%; left: 53%;
    transform: translateX(-50%) translateY(-50%);
    width: 200%;
    z-index: -1;
    text-shadow: none;
    background-image:
        linear-gradient(
                45deg,
                transparent 45%,
                hsla(48,20%,90%,1) 45%,
                hsla(48,20%,90%,1) 55%,
                transparent 0
        );
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shad-anim 15s linear infinite;
  }
}

@keyframes shad-anim {
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
}
</style>