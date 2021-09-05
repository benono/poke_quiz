<template>
  <div>
    PokeQuiz
    <input type="text" v-model="id" />
    <v-row>
      <v-col cols="6">
        <v-text-field v-model="id" label="Pokemon Name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn depressed @click="searchPokemonFromId(id)" color="primary">
          Pokemon Quiz!!
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn color="secondary" to="/">TOP</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mx-auto">
          <v-row justify="space-around">
            <v-img :src="searchResults[0].img"> </v-img>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    {{ id }}
    <br />
  </div>
</template>

<script>
export default {
  name: "PokeQuiz",
  data() {
    return {
      base_img:
        "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/{0}.png",
      id: "",
      searchResults: [],
    };
  },
  methods: {
    async searchPokemonFromId(id) {
      this.id = String(id).padStart(3, "0");
      this.searchResults = [];
      const baseURL = "https://pokeapi.co/api/v2/pokemon-species/";
      console.log(baseURL + id);

      const response = await fetch(baseURL + id).then((response) =>
        response.json()
      );
      console.log(response);
      this.searchResults.push({
        name: response.names[0].name,
        img: this.base_img.replace(/{(\d+)}/g, this.id),
        flavor_text: response.flavor_text_entries[22].flavor_text,
      });
    },
  },
};
</script>

<style>
</style>