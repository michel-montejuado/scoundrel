import { defineConfig } from "vite"

import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/scoundrel/" : "/",
	logLevel: "info",
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					phaser: ["phaser"],
					bitecs: ["bitecs"]
				}
			}
		},
		minify: process.env.NODE_ENV === "production" ? "terser" : false,
		terserOptions: {
			compress: {
				passes: 2
			},
			mangle: true,
			format: {
				comments: false
			}
		}
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	}
})
