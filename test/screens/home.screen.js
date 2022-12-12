class HomeScreen{
  get #forms(){
      return $('~Forms')
  }

  async goToForms(){
      this.#forms.click()
  }

  get #text(){
    return $('~text-input')
  }
  async insertText(){
    this.#text.setValue('Vitória')
  }

  get #dropdown(){
    return $('~Dropdown')
  }

  async selectDropdown(){
    this.#dropdown.click()
    this.#dropdown.select(1)
    
  }

  get #switch(){
    return $('~switch')
  }

  async selectingSwitch(){
    this.#switch.click()
  }

  get #buttonActive(){
    return $('~button-Active')
  }

  async buttonActivate(){
    this.#buttonActive.click()
  }
}

module.exports = new HomeScreen()