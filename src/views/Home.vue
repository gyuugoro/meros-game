<template>
  <v-container class="my-auto mx-auto">
    <v-form ref="input" @submit.prevent>
      <v-text-field
        label="あなたの渾名（例：しょーちゃん）"
        v-model="changeKey"
        color="orange"
        outlined
        :rules="[rule]"
        append-icon="mdi-account-search"
        @click:append="find()"
        @keypress.enter.prevent
        @keypress.enter="find()"
        autofocus
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.commit("start");
  },
  data() {
    return {
      rule: (value) => !!value || "ちゃんと入力してくだされ",
      isEnter: false,
    };
  },
  computed: {
    changeKey: {
      get() {
        return this.$store.state.key;
      },
      set(v) {
        this.$store.commit("changeKey", v);
      },
    },
  },
  methods: {
    find() {
      if (this.$refs.input.validate()) {
        console.log("find!");

        this.$router.push({ name: "Answer" });
      }
    },
  },
};
</script>
