import { Scene } from "phaser";

export class Preloader extends Scene {
	static readonly BAR_WIDTH = 464;
	static readonly BAR_HEIGHT = 32;
	static readonly INNER_BAR_MARGIN = 2;

	constructor() {
		super("Preloader");
	}

	init() {
		//  We loaded this image in our Boot Scene, so we can display it here
		this.add.image(this.game.canvas.width / 2, this.game.canvas.height / 2, "background");

		//  A simple progress bar. This is the outline of the bar.
		this.add.rectangle(this.game.canvas.width / 2, this.game.canvas.height / 2, Preloader.BAR_WIDTH, Preloader.BAR_HEIGHT).setStrokeStyle(2, 0xffffff);

		//  This is the progress bar itself. It will increase in size from the left based on the % of progress.
		const bar = this.add.rectangle(this.game.canvas.width / 2 - Preloader.BAR_WIDTH / 2 + Preloader.INNER_BAR_MARGIN, this.game.canvas.height / 2, 0, Preloader.BAR_HEIGHT - Preloader.INNER_BAR_MARGIN * 2, 0xffffff);

		//  Use the "progress" event emitted by the LoaderPlugin to update the loading bar
		this.load.on("progress", (progress: number) => {
			//  Update the progress bar (our bar is 464px wide, so 100% = 464px)
			bar.width = (Preloader.BAR_WIDTH - Preloader.INNER_BAR_MARGIN * 2) * progress;
		});
	}

	preload() {
		//  Load the assets for the game - Replace with your own assets
		this.load.setPath("assets");

		this.load.image("logo", "logo.png");

		this.load.image("tank-blue", "tank_blue.png")
		this.load.image("tank-green", "tank_green.png")
		this.load.image("tank-red", "tank_red.png")
	}

	create() {
		//  When all the assets have loaded, it"s often worth creating global objects here that the rest of the game can use.
		//  For example, you can define global animations here, so we can use them in other scenes.

		//  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
		this.scene.start("MainMenu");
	}
}
