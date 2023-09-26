function productName(elementadd){
  const productName = elementadd.children[1].children[1].innerText;
  const fixedName = document.getElementById('product-name')
  const li = document.createElement('li')
  li.innerText = productName;
  fixedName.appendChild(li);
  
  // price add
  const priceString = elementadd.children[1].children[2].children[0].innerText;
  const realprice = parseFloat(priceString);
  const totalprice = document.getElementById('total-prices')
  const previouspriceString = totalprice.innerText;
  const previousprice = parseFloat(previouspriceString);
  const LastTotalPrice = previousprice + realprice;
  totalprice.innerText = LastTotalPrice;
  
  if(totalprice.innerText>0){
    const makepurchase = document.getElementById('Purchase')
    makepurchase.removeAttribute('disabled')
  }
  if(totalprice.innerText>=200){
    const applybutton = document.getElementById('btn-apply')
    applybutton.removeAttribute('disabled');
  }

}
function elementInnertext(elementId,total){
   const element = document.getElementById(elementId)
   element.innerText = total;
}

function discountelement(Calling){
  const copounadd = Calling.previousElementSibling.value;
  Calling.previousElementSibling.value = "";
  const addtotalprice = document.getElementById('total-prices')
  const addtotalpricestring = addtotalprice.innerText;
  const TotalPrice = parseFloat(addtotalpricestring)
  if(copounadd === 'SELL200'){
     const discount = (TotalPrice*20)/100
     elementInnertext('discount',discount);
     
     const total = (Totalprice - discount)
     elementInnertext('total',total);
     
  }
  else{
    alert('Please valid coupon');
  } 
}


function clearAlldata(){
  const totalprice = document.getElementById('total-prices')
  totalprice.innerText = 0;
  elementInnertext('discount',0)
  elementInnertext('total',0);
  const productnameset = document.getElementById('product-name')
  while(productNameset.firstChild){
    productnameset.removeChild(productnameset.firstChild);
  }
}


