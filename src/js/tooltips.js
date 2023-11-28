const deliveryItemsTooltips = document.querySelectorAll(
  ".delivery-tooltip_item"
);
const deliveryTooltipContent = document.querySelectorAll(
  ".delivery-tooltip_block"
);
const totalTooltip = document.getElementById("total-delivery-tooltip");

const infoTooltips = document.querySelectorAll(".info-tooltip");
const infoTooltipContent = document.querySelectorAll(".info-tooltip__block");

deliveryItemsTooltips.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    deliveryTooltipContent[index].style.visibility = "visible";

    let referenceTop = element.offsetTop;
    let referenceLeft = element.offsetLeft;
    let elementWidth = deliveryTooltipContent[index].offsetWidth;

    let newTop = referenceTop + 22;
    let newLeft = referenceLeft - elementWidth / 3;

    if (deliveryTooltipContent[index] === totalTooltip) {
      totalTooltip.style.top = newTop + "px";
      totalTooltip.style.left = referenceTop + "px";
    } else {
      deliveryTooltipContent[index].style.top = newTop + "px";
      deliveryTooltipContent[index].style.left = newLeft + "px";
    }
  });

  element.addEventListener("mouseout", () => {
    deliveryTooltipContent[index].style.visibility = "hidden";
  });
});

infoTooltips.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    infoTooltipContent[index].style.visibility = "visible";
  });

  element.addEventListener("mouseout", () => {
    infoTooltipContent[index].style.visibility = "hidden";
  });
});
