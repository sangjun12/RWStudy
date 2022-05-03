var redbox = document.getElementById("redbox");
var greenbox = document.getElementById("greenbox");
var bluebox = document.getElementById("bluebox");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

var click_index;


var arr1 = [];
var arr2 = [];
var arr3 = [];

function init()
{
    arr1 = [];
    arr2 = [];
    arr3 = [];
    
    arr1.length = 0;
    arr2.length = 0;
    arr3.length = 0;

    arr1.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
    arr1.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
    arr1.push("🟩🟩🟩🟩🟩🟩🟩");
    arr1.push("🟦🟦🟦🟦🟦");
    arr1.push("🟪🟪🟪");
    arr1.push("⬛️");

    Draw();
}
///click_index = 1; -> click1
///click_index = 2; -> click2
///click_index = 3; -> click3
function Draw()
{
    while(first.firstChild != null)
        first.removeChild(first.firstChild)

    while(second.firstChild!= null)
        second.removeChild(second.firstChild)  
        
    while(third.firstChild!= null)
        third.removeChild(third.firstChild)    

    for(var i = 0; i < arr1.length; i++)
    {
        first.append(arr1[i]);
        first.append(document.createElement("br"));   
    }
    for(var i = 0; i < arr2.length; i++)
    {
        second.append(arr2[i]);
        second.append(document.createElement("br"));
    }
    for(var i = 0; i < arr3.length; i++)
    {
        third.append(arr3[i]);
        third.append(document.createElement("br"));
    }
}
function click1()
{     
    if(click_index == 2)
    {
        if(arr2.length != 0)
        {
            console.log("2번 선택후 1번 선택함");
            if(arr1.length == 0 || arr1[arr1.length - 1].length > arr2[arr2.length - 1].length)
            {
                arr1.push(arr2.pop());
                click_index = 0;
                Draw();
                
            } 
            else
            {
                alert("이동 할 수 없습니다.")
                console.log(click_index);
            }
        }
        
    }
    else if(click_index == 3)
    {
        if(arr3.length != 0)
        {
            console.log("3번 선택후 1번 선택함");
            if(arr1.length == 0 || arr1[arr1.length - 1].length > arr3[arr3.length - 1].length)
            {
                arr1.push(arr3.pop());
                click_index = 0;
                Draw();
            }
            else
            {
                alert("이동 할 수 없습니다.")
                click_index = 0;
            }
        }
        else
        {
            click_index = 0;
        }    
    }
    else if(click_index == 1)
    {
        click_index = 0;
    }
    else
    {
        click_index = 1;
    }
}
function click2()
{
    if(click_index == 1)
    {
        if(arr1.length != 0)
        {
            console.log("1번 선택후 2번 선택함");
            if(arr2.length == 0 || arr2[arr2.length - 1].length > arr1[arr1.length - 1].length)
            {
                arr2.push(arr1.pop());
                click_index = 0;
                Draw();
            }
            else
            {
                alert("이동 할 수 없습니다.") //위에 더 큰 블럭이 올라감
                click_index = 0;
            }
        }
        else
        {
            click_index = 2;
        }
    }
    else if(click_index == 3)
    {
        if(arr3.length != 0)
        {
            console.log("3번 선택후 2번 선택함")
            if(arr2.length == 0 || arr2[arr2.length - 1].length > arr3[arr3.length - 1].length)
            {  
                arr2.push(arr3.pop());
                click_index = 0;
                Draw();
            }
            else
            {
                alert("이동 할 수 없습니다.")
                click_index = 0;
            }
        }
        else
        {
            click_index = 0;  
        }
    }
    else if(click_index == 2)
    {
        click_index = 0;
    }
    else
    {
        click_index=2;
    }
}
function click3()
{

    if(click_index == 1)
    {
        if(arr1.length != 0)
        {
            console.log("1번 선택후 3번 선택함"); 
            if(arr3.length == 0 || arr3[arr3.length - 1].length > arr1[arr1.length - 1].length)
            {
                arr3.push(arr1.pop());
                click_index = 0;
                Draw();
            }
            else
            {
                alert("이동 할 수 없습니다.")
                click_index = 0;
            }
        }
        else
        {
            click_index = 0;
        }
    }   
    else if(click_index == 2)
    {
        if(arr2.length != 0)
        {
            console.log("2번 선택후 3번 선택함");
            if(arr3.length == 0 || arr3[arr3.length - 1].length > arr2[arr2.length - 1].length)
            {
                arr3.push(arr2.pop());
                click_index = 0;
                Draw();
            }
            else
            {
                click_index = 0;
            }
        }
        else
        { 
            click_index = 0;
        }    
    }
    else if(click_index == 3)
    {
        click_index = 0;
    }
    else
    {
        click_index = 3;
    }
}
