import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MePage } from '../pages/me/me';
import { ActivityPage } from '../pages/activity/activity';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message'
import { ViewMessagePage } from '../pages/view-message/view-message';
import { SearchPage } from '../pages/search/search';
import { SearchUserPage } from '../pages/search-user/search-user';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SellPage } from '../pages/sell/sell';
import { FollowerPage } from '../pages/follower/follower';
import { FollowingPage } from '../pages/following/following';
import { PostPage } from '../pages/post/post';

import { PostProvider } from '../providers/post-provider';
import { UserProvider } from '../providers/user-provider';
import { LocationProvider } from '../providers/location-provider';
import { AuthenticateProvider } from '../providers/authenticate-provider';
import { FormDataProvider } from '../providers/form-data-provider';

@NgModule({
  declarations: [
    MyApp,
    MePage,
    ActivityPage,
    HomePage,
    TabsPage,
    MessagePage,
    ViewMessagePage,
    SearchPage,
    SearchUserPage,
    LoginPage,
    SignUpPage,
    SellPage,
    FollowerPage,
    FollowingPage,
    PostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    ActivityPage,
    HomePage,
    TabsPage,
    MessagePage,
    ViewMessagePage,
    SearchPage,
    SearchUserPage,
    LoginPage,
    SignUpPage,
    SellPage,
    FollowerPage,
    FollowingPage,
    PostPage
  ],
  providers: [FormDataProvider, UserProvider, PostProvider, LocationProvider, AuthenticateProvider, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
