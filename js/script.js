function fall() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        item.style.display = 'block';
    };
};

function fpurple() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemImg = item.querySelector('.image');
        if (!itemImg.classList.contains('purple')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    };
};

function fgreen() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemImg = item.querySelector('.image');
        if (!itemImg.classList.contains('green')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    };
};

function fblue() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemImg = item.querySelector('.image');
        if (!itemImg.classList.contains('blue')) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
        console.log(itemImg.src);
    };
};

function fn20() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemPrice = item.querySelector('.price');
        if (itemPrice.textContent != "1 962 грн.") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
        console.log(itemPrice.textContent)
    };
};

function fn25() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemPrice = item.querySelector('.price');
        if (itemPrice.textContent != "2 462 грн.") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
        console.log(itemPrice.textContent)
    };
};

function fn30() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemPrice = item.querySelector('.price');
        if (itemPrice.textContent != "2 962 грн.") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
        console.log(itemPrice.textContent)
    };
};

function fy17() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemDate = item.querySelector('.date');
        if (itemDate.textContent != "Дата випуску: 10.2017") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    };
};

function fy18() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemDate = item.querySelector('.date');
        if (itemDate.textContent != "Дата випуску: 10.2018") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    };
};

function fy19() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        let itemDate = item.querySelector('.date');
        if (itemDate.textContent != "Дата випуску: 10.2019") {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    };
};

let bin = [];

function buyItem(n) {
    elem = '.item-' + n;
    let Item = document.querySelector(elem);
    bin.push(Item);
}

function fbin() {
    for (let i = 1; i <= 20; i++) {
        let n = '.item-' + i;
        let item = document.querySelector(n);
        item.style.display = 'none';
    }
    const basket_cont = document.querySelector('.basket_cont');
    basket_cont.style.display = 'block';
    const cont = document.querySelector('.main_basket');
    for(let i = 0; i < bin.length; i++){
        mainCost = 0;
        const photo = bin[i].querySelector('img').src;
        const item = document.createElement('div');
        const cost = bin[i].querySelector('.price').textContent;
        item.classList.add('item_cont');
        item.innerHTML = `
            <div class="item item_basket">
                <div class="side_left">
                    <img src="` + photo + `" alt="">
                    <div class="info">
                        <h3>Canon PowerShot A1100 Pink</h3>
                        <div class="item_age">` + cost + `</div>
                    </div>
                </div>
                <div class="side_right">
                    <div class="count">
                        <span class="arrow" onclick="left(` + (i + 1) + `)"><</span>
                        <input class="num num` + (i + 1) + `" value="0"></input>
                        <span class="arrow" onclick="right(` + (i + 1) + `)">></span>
                    </div>
                    <div class="cost">
                        <span class="main_cost cost` + (i + 1) + `">` + (mainCost + ' грн') + `</span>
                    </div>
                </div>
            </div>`;
        cont.prepend(item);
    }  
}

function left(n){
    let num = --document.querySelector('.num' + n).value;
    let cost = bin[n - 1].querySelector('.price').textContent;
    mainCost = num * parseInt(cost);
    const elem = document.querySelector('.cost' + n);
    elem.textContent = mainCost + ' грн';
}

function right(n){
    let num = ++document.querySelector('.num' + n).value;
    let cost = bin[n - 1].querySelector('.price').textContent;
    mainCost = num * parseInt(cost);
    const elem = document.querySelector('.cost' + n);
    elem.textContent = mainCost + ' грн';
}

function calc(){
    let count = 0;
    for (let i = 0; i < bin.length; i++){
        count += parseInt(document.querySelector('.cost' + (i + 1)).textContent);
    }
    document.querySelector('.total_cost span').textContent = count + ' грн';
}