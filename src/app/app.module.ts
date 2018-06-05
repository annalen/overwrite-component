import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {OrginalComponent} from './orginal/orginal.component';
import {MockOfOrginalComponent} from './mock-of-orginal/mock-of-orginal.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        OrginalComponent,
        MockOfOrginalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'app-mock-of-orginal', component: MockOfOrginalComponent},
            {path: 'app-orginal', redirectTo: 'app-mock-of-orginal', pathMatch: 'full'},
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
