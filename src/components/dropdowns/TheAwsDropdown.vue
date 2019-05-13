<template>
  <div class="aws-dropdown" v-if="options">
    <!-- Dropdown Input -->
    <input
      class="dropdown-input"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      @keyup="keyMonitor"
      v-model="searchFilter"
      :disabled="disabled"
      :placeholder="placeholder"
    >
    <div class="dropdown-content" v-show="optionsShown">
      <div
        class="dropdown-item"
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index"
      >{{ option.name || option.id || '-' }}</div>
    </div>
    <p>Value Selected: {{ selected.name }}</p>
  </div>
</template>

<script>
export default {
  name: "TheAwsDropdown",
  template: "TheAwsDropdown",
  props: {
    name: {
      type: String,
      required: true,
      default: "dropdown",
      description: "Input name"
    },
    options: {
      type: Array,
      required: true,
      default: () => [{name: "cat"}, {name: "god"}, {name: "dog"}],
      description: "Options of the dropdown"
    },
    placeholder: {
      type: Boolean,
      required: false,
      default: false,
      description: "Disable the dropdown"
    },
    maxItem: {
      type: Number,
      required: false,
      default: 5,
      description: "Max items to show"
    }
  },
  data() {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: ""
    };
  },
  created() {
    this.$emit("selected", this.selected);
  },
  computed: {
    filteredOptions() {
      const filtered = [];
      const regOption = new RegExp(this.searchFilter, "ig");
      for (const option of this.options) {
        if (this.searchFilter.length < 1 || option.name.match(regOption)) {
          if (filtered.length < this.maxItem) {
            filtered.push(option);
          }
        }
      }
      return filtered;
    }
  },
  methods: {
    selectOption(option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected.name;
      this.$emit("selected", this.selected);
    },
    showOptions() {
      if (!this.disabled) {
        this.searchFilter = "";
        this.optionsShown = true;
      }
    },
    exit() {
      if (!this.selected.id) {
        this.selected = {};
        this.searchFilter = "";
      } else {
        this.searchFilter = this.selected.name;
      }
      this.$emit("selected", this.selected);
      this.optionsShown = false;
    },
    keyMonitor(event) {
      if (event.key === "Enter" && this.filteredOptions[0]) {
        this.selectOption(this.filteredOptions[0]);
      }
    }
  },
  watch: {
    searchFilter() {
      if (!this.filteredOptions.length === 0) {
        this.selected = [];
      } else {
        this.selected = this.filteredOptions[0];
      }
      this.$emit("selected", this.searchFilter);
    }
  }
};
</script>
