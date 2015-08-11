/// <reference path="./typings/angular2/angular2.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'nd-eco-app',
    injectables: []})
@View({
    templateUrl: 'nd-eco.html',
    directives: []
})
class NdEcoApp {
    constructor() {

    }
}
bootstrap(NdEcoApp);