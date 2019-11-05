import "zone.js";
import "reflect-metadata";
import singleSpaAngular from "single-spa-angular2";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import  mainModule from "./main.module.ts";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";

const domElementGetter = () => {
  let el = document.getElementById("angular");
  if (!el) {
    el = document.createElement("div");
    el.id = "angular";
    document.body.appendChild(el);
  }
  return el;
};

const ngLifecycles = singleSpaAngular({
  // bootstrapFunction: singleSpaProps => {
  //   return platformBrowserDynamic()
  //     .bootstrapModule(AppModule)
  //     .catch(err => console.error(err));
  // },
  domElementGetter,
  template: `<AngularApp />`,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  Router,
  NgZone: NgZone
});

export const bootstrap = props => ngLifecycles.bootstrap(props);

export const mount = props => ngLifecycles.mount(props);

export const unmount = props => ngLifecycles.unmount(props);
