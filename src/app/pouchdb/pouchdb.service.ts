import { Injectable, InjectionToken } from "@angular/core";

import PouchDB from "pouchdb";

const Database = new InjectionToken<PouchDB>("Database", {
  providedIn: "root",
  factory: () => new PouchDB("system-message")
});
