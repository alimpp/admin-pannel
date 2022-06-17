<template>
    <div class="progressBar animate__animated animate__backInDown">
       <div class="row mt-1">
       <span class="blue_color size_c px-5">Welcome To Dashboard UI</span>
         <span class="dark_color size_x px-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptate eius provident eveniet magni cumque assumenda, laudantium perferendis, necessitatibus animi corporis earum facilis quia saepe modi voluptates praesentium. Odio, quaerat. </span>
       <div class="col-md-4">
                    <div class="cart">
                        <div class="percent">
                            <svg>
                            <circle cx="105" cy="105" r="100"></circle>
                            <circle cx="105" cy="105" r="100" style="--percent: 30"></circle>
                            </svg>
                            <div class="number">
                            <h3>30<span>%</span></h3>
                            </div>
                        </div>
                        <div class="title mt-2">
                            <h5 class="dark_color">Sale in Week</h5>
                            <h6 class="dark_color">Lorem ipsum dolor site is text...</h6>
                        </div>
                    </div>
       </div>

       <div class="col-md-4">
            <div class="cart">
                    <div class="percent">
                        <svg>
                        <circle cx="105" cy="105" r="100"></circle>
                        <circle cx="105" cy="105" r="100" style="--percent: 70"></circle>
                        </svg>
                        <div class="number">
                        <h3>70<span>%</span></h3>
                        </div>
                    </div>
                    <div class="title mt-2">
                          <h5 class="dark_color">Sale in Mount</h5>
                          <h6 class="dark_color">Lorem ipsum dolor site is text...</h6>
                    </div>
            </div>
       </div>

       <div class="col-md-4">   
            <div class="cart">
            <div class="percent">
                <svg>
                <circle cx="105" cy="105" r="100"></circle>
                <circle cx="105" cy="105" r="100" style="--percent: 90"></circle>
                </svg>
                <div class="number">
                <h3>90<span>%</span></h3>
                </div>
            </div>
            <div class="title mt-2">
                 <h5 class="dark_color">Sale in Year</h5>
                 <h6 class="dark_color">Lorem ipsum dolor site is text...</h6>
            </div>
            </div>
       </div>

       </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  margin: 0 auto;
  width: 280px;
  height: 350px;
  border-radius: 5px;
}

.cart .percent {
  position: relative;
}

.cart svg {
  position: relative;
  width: 210px;
  height: 210px;
  transform: rotate(-90deg);
}

.cart svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #f0f0f0;
  stroke-width: 10;
  stroke-linecap: round;
}

.cart svg circle:last-of-type {
  stroke-dasharray: 625px;
  stroke-dashoffset: calc(625px - (625px * var(--percent)) / 100);
  stroke: #3498db; 
}

.cart .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cart .number h3 {
  font-weight: 200;
  font-size: 3.5rem;
}

.cart .number h3 span {
  font-size: 2rem;
}

.cart .title h2 {
  margin: 25px 0 0;
}

.cart:nth-child(1) svg circle:last-of-type {
  stroke: #f39c12;
}

.cart:nth-child(2) svg circle:last-of-type {
  stroke: #2ecc71;
}
</style>