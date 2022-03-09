* 动态import
* 当用动态导入的方式导入默认导出时,其工作方式有所不同。
* 你需要从返回的对象中解构并重构命名 "default" 键

```
(async ()=>{
    if(somethingIsTrue){
        const { default:myDefault,foo,bar } = await import('/modules/my-module.js')
    }
})()

```