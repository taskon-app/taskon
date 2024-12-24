// @ts-check

import antfu from "@antfu/eslint-config"
import ayingottPrettier from "@ayingott/eslint-config-prettier"

export default antfu({
  stylistic: {
    quotes: "double",
  },
}).append(ayingottPrettier)
