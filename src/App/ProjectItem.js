import * as DOMH from "../Utility/DOMHelper.js";
// import { Tooltip } from "./Tooltip.js";

export class ProjectItem {
  hasActiveTooltip = false;

  constructor (id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
    this.connectDrag();
  }

  showMoreInfoHandler () {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    console.log(projectElement.dataset);
    import("./Tooltip").then(module => {
      const tooltip = new module.Tooltip(() => {
        this.hasActiveTooltip = false;
      }, toolTipText, this.id);
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  connectDrag () {
    document.getElementById(this.id).addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", this.id);
      e.dataTransfer.effectAllowed = "move";
    });
  }

  connectMoreInfoBtn () {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  connectSwitchBtn (type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMH.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "finished" : "activate";
    switchBtn.addEventListener("click", this.updateProjectListsHandler.bind(null, this.id));
  }

  update (updateProductsListsFn, type) {
    this.updateProjectListsHandler = updateProductsListsFn;
    this.connectSwitchBtn(type);
  }
}
