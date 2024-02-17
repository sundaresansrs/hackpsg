
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

closeCartBtn.addEventListener('click',()=>{
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


const showcaseActionsCart = document.querySelectorAll('.showcase-actions ion-icon[name = "bag-add-outline"]')
console.log(showcaseActionsCart)

showcaseActionsCart.forEach((btn,index)=>{
    btn.value = index
    btn.parentNode.classList.add('addcart')
})

//creatting the cart
cart = []
const cardOpenBtn = document.querySelectorAll('.product-main .showcase .addcart')
console.log(cardOpenBtn)
cardOpenBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    let product = productsArray[index];
    let cartItemHTML = `
    <div class = cart-items> 
      <div class="cart__item">
        <figure>
          <img src="${product.image}" alt="">
          <figcaption>${product.category}</figcaption>
        </figure>
      </div>
      <div class="product__info">
        <h5>${product.price}</h5>
        <div class="cart__buttons">
          <button type="button">Remove</button>
          <a href=""><button>Order</button></a>
        </div>
      </div>
      <div class="cart__input__btn">
        <p class="item__amount">0</p>
      </div></div>`
      document.querySelector('.cart__content').insertAdjacentHTML('beforeend',cartItemHTML)
  });
});



const profileBtn = document.getElementById('profile')
const profile = document.querySelector(".profile")
console.log(profile)
profileBtn.addEventListener('click',()=>{
  profile.classList.toggle('sign_out');
  profile.classList.toggle('sign_in');
})




