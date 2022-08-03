


//1.Display all numbers and operations other than AC and = inside input with id=result when we click it 
 

function display(num){
    result.value+=num
}


//2.clear all contents from inpuut when we click it

function clearAll()
{
result.value=" "
}

//3.Evaluate expression using eval
function output()
{
    result.value = eval(result.value)
}

//4.Remove last item

function removeItem(){
    result.value = (result.value).slice(0,-1)
}
