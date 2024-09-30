document.addEventListener('DOMContentLoaded', ()=>{

    const article = [
        {
            img: "./images/desktop.jpg",
            text: "By markom! news bureau",
            type: "Advertising",
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus?",
        },
        {
            img: "./images/desktop.jpg",
            text: "By markom! news bureau",
            type: "Advertising",
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus?",
        },
        {
            img: "./images/desktop.jpg",
            text: "By markom! news bureau",
            type: "Advertising",
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus?",
        },
        {
            img: "./images/desktop.jpg",
            text: "By markom! news bureau",
            type: "Advertising",
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus?",
        },
];

    let posts = document.querySelector('#posts');


    article.forEach((art)=>{
        let mainDiv = document.createElement('div');
    mainDiv.className = " bg-purple-900 mx-2 my-2";

    let div1 = document.createElement('div');

    let div2 = document.createElement('div');
    div2.className = " flex justify-between mx-2";

    let div3 = document.createElement('div');
    div3.className = "flex flex-col items-center mx-2";

    let img = document.createElement('img');
    img.className = "";
    img.src = article[0].img;

    let text = document.createElement('p');
    text.className ="text-gray-300 font-light text-sm";
    text.textContent = article[0].text;

    let type = document.createElement('p');
    type.className ="text-gray-300 font-light text-sm";
    type.textContent = article[0].type;
    
    let title = document.createElement('h1');
    title.className = "font-semibold text-black text-lg";
    title.textContent = article[0].title;

    let para = document.createElement('p');
    para.className ="text-gray-300 text-lg";
    para.textContent = article[0].para;

    div1.appendChild(img);
    div2.appendChild(text);
    div2.appendChild(type);
    div3.appendChild(title);
    div3.appendChild(para);
    
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(div3);

    posts.appendChild(mainDiv);
    })
    
    

});