import { Injectable } from "@angular/core";

import * as PouchDB from "pouchdb";

@Injectable()
export class PouchdbService {
  private database = new PouchDB("system-message");

  constructor() {}

  public fetch() {
    return this.database.allDocs({ includeDocs: true });
  }
}
