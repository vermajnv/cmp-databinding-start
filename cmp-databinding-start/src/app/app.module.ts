import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { GameComponent } from './game/game.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlighterDirective } from './directives/better-highlighter.directive';
import { HostHighlighterDirective} from './directives/host-highlighter.directive';
import { HostBindingHighlighterDirective} from './directives/hostbinding-highlighter.directive'
import { UnlessDirective} from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent,
    GameComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlighterDirective,
    HostHighlighterDirective,
    HostBindingHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
