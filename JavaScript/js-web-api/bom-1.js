// navigator
const ua = navigator.userAgent;
const isChrome = ua.indexOf('Chrome');
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.search);
console.log(location.hash); // #号后面
console.log(location.pathname); // 路径

// history
history.back();
history.forward();