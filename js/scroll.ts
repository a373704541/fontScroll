class FontScroll{
    bigEl: any ; // 获取父元素
    ulEl: any;  // 获取ul元素
    cloneEl: any;   // 获取需要克隆ul元素
    time:number; // 滚动时间
    limitNumer:number; // 限制多少条
    constructor(bigEl:any,ulEl:any,cloneEl:any,time:number,limitNumer:number){
        this.bigEl = document.querySelector(bigEl)
        this.ulEl = document.querySelector(ulEl)
        this.cloneEl = document.querySelector(cloneEl)
        this.time = time
        this.limitNumer = limitNumer
        this.init()
        this.move()
    }
    public init(){
        if(this.ulEl.offsetHeight >= this.bigEl.offsetHeight){
            this.cloneEl.innerHTML = this.ulEl.innerHTML
        }
    }
    private move(){
        var stopTime = setInterval(()=>{
            if( this.bigEl.scrollTop >= this.ulEl.offsetHeight){
                this.bigEl.scrollTop = 0
            }else {
                this.bigEl.scrollTop = this.bigEl.scrollTop + 1
            }
        },this.time)
    }
} 