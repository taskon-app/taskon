import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import uno from "unocss/vite"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({ tsconfigPath: "./tsconfig.json" }),
    uno(),
    {
      // must mark as `@unocss-include`
      name: "taskon-ui-auto-gen-unocss-include",
      closeBundle() {
        ;["index.js", "index.cjs"].forEach((file) => {
          const path = `./dist/${file}`
          const content = readFileSync(path, "utf-8")
          writeFileSync(path, `// @unocss-include\n\n${content}`)
        })
      },
    },
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
      },
    },
    sourcemap: true,
    rollupOptions: {
      output: [
        { format: "es", globals: { vue: "Vue" }, exports: "named" },
        { format: "cjs", globals: { vue: "Vue" }, exports: "named" },
      ],
      external: ["vue"],
    },
  },
})
