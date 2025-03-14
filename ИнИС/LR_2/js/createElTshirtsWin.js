 import { createElement } from "./utils.js";

 const selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
 
 // T-shirts window

 export function createElements() {

    const tshirtsWindowCont = createElement({
        elementName: 'div',
        className: 'tshirts-window-cont',
        inner: selectedShirt.name,
    });
    document.body.append(tshirtsWindowCont);

    const bigShirtsCard = createElement({
        elementName: 'div',
        className: 'big-shirts-card',
        
    });
    tshirtsWindowCont.append(bigShirtsCard);


    const bigCardInf = createElement({
        elementName: 'div',
        className: 'big-card-inf',
    });
    bigShirtsCard.append(bigCardInf);

    const bigPrice = createElement({
        elementName: 'h3',
        className: 'big-price',
        inner: selectedShirt.price,
    });
    bigCardInf.append(bigPrice);

    const cardDesc = createElement({
            elementName: 'span',
            className: 'card-desc',
            inner: selectedShirt.description,
    });
    bigCardInf.append(cardDesc);

    const bigSide = createElement({
        elementName: 'div',
        className: 'big-side',
        inner: 'Side:'
    });
    bigCardInf.append(bigSide);

    const front = createElement({
        elementName: 'button',
        className: 'btn-side',
        inner: 'Front',
    });
    bigSide.append(front);

    const back = createElement({
        elementName: 'button',
        className: 'btn-side',
        inner: 'Back',
    });
    bigSide.append(back);

    const bigColor = createElement({
        elementName: 'div',
        className: 'big-color',
        inner: 'Color:'
    })
    bigCardInf.append(bigColor);

    const btnColor = createElement({
        elementName: 'button',
        className: 'btn-color',
        inner: ''
    });
    bigColor.append(btnColor);


    // IMG 

    const bigImg = createElement({
        elementName: 'img',
        className: 'big-img',
        
    });
    if (front.innerHTML == "Front") {
        bigImg.src = `../${selectedShirt.default.front}`;
    } else bigImg.src = `../${selectedShirt.default.back}`;
    bigShirtsCard.append(bigImg);

    



}