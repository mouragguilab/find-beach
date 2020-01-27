<template>
  <div class="beaches-page">
    <header class="beaches-page__header">
      <h1 class="beaches-page__header__title">
        Find Beaches
      </h1>
      <img
        class="beaches-page__header__logo"
        :src="require('@/assets/icons/logo.svg')"
      />
    </header>
    <div class="search-filter">
      <input
        type="text"
        v-model="searchName"
        class="search-filter__input"
        placeholder="Nome"
      />
      <select
        v-model="searchState"
        class="search-filter__select"
      >
        <option value="" disabled selected>
          Estado
        </option>
        <option value="">Todos</option>
        <option value="AL">AL</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="PB">PB</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
      </select>
    </div>
    <div class="beaches-page__beaches">
      <BeachCard
        :item="beach"
        :key="beach.id"
        v-for="beach in filteredBeaches"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BeachCard from '@/components/BeachCard';

export default {
  name: 'app',
  components: {
    BeachCard,
  },
  data: () => ({
    beaches: [],
    searchName: '',
    searchState: '',
  }),
  mounted() {
    this.loadBeachs();
  },
  methods: {
    contains(str, subStr) {
      return new RegExp(subStr, 'i').test(str);
    },
    loadBeachs() {
      axios.get('https://us-central1-desafio-funretro.cloudfunctions.net/getBeaches')
        .then(({ data }) => this.beaches = data)
    },
  },
  computed: {
    filteredBeaches() {
      return this.beaches.filter(({ name, state }) => {
        return (
          this.contains(name, this.searchName) &&
          this.contains(state, this.searchState)
        );
      })
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #fff;
}

.beaches-page {
  padding: .1px;
  margin: 20px;
}

.beaches-page__header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 38px;
}

.beaches-page__header__title {
  font-size: 40px;
  margin: 0px;
}

.beaches-page__header__logo {
  height: 70px;
}

.beaches-page__beaches {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 20px;
}

.search-filter {
  display: flex;
  justify-content: center;
  margin: 0px 30px 40px 30px;

  @media (max-width: 768px) {
    margin: 0px 0px 40px 0px;
    flex-direction: column;
  }
}

.search-filter__input {
  padding: 15px;
  margin-right: 40px;
  font-size: 16px;
  width: 400px;
  outline: none;
  box-sizing: border-box;
  transition: box-shadow .5s, border .5s;
  @extend %neomorphism;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
}

.search-filter__select {
  padding: 10px;
  width: 300px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
  transition: box-shadow .5s, border .5s;
  @extend %neomorphism;

  @media (max-width: 768px) {
    width: 100%;
  }
}

%neomorphism {
  border-radius: 10px;
  background-color: #fafafa;
  border: none;
  box-shadow:
    -1px -1px 0px 1px #fff,
    -5px -5px 10px 0px #ffffff,
    0px 0px 4px 0px #fafafa,
    0px 0px 8px 0px #f0f0f0,
    0px 0px 12px 0px #e7e7e7,
    0px 0px 16px 0px #e4e4e4;
}
</style>
