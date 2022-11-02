import { Component } from "./Component.js";

export class Tooltip extends Component {
  constructor (closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create () {
    const tooltipElement = document.createElement("div");
    tooltipElement.classList = "tooltip";
    tooltipElement.innerHTML = this.text;
    // console.log(this.hostElement.getBoundingClientRect())

    const hostElementPosLeft = this.hostElement.offsetLeft;
    const hostElementPosTop = this.hostElement.offsetTop;
    const hostElementHeight = this.hostElement.clientHeight;

    const x = hostElementPosLeft + 20;
    const y = hostElementPosTop + hostElementHeight - 10;

    // tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.left = y + "px";

    tooltipElement.addEventListener("click", this.detach);
    this.element = tooltipElement;
  }
}
