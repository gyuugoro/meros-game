<template>
  <v-container fluid fill-height style="padding: 0px">
    <v-container fluid fill-height :class="image"></v-container>
    <transition name="text">
      <span class="text" v-show="isShow">
        {{ $store.state.key }}は{{ $store.state.character }} <br />
        レア度は{{ $store.state.level }}
      </span>
    </transition>

    <div style="width: 100vw; height: 100vh; text-align: center">
      <h1>情報</h1>
      <p
        v-for="(data, i) in this.$store.state.datas"
        :key="i"
        class="list-text"
      >
        {{ data.name }}・・・{{ data.character }} <br />
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("character");

    this.$store.dispatch("setDatas");

    if (this.$store.state.character == "メロス") {
      this.image = "meros";
    } else if (this.$store.state.character == "セリヌンティウス") {
      this.image = "serinuntius";
    } else if (this.$store.state.character == "ディオニス") {
      this.image = "dionis";
    } else if (this.$store.state.character == "メロスの妹") {
      this.image = "meros_sister";
    } else if (this.$store.state.character == "フィロストラトス") {
      this.image = "philostratus";
    } else if (this.$store.state.character == "山賊") {
      this.image = "bandits";
    } else if (this.$store.state.character == "メロスの妹の結婚相手") {
      this.image = "meros_sister_marriage_partner";
    } else if (this.$store.state.character == "メロスに揺さぶられた老爺") {
      this.image = "meros_swayed_oldman";
    } else if (
      this.$store.state.character == "メロスに緋のマントを捧げた少女"
    ) {
      this.image = "meros_red_cloak_dedicated_girl";
    } else if (this.$store.state.character == "ゼウス") {
      this.image = "zeus";
    } else if (this.$store.state.character == "メロスに蹴とばされた犬") {
      this.image = "meros_kickoff_doc";
    } else if (this.$store.state.character == "メロスの羊") {
      this.image = "meros_sheep";
    } else if (this.$store.state.character == "太宰治") {
      this.image = "osamu_dazai";
    } else if (
      this.$store.state.character == "永遠の裏切者、地上で最も不名誉の人種"
    ) {
      this.image = "forever_traitor";
    } else if (this.$store.state.character == "王に殺された賢臣のアレキス") {
      this.image = "sage_arekis";
    }

    window.addEventListener("scroll", this.scroll);
  },
  data() {
    return {
      image: "sheep",
      isShow: true,
      scrollY: 0,
    };
  },
  methods: {
    scroll() {
      this.scrollY = window.scrollY;
      if (this.scrollY <= 100) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>

<style scoped>
.meros {
  background: url("../assets/メロス.jpg");
  background-size: cover;
  filter: blur(5px);
}

.serinuntius {
  background: url("../assets/セリヌンティウス.jpg");
  background-size: cover;
  filter: blur(5px);
}

.dionis {
  background: url("../assets/ディオニス.jpg");
  background-size: cover;
  filter: blur(5px);
}

.meros_sister {
  background: url("../assets/メロスの妹.jpg");
  background-size: cover;
  filter: blur(5px);
}

.philostratus {
  background: url("../assets/フィロストラトス.jpg");
  background-size: cover;
  filter: blur(5px);
}

.bandits {
  background: url("../assets/山賊.jpg");
  background-size: cover;
  filter: blur(5px);
}

.meros_sister_marriage_partner {
  background: url("../assets/メロスの妹の結婚相手.jpg");
  background-size: cover;
  filter: blur(5px);
}

.meros_swayed_oldman {
  background: url("../assets/メロスに揺さぶられた老爺.jpeg");
  background-size: cover;
  filter: blur(5px);
}

.meros_red_cloak_dedicated_girl {
  background: url("../assets/メロスに緋のマントを捧げた少女.jpg");
  background-size: cover;
  filter: blur(5px);
}

.zeus {
  background: url("../assets//ゼウス.jpeg");
  background-size: cover;
  filter: blur(5px);
}

.meros_kickoff_doc {
  background: url("../assets/メロスに蹴とばされた犬.jpg");
  background-size: cover;
  filter: blur(5px);
}

.meros_sheep {
  background: url("../assets/メロスの羊.jpg");
  background-size: cover;
  filter: blur(5px);
}

.osamu_dazai {
  background: url("../assets/太宰治.jpeg");
  background-size: cover;
  filter: blur(5px);
}

.forever_traitor {
  background: url("../assets/永遠の裏切者、地上で最も不名誉の人種.jpeg");
  background-size: cover;
  filter: blur(5px);
}

.sage_arekis {
  background: url("../assets/賢臣のアレキス.jpg");
  background-size: cover;
  filter: blur(5px);
}

.text {
  position: fixed;
  text-align: center;
  text-shadow: 0px 0px 5px white;
  font-size: 50px;
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-enter-active,
.text-leave-active {
  transition: opacity 0.5s;
}

.text-enter,
.text-leave-to {
  opacity: 0;
}

.text-enter-to,
.text-leave {
  opacity: 1;
}

.list-text,
h1 {
  margin-top: 20px;
  color: orangered;
}
</style>