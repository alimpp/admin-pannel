<template>
  <div class="progressCard">
      <div class="row mx-5 mt-3 mb-5 animate__animated animate__fadeInUp">

        <div class="col-lg-4 mt-2">
          <div class="cartProgress1 column">
             <span class="dark_color pt-2 px-2 size_c">Sale Last Mount</span>
             <span class="dark_color pt-2 px-2 size_x">260 000 500 $</span>
             <div class="d-flex"><button class="btn btn-danger mt-3 mx-2">Checkout</button></div>
             <span class="dark_color pt-2 px-2 size_y">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde beatae est veritatis mollitia repellendus nesciunt modi enim necessitatibus vero temporibus accusamus fugit quidem, distinctio commodi eveniet nemo nam eligendi ut!</span>
          </div>
         </div>

        <div class="col-lg-4 mt-2">
         <div class="cartProgress2 column">
             <span class="light_color pt-2 px-2 size_c">Sale Last Week</span>
             <span class="light_color pt-2 px-2 size_x">150 250 500 $</span>
             <div class="d-flex"><button class="btn btn-danger mt-3 mx-2">Checkout</button></div>
             <span class="light_color pt-2 px-2 size_y">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde beatae est veritatis mollitia repellendus nesciunt modi enim necessitatibus vero temporibus accusamus fugit quidem, distinctio commodi eveniet nemo nam eligendi ut!</span>
          </div>
         </div>

          <div class="col-lg-4 mt-2">
          <div class="cartProgress3 column">
             <span class="info_color pt-2 px-2 size_c">Sale Last year</span>
             <span class="info_color pt-2 px-2 size_x">268 880 500 $</span>
             <div class="d-flex"><button class="btn btn-danger mt-3 mx-2">Checkout</button></div>
             <span class="info_color pt-2 px-2 size_y">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde beatae est veritatis mollitia repellendus nesciunt modi enim necessitatibus vero temporibus accusamus fugit quidem, distinctio commodi eveniet nemo nam eligendi ut!</span>
          </div>
         </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.cartProgress1{width: 100%; height: 300px; border-radius: 15px;
background-image: linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% );
}
.cartProgress2{width: 100%; height: 300px; border-radius: 15px;
background-image: linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );
}
.cartProgress3{width: 100%; height: 300px; border-radius: 15px;
background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
}
</style>