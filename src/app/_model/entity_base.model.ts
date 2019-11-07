 export class EntityBase {

  constructor() {
  }

  public mapAttributes(loadedAttributes: object): void {
    const self = this;
    if ( loadedAttributes != null ){
      for (const key of Object.keys(loadedAttributes)) {
        if ( !(self.hasOwnProperty(key)) ) {
          throw new Error('Attribute not found: ' + key);
        } else {
          self[key] = loadedAttributes[key];
        }
      }
    }
  }

}
