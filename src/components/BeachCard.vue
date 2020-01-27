<template>
  <div class="beach-card">
    <div class="beach-card__image">
      <img :src="item.imageUrl" />
    </div>
    <div class="beach-card__body">
      <h3 class="beach-card__body__name">
        {{ item.name }}
      </h3>
      <p class="beach-card__body__location">
        {{ item.location }}, {{ item.state }}
      </p>
      <p class="beach-card__body__description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.beach-card {
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background-image: linear-gradient(to left, #dee8f4, #ecf3f9);
  box-shadow: 5px 5px 20px 0px #a7b5c4a9;

  &:hover .beach-card__image {
    filter: blur(2px);
  }

  &:hover .beach-card__body {
    bottom: 0px;
  }
}

.beach-card__image {
  height: 100%;
  width: 100%;
  transition: filter .5s;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.beach-card__body {
  position: absolute;
  bottom: 0px;
  left: 0px;
  bottom: -260px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: bottom .3s;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow:
    -1px -1px 0px 1px #fff,
    0px -1px 10px 0px #f0f0f0;
}

.beach-card__body__name {
  font-size: 28px;
  margin: 0px;
}

.beach-card__body__location {
  font-size: 18px;
  margin: 0px;
  color: #de4237;
}

.beach-card__body__description {
  font-size: 14px;
  height: 230px;
  overflow: hidden;
}
</style>