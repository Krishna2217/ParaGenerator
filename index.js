const numOfWords = document.getElementById("number");
const paragraph = document.querySelector('.paras');
const btn = document.getElementById("btn");
const generate = (r) =>{
    let word = "";
    let letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i=0; i<r; i++){
        const randoms = (Math.random()*25).toFixed(0);
        word += letter[randoms];
    }
    return word;
    
}
btn.addEventListener("click",()=>{
    let number = numOfWords.value;
    let paras = "";
    if(number == '') return;
    for(let i=0; i<number; i++){
        let random = (Math.random()*15).toFixed(0);
        let text = generate(random);
        paras += text;
        paras += " ";
    }
    let p = document.createElement('p');
    p.setAttribute('class','para');
    p.innerText=paras.toLowerCase();
    paragraph.append(p);
});