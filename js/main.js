function writeCode(prefix, code,fn) {
    let domCode = document.querySelector('#code')
    let n=0
    let id = setInterval(()=>{
        n +=1
        domCode.innerHTML = prefix + code.substring(0,n)
        //code.innerHTML = code.innerHTML.replace('html',
        //  '<span style ="color:red;">html</span>')
        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
        domCode.scrollTop = domCode.scrollHeight //10000 让代码往下翻
        styleTag.innerHTML = prefix + code.substring(0,n)
        if (n>=code.length){
            window.clearInterval(id)
            fn.call()
        }
    },0)

}
var result1 = `/*
            * 面试官你好, 我是范淑君
            * 我将以动画的形式来介绍自己
            * 只是文字介绍过于单调
            * 我就用代码来介绍爸
            * 首先准备一些样式
            */
            
            *{
                transition:all 1s;
            }
            html{
                background: rgb(222,222,222);
                font-size: 16px;
            }
            #code{
                border: 1px solid red;
                padding: 16px;
            }
            
            /*我需要加一些高亮*/
            .token.property{
                color: #905;
            }
            .token.selector{
                color: #690;
            }
            .token.function{
            color: #DD4A68;
            }
            .token.punctuation{
            color: #999;
            }
            /*加点3D效果*/
            #code{
                transform: rotate(360deg)
            }
            /*不玩了，我来介绍一下我自己吧*/
            /*我需要一张白纸*/
            
            /*接下俩将markdown变成html格式     ----marked.js*/
            /*给html加上样式*/
            
            `
var result2 =`
        #code{
            position: fixed;
            left: 0;
            width: 50%;
        }
        #paper{
            position: fixed;
            right: 0;
            width: 50%;
            height: 100%;
            padding: 16px;
            background-color: #ddd;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #paper > .content{
            width:100%;
            height:100%;
            background-color: white;
         }
`

var md = `
# 自我介绍
我是范淑君，
1996年3月出生，
江南大学毕业
自学前端半年，想应聘前端开发

#技能
熟悉Javascript html5 css 

#项目
1. 苹果样式轮播
2. 画板
3. 键盘
`

writeCode('', result1,()=>{
    creatPaper(()=>{
        writeCode(result1, result2,()=>{
            writeMarkdown(md)
        })
    })

})
function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    fn.call()

}
function writeMarkdown(markdown,fn) {
    let domPaper = document.querySelector('#paper > .content')
    let n=0
    let id = setInterval(()=>{
        n +=1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight //10000 让代码往下翻
        if (n>=markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },0)



}

