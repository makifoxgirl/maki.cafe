import { ScullyConfig } from "@scullyio/scully";
import "@scullyio/scully-plugin-puppeteer";

export const config: ScullyConfig = {
	projectRoot: "./src",
	projectName: "maki",
	distFolder: "./dist/maki",
	outDir: "./dist/static",
	// puppeteerLaunchOptions: {
	// 	headless: false,
	// 	devtools: true,
	// 	slowMo: 4000, // not typed, hmm
	// } as any,
	defaultPostRenderers: [],
	routes: {},
};
