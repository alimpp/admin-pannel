<template>
    <div id="stock-chart-example-1"><table class="charts-css line"><caption> Trend Line </caption> <tbody><tr><td style="--start:0.4; --size:0.5;"></td></tr> <tr><td style="--start:0.5; --size:0.3;"></td></tr> <tr><td style="--start:0.3; --size:0.4;"></td></tr> <tr><td style="--start:0.4; --size:0.7;"></td></tr></tbody></table> <table id="stacked-example-3" class="charts-css column hide-data show-heading show-labels show-primary-axis show-3-secondary-axes data-spacing-10 multiple stacked"><caption> Simple Stacked Columns </caption> <thead><tr><th scope="col"> Continent </th> <th scope="col"> #1 </th> <th scope="col"> #2 </th> <th scope="col"> #3 </th> <th scope="col"> #4 </th></tr></thead> <tbody><tr><th scope="row"> America </th> <td style="--size:calc(50 / 150);"><span class="data"> 50$ </span></td> <td style="--size:calc(50 / 150);"><span class="data"> 50$ </span></td> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td> <td style="--size:calc(20 / 150);"><span class="data"> 20$ </span></td></tr> <tr><th scope="row"> Asia </th> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td></tr> <tr><th scope="row"> Europe </th> <td style="--size:calc(40 / 150);"><span class="data"> 40$ </span></td> <td style="--size:calc(25 / 150);"><span class="data"> 25$ </span></td> <td style="--size:calc(45 / 150);"><span class="data"> 45$ </span></td> <td style="--size:calc(30 / 150);"><span class="data"> 30$ </span></td></tr> <tr><th scope="row"> Africa </th> <td style="--size:calc(20 / 150);"><span class="data"> 20$ </span></td> <td style="--size:calc(20 / 150);"><span class="data"> 20$ </span></td> <td style="--size:calc(20 / 150);"><span class="data"> 20$ </span></td> <td style="--size:calc(20 / 150);"><span class="data"> 20$ </span></td></tr></tbody></table></div>
</template>

<script>

export default {

}
</script>

<style>
#stock-chart-example-1 {
  position: relative;
  height: 250px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #eee;
}
#stock-chart-example-1 > table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#stock-chart-example-1 > table.column {
  top: unset;
  height: 35px;
}
/* Colors */
#stock-chart-example-1 > table.area {
  --color: linear-gradient(#000, #fff);
}
#stock-chart-example-1 > table.line {
  --color: #fc1;
}
#stock-chart-example-1 > table.column tr:nth-child(even) {
  --color: #e88;
}
#stock-chart-example-1 > table.column tr:nth-child(odd) {
  --color: #8c8;
}

</style>