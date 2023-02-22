import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["output"];

  connect() {
    console.log("Increment Counter", this.element);
    console.log(this.outputTarget);
    this.count = 0;
  }

  increment() {
    console.log("Clicked");
    this.count += 1;
    this.outputTarget.textContent = `You have cliced ${this.count} times`;
  }
}
