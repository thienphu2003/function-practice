function binhphuong(a)
{
    return a*a;
}
let number=4;
console.log(binhphuong(4));
function dientich_chuvi(bankinh)
{
    const pi=3.14;
    let dientich=bankinh*bankinh*pi;
    let chuvi=bankinh*2*pi;
    console.log(dientich);
    console.log(chuvi);
}
let radius=2;
dientich_chuvi(radius);
function giaithua(a)
{
    if(a===1)
        return 1;
    else if(a===2)
        return 2;
    else
        return (a*giaithua(a-1));
}
let v=3;
console.log(giaithua(v));
function min(a,b,c)
{
    if(a<b)
        if(b<c)
            console.log(a);
        else if(a<c)
            console.log(a);
        else if(a>c)
            console.log(c);
    else
        if(a<c)
            console.log(b);
        else if(b<c)
            console.log(b);
        else if(b>c)
            console.log(c);
}
let x=1;
let y=2;
let z=3;
min(1,2,3);
function true_false(a)
{
    if(a>0)
        return true;
    else return false;
}
let number1=2;
console.log(true_false(number1));
function swap(a,b)
{
    let temp=a;
    a=b;
    b=temp;
    console.log(a);
    console.log(b);
}
let number2=3;
let number3=4;
swap(3,4);
function swapArray(arr)
{
    let begin=0;
    let end=arr.length-1;
    while(begin<end)
    {
        let temp=arr[begin];
        arr[begin]=arr[end];
        arr[end]=temp;
        begin++;
        end--;
    }
    return arr;
}
let array=[1,2,3,4,5,6];
console.log(swapArray(array));
function checkchar(string,a)
{
    let count=0;
    for(let x in string)
    {
        if(string[x]===a)
        {
            count++;
        }
    }
    if(count===0)
        return -1;
    else return count;
}
let array2=['H','H','T','H'];
console.log(checkchar(array2,'H'));