
/**
 * 防抖函数  单位时间内多次触发的函数只会执行最后一次
 * 实现思路  通过设置一个定时器,每次触发事件清除定时器,达到多次触发只执行最后一次
 * @param {Function} fn 需要进行防抖的函数
 * @param {number} delay 单位时间
*/
export default  function (fn,delay = 300) {
    let timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        //把前一个 setTimeout clear 掉
        clearTimeout(timeout);
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}