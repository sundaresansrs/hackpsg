
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');
const cartItem = document.querySelector('.cart')
const cartbtn = document.getElementById("cart")
const cartOverlay = document.querySelector('.cart-overlay')
const closeCartBtn = document.querySelector('.cart-close__btn')





for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.add('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

cartbtn.addEventListener('click',()=>{
  cartItem.classList.toggle("showcart")
  cartOverlay.classList.toggle('transparentBcg')
})


let productsArray = [];

let showcaseElements = document.querySelectorAll('.product-main .showcase');
console.log(showcaseElements)

showcaseElements.forEach(showcase => {
  let imageSrc = showcase.querySelector('.product-img.default').getAttribute('src');
  let price = showcase.querySelector('.price').textContent;
  let category = showcase.querySelector('.showcase-category').textContent;
  let product = {
    image: imageSrc,
    price: price,
    category: category
  };
  productsArray.push(product);
});

console.log(productsArray);
cart=[]

const showcaseActionsCart = document.querySelectorAll('.showcase-actions ion-icon[name = "bag-add-outline"]')
console.log(showcaseActionsCart)

showcaseActionsCart.forEach((btn,index)=>{
    btn.value = index
    btn.parentNode.classList.add('addcart')
})
const cardOpenBtn = document.querySelectorAll('.product-main .showcase .addcart')
cardOpenBtn.forEach((value,index)=>{
  value.addEventListener('click',(e)=>{

  })
  })