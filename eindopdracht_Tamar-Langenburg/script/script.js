/* add to cart knop*/

/* add to cart button zoeken in html */
var AddToCartButtons = document.querySelectorAll("button.shop");
/* De koop knop laten reageren met een click, en daarna de functie updateshoppingCart afspelen */
for (i = 0; i < AddToCartButtons.length; i++) {
    AddToCartButtons[i].addEventListener("click", updateShoppingCart);
}
/* Als een op een koopknop wordt ingedrukt, gaat de winkelmand updaten*/
function updateShoppingCart() {
    /* Hier zoekt ie eerst de span*/
    let shoppingCartAmount = document.querySelector(".shoppingCart span");
    /* Hier bepaalt het de huidige aantal producten in de winkelmand*/
    let currentAmount = shoppingCartAmount.innerHTML;
    /* Dit zet het om naar een getal*/
    currentAmount = parseInt(currentAmount);
    /* dit berekent het nieuwe aantal in de winkelmand*/
    let newAmount = currentAmount + 1;
    /* dit zet het nieuwe aantal in de html*/
    shoppingCartAmount.innerHTML = newAmount;
    
}