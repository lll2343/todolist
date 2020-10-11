var choosen = "";//用于保存待做的内容
var finishedText = "";//用于保存已做的内容

//只能添加到待做
function add(){
    var waitToDo = document.createElement("li");
    var temp=document.getElementById("wait");
    var input = document.getElementById("editAndShow");
    waitToDo.innerHTML = input.value;
    temp.appendChild(waitToDo);
    alert("添加到待做成功！");

    //点击显示在textarea，并且使修改和改为已做可用
    waitToDo.onclick = function(){
        //把编辑框的内容改成和事件相同的内容
        input.value = waitToDo.innerHTML;
        choosen = waitToDo.innerHTML;
        var btn_c = document.getElementById("btn_change");
        btn_c.disabled = false;
        var btn_ul = document.getElementById("btn_ulChange");
        btn_ul.disabled = false;
    }
}

//只能删除已做的事情
function Delete(){
    var input = document.getElementById("editAndShow")
    input.value="";
    //获取到li的数组
    var Uarry = document.getElementById("finished").childNodes;
    for(let i = 0; i != Uarry.length; ++i)
    {
        if(Uarry[i].innerHTML == finishedText){
            var btn_d = document.getElementById("btn_del");
            btn_d.disabled = true;
            Uarry[i].remove();
        }
    }
}

function change(){
    var input = document.getElementById("editAndShow");
    var Uarry = document.getElementById("wait").childNodes;
    for(let i = 0; i != Uarry.length; ++i)
    {
        if(Uarry[i].innerHTML == choosen){
            //将li的内容修改为文本框中的内容
            Uarry[i].innerHTML = input.value;
            var btn_c = document.getElementById("btn_change");
            btn_c.disabled = true;
            var btn_ul = document.getElementById("btn_ulChange");
            btn_ul.disabled = true;
        }
    }
}

function ulChange(){
    var Uarry = document.getElementById("wait").childNodes;
    for(let i = 0; i != Uarry.length; ++i)
    {
        if(Uarry[i].innerHTML == choosen){
            //从待做删除，在已做添加
            var finished = document.createElement("li");
            finished.innerHTML = Uarry[i].innerHTML;
            var temp = document.getElementById("finished");
            temp.appendChild(finished);
            Uarry[i].remove();

            //修改按钮的可用不可用
            var btn_c = document.getElementById("btn_change");
            btn_c.disabled = true;
            var btn_ul = document.getElementById("btn_ulChange");
            btn_ul.disabled = true;
            alert("修改为已做成功")

            finished.onclick = function(){
                var input = document.getElementById("editAndShow");
                input.value = finished.innerHTML;
                finishedText = finished.innerHTML;
                var btn_d = document.getElementById("btn_del");
                btn_d.disabled = false;
            }
        }
           
    }
}

function about(){
    alert("简单的todolist,在文本框中输入，点击添加可以添加到待做，左边的待做栏点击可以显示并使用修改和改为待做功能，点击已做栏可以实现删除功能");
}