
//节流throttle代码：
/**
 * 节流函数 单位时间内多次触发只会执行一次
 * 实现思路  保存一个标识, 设置一个定时器, 在目标函数执行完毕后改变标识,达到单位时间只执行一次
 * @param {Function} fn 需要进行防抖的函数
 * @param {number} delay 单位时间
*/
export default function(fn,delay = 300) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
         // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
         // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => {
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
}