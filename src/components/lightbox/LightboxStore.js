class LightboxStore {

  constructor () {
    this.state = {
      images: [],
      index: 0
    }
  }

  addImage (url) {
    return this.state.images.push(url) + 1
  }

  open (index) {
    this.state.index = index - 1
  }
}

export default new LightboxStore()
