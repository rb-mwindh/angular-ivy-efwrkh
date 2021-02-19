import { Injectable } from "@angular/core";

import * as PouchDB from "pouchdb";

@Injectable()
export class PouchdbService {
  database;

  constructor() {
    this.database = new PouchDB("system-message");
  }
}
