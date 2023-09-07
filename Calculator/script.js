const display=(val)=>
{
    document.getElementById('result').value+=val;
}
const equal=()=>
{
    document.getElementById('result').value=eval(document.getElementById('result').value);
}
const clr=()=>
{
    document.getElementById('result').value='';
}
