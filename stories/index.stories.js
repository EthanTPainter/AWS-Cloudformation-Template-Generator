/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import TheParameters from "../src/components/parameter/TheParameters";
import TheParametersTitle from "../src/components/parameter/TheParameterTitle";
import BaseParameterTextField from "../src/components/parameter/text-fields/BaseParameterTextField";

storiesOf("Parameters", module)
  .add("Parameters", () => ({
    components: { TheParameters },
    template: TheParameters.template,
    methods: TheParameters.methods,
  }))

/* eslint-enable react/react-in-jsx-scope */
