<template>
  <div id="legend-example-1"><table class="charts-css column multiple hide-data show-labels data-spacing-5"><caption> Front End Developer Salary </caption> <thead><tr><th scope="row"> Continent </th> <th scope="col"> 2000 </th> <th scope="col"> 2005 </th> <th scope="col"> 2010 </th> <th scope="col"> 2015 </th> <th scope="col"> 2020 </th></tr></thead> <tbody><tr><th scope="row"> Asia </th> <td style="--size:calc( 20 / 100 );"><span class="data"> $20K </span></td> <td style="--size:calc( 30 / 100 );"><span class="data"> $30K </span></td> <td style="--size:calc( 40 / 100 );"><span class="data"> $40K </span></td> <td style="--size:calc( 50 / 100 );"><span class="data"> $50K </span></td> <td style="--size:calc( 60 / 100 );"><span class="data"> $60K </span></td></tr> <tr><th scope="row"> Australia </th> <td style="--size:calc( 10 / 100 );"><span class="data"> $10K </span></td> <td style="--size:calc( 30 / 100 );"><span class="data"> $30K </span></td> <td style="--size:calc( 50 / 100 );"><span class="data"> $50K </span></td> <td style="--size:calc( 70 / 100 );"><span class="data"> $70K </span></td> <td style="--size:calc( 90 / 100 );"><span class="data"> $90K </span></td></tr> <tr><th scope="row"> Europe </th> <td style="--size:calc( 40 / 100 );"><span class="data"> $40K </span></td> <td style="--size:calc( 60 / 100 );"><span class="data"> $60K </span></td> <td style="--size:calc( 75 / 100 );"><span class="data"> $75K </span></td> <td style="--size:calc( 90 / 100 );"><span class="data"> $900K </span></td> <td style="--size:calc( 100 / 100 );"><span class="data"> $100K </span></td></tr></tbody></table></div>
</template>

<script>
export default {

}
</script>

<style>
#legend-example-1 {
  display: flex;
  flex-direction: row;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}
#legend-example-1 .column {
  height: 200px;
  max-width: 500px;
  margin: 0 auto;
}
#legend-example-1 .legend {
  flex-shrink: 3;
}

</style>