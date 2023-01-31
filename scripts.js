class Store {
  #stringArray = [];
  constructor() {}

  _generateString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  get array() {
    return this.#stringArray;
  }

  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  resolveAfter1Seconds(stringNumber) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let sArray = [];
        for (let i = 0; i < (stringNumber < 500 ? 500 : stringNumber); i++) {
          sArray.push(this._generateString());
        }
        resolve(sArray);
      }, 1000);
    });
  }

  async init(stringNumber = 500) {
    this.#stringArray = new Promise((resolve) => {
        setTimeout(async () => {
          resolve(await this.resolveAfter1Seconds(stringNumber));
        }, 1000);
      });

  }
}
