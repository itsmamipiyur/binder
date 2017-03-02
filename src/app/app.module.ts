import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MePage } from '../pages/me/me';
import { ActivityPage } from '../pages/activity/activity';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
@NgModule({
  declarations: [
    MyApp,
    MePage,
    ActivityPage,
    HomePage,
    TabsPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    ActivityPage,
    HomePage,
    TabsPage,
    SearchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
