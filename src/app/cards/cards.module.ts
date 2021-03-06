import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LottieModule } from "ngx-lottie";
import { UiModule } from "../ui/ui.module";
import { DiscordComponent } from "./discord/discord.component";
import { GamesComponent } from "./games/games.component";
import { HeartrateComponent } from "./heartrate/heartrate.component";
import { HomelabOlderYetiComponent } from "./homelab-older-yeti/homelab-older-yeti.component";
import { HomelabComponent } from "./homelab/homelab.component";
import { InstagramComponent } from "./instagram/instagram.component";
import { MfcComponent } from "./mfc/mfc.component";
import { SkebComponent } from "./skeb/skeb.component";
import { SquirrelsComponent } from "./squirrels/squirrels.component";
import { TwitterComponent } from "./twitter/twitter.component";
import { WhereComponent } from "./where/where.component";
import { WorkComponent } from "./work/work.component";
import { PhotosComponent } from "./photos/photos.component";
import { TwitterMediaComponent } from "./twitter-media/twitter-media.component";

export function playerFactory() {
	return import(
		/* webpackChunkName: 'lottie-web' */ "lottie-web/build/player/lottie_light"
	);
}

const components = [
	DiscordComponent,
	GamesComponent,
	HeartrateComponent,
	HomelabOlderYetiComponent,
	HomelabComponent,
	InstagramComponent,
	MfcComponent,
	SkebComponent,
	SquirrelsComponent,
	TwitterComponent,
	WhereComponent,
	WorkComponent,
	PhotosComponent,
	TwitterMediaComponent,
];

@NgModule({
	declarations: [...components],
	imports: [
		CommonModule,
		UiModule,
		LottieModule.forRoot({ player: playerFactory }),
	],
	exports: [...components],
})
export class CardsModule {}
