(function(){
  'use strict';

  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let result = document.getElementById('result');
  let startTime;
  let isStarted = false;

  start.addEventListener('click', function(){
    if(isStarted === true) {
      return;
      //return to prevent following 4 lines.
    }

    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
    result.textContent = '0.000';
    result.className = 'standby';
  })

  stop.addEventListener('click', function(){
    let elapsedTime;
    let diff;

    if(isStarted === false) {
      return;
    }

    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;

    result.textContent = elapsedTime.toFixed(3);
    //ToFixed(3): 小数点第3位までを必ず出すための修正

    this.className = 'pushed';
    start.className = '';
    result.classList = '';

    diff = elapsedTime - 5.0;
    if(Math.abs(diff) < 1.0 ){
      result.className = 'perfect'
    }
  });



})();



    //Date.now() メソッドは、UTC (協定世界時) での 1970 年 1 月 1 日 0 時 0 分 0 秒 から現在までの経過時間をミリ秒単位で返す
    //Type = Number
