@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");
* {
  box-sizing: border-box;
}
body {
  font-family: "Alegreya Sans", sans-serif;
  background-color: #010651e1;
  overflow: hidden;
  margin: 0;
  height: 100vh;
}
.counter {
  position: fixed;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
h1 {
  text-align: center;
}
h4 {
  font-size: 20px;
  margin: 5px;
  color: aliceblue;
  text-transform: uppercase;
}
.counter.hide {
  transform: translate(-50%, -50%) scale(0);
  animation: hide 0.2s ease-out;
}
.counter {
  display: none;
}
.counter.show {
  display: block;
}
.final {
  position: fixed;
  top: 50%;
  left: 50%;
  color: aliceblue;
  transform: translate(-50%, -50%) scale(0);
}
.final.show {
  transform: translate(-50%, -50%) scale(1);
  animation: show 0.2 ease-out;
}
@keyframes hide {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
}
@keyframes show {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  30% {
    transform: translate(-50%, -50%) scale(1.4);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.nums {
  color: orange;
  font-size: 50px;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 50px;
  font-size: 63px;
}
.nums span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(120deg);
  transform-origin: bottom center;
}
.nums span.in {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: goIn 0.5s ease-in-out;
}
.nums span.out {
  animation: goOut 0.5s ease-in-out;
}
@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }
  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes goOut {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
}
#replay {
  background-color: rgb(225, 117, 2);
  border-radius: 10px;
  border: none;
  padding: 16px;
  cursor: pointer;
  text-align: center;
  width: 120px;
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
  color: rgb(252, 252, 252);
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

#replay:hover {
  background-color: rgb(254, 170, 81);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
#replay span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.3s;
}
#replay span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

#replay:hover span {
  padding-right: 25px;
}

#replay:hover span:after {
  opacity: 1;
  right: 0;
}
