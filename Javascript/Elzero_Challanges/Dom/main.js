document.body.style.cssText = "margin: 0px; background-color : rgb(236,236,236); font-family :Tahoma, Arial;";

let h = document.createElement('header');
h.classList.add('website-head');
h.style.cssText = "background-color : rgb(255,255,255); display:flex; justify-content : space-between; align-items : center; padding : 20px; height:10px;";

document.body.prepend(h);

let logo = document.createElement('div');
logo.textContent = "Elzero";
logo.classList.add('logo');
logo.style.cssText = "color :rgb(35,169,110); font-weight:bold ;font-size:26px;";
logo.title = "website logo";
h.appendChild(logo);

let menu = document.createElement('ul');
menu.classList.add('menu');
menu.style.cssText = "list-style:none; padding:0px; margin:0px; display:flex";
h.appendChild(menu);

for (let i = 1; i <= 4; i++) {
    let li = document.createElement('li');
    li.textContent = i === 1 ? "Home" : i === 2 ? "About" : i === 3 ? "Service" : "Contact";
    li.style.cssText = "color:rgb(167, 166, 166); padding:10px";
    menu.appendChild(li);
}

let content = document.createElement('div');
document.body.append(content);
content.classList.add('content');
content.style.cssText = "margin-top:15px; margin-bottom:15px; padding:20px; display:flex; flex-wrap:wrap; justify-content:center; gap :20px; box-sizing:border-box; min-height: calc(100vh - 142px);"

for (let i = 1; i <= 15; i++) {
    let product = document.createElement('div');
    product.classList.add('product');
    let number = document.createElement('span');
    number.textContent = i;
    product.textContent = "product";
    product.prepend(number);
    number.style.cssText = "display:block; font-size:40px; color:black;  font-weight:bold; ";
    product.style.cssText = "margin:0px; padding:10px; height:fit-content; background-color:white; border:1px solid rgb(221,221,221); width: calc((100% - 40px) / 3); box-sizing:border-box; text-align:center; color:rgb(136,136,136); border-radius:6px;";
    content.appendChild(product);
}

let footer = document.createElement('footer');
footer.classList.add('footer');
footer.style.cssText = "background-color : rgb(35,169,110); text-align:center; padding:21px; color:white; font-size:17px;";
footer.textContent = "Copyright 2026";
document.body.appendChild(footer);