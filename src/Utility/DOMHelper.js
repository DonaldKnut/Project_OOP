export class DOMHelper {

}

export function clearEventListeners(element) {
  const clonedElement = element.cloneNode(true);
  element.replaceWith(clonedElement);
  return clonedElement;
}
export function moveElement(elementId, newDestinationSelector) {
  const element = document.getElementById(elementId);
  const destinationElement = document.querySelector(newDestinationSelector);
  destinationElement.append(element);
  element.scrollIntoView({ top: 50, behavior: "smooth" });
}
