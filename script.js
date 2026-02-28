
const addData=(price,name)=>{
  const getCount= document.getElementById('count-Pro') ;
  const getPrice=document.getElementById('cartPrice');
  const getBalance=document.getElementById('my-Balance');
  if(price<=parseInt(getBalance.innerText)){
    let i=parseInt(getCount.innerText);
    getCount.innerText=i+1;

  const updatePrice=parseInt(getPrice.innerText)+price;
  getPrice.innerText=updatePrice;

  const updateBalance=parseInt(getBalance.innerText)-price;
  getBalance.innerText=updateBalance;

  alert("you brought "+name);

 }else{
  alert("your balance is too low")
}


}
