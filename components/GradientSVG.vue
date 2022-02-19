<script>
export default {
  props: {
    startColor: String,
    endColor: String,
    idCSS: String,
    rotation: String,
    value: Number
  },
  data() {
    return {
      gradientTransform: `rotate(${this.$props.rotation})`
    }
  }
}

</script>
<template>
  <div>
    <!--  Container  -->
    <ul class="progress">
      <li data-name="Completed Appointments" :data-percent="`${value} %`">
        <svg viewBox="-10 -10 220 220">
          <g fill="none" stroke-width="15" transform="translate(100,100)">
            <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
            <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
            <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
            <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
            <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
            <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
          </g>
        </svg>
        <svg viewBox="-10 -10 220 220">
          <path d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" :stroke-dashoffset="`${(629*value)/100}`"></path>
        </svg>
      </li>
    </ul>
    <!--  Defining Angle Gradient Colors  -->
    <svg width="0" height="0">
      <defs>
        <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#2b8b27" />
          <stop offset="100%" stop-color="#8fecc8" />
        </linearGradient>
        <linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
          <stop stop-color="#8fecc8" />
          <stop offset="100%" stop-color="#8fecc8" />
        </linearGradient>
        <linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
          <stop stop-color="#8fecc8" />
          <stop offset="100%" stop-color="#a4f0ff" />
        </linearGradient>
        <linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
          <stop stop-color="#a4f0ff" />
          <stop offset="100%" stop-color="#a4f0ff" />
        </linearGradient>
        <linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
          <stop stop-color="#a4f0ff" />
          <stop offset="100%" stop-color="#d4f2f9" />
        </linearGradient>
        <linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
          <stop stop-color="#d4f2f9" />
          <stop offset="100%" stop-color="#2b8b27" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:100,400);

@keyframes load {
  0% {
    stroke-dashoffset: 0
  }
}

.progress {
  position: relative;
  display: inline-block;
  padding: 0;
  text-align: center;
  list-style-type: none;

  &>li {
    display: inline-block;
    position: relative;
    text-align: center;
    color: #93A2AC;
    font-family: Lato;
    font-weight: 100;
    margin: 2rem;

    &:before {
      content: attr(data-name);
      position: absolute;
      width: 100%;
      bottom: -2rem;
      font-weight: 400;
      margin-top: 30px;
    }

    &:after {
      content: attr(data-percent);
      position: absolute;
      width: 100%;
      top: 3.7rem;
      left: 0;
      // font-size: 2rem;
      text-align: center;
      font-weight: 500;
      font-size: 30px;
      margin: auto;
      display: flex;
      justify-content: center;
      color: #4a4a4a;

    }
  }

  svg {
    margin-bottom: 20px;
    width: 10rem;
    height: 10rem;

    &:nth-child(2) {
      position: absolute;
      left: 0;
      top: 0;
      transform: rotate(-90deg);
    }

    &:nth-child(2) path {
      fill: none;
      stroke-width: 25;
      stroke-dasharray: 629;
      stroke: #fff;
      opacity: .9;
      animation: load 10s;
    }
  }
}

</style>
