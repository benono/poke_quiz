<template>
  <div>
    <!-- <v-row>
      <v-col cols="6">
        <v-text-field v-model="id" label="Pokemon Name"></v-text-field>
      </v-col>
    </v-row> -->
    <v-spacer></v-spacer>
    <br />
    <br />
    <v-row>
      <v-col cols="12" sm="3">
        <v-btn depressed @click="searchPokemonFromId(id)" color="primary">
          クイズ に ちょうせん！
        </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn color="secondary" to="/">TOP</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="isCardShow">
      <v-col cols="12" md="6">
        <v-card class="mx-auto">
          <v-row justify="space-around">
            <v-col cols="6">
              <v-img :src="searchResults[0].img"> </v-img>
            </v-col>
            <v-col cols="6">
              <v-btn v-if="!isNameShow" @click="isNameShow = true"
                >正解を確認する</v-btn
              >
              <v-card-title v-if="isNameShow">
                {{ searchResults[0].name }}
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

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
      isCardShow: false,
      isNameShow: false,
    };
  },
  methods: {
    randomNumber(maxNum, minNum) {
      // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
      // 2から5までのランダムな数字の生成
      var randomNum =
        Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
      // 画面に表示
      return randomNum;
    },
    async searchPokemonFromId() {
      let randomNum = this.randomNumber(1, 251);
      this.id = String(randomNum).padStart(3, "0");
      this.searchResults = [];
      const baseURL = "https://pokeapi.co/api/v2/pokemon-species/";
      console.log(baseURL + randomNum);

      const response = await fetch(baseURL + randomNum).then((response) =>
        response.json()
      );
      console.log(response);
      this.searchResults.push({
        name: response.names[0].name,
        img: this.base_img.replace(/{(\d+)}/g, this.id),
        flavor_text: response.flavor_text_entries[22].flavor_text,
      });
      this.isCardShow = true;
      this.isNameShow = false;
    },
  },
};
</script>

<style>
</style>