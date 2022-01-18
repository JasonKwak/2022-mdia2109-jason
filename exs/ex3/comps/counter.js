var template = document.createElement('template');
template.innerHTML = `
<style>
    #counter {
        display:flex;
        padding: 5px;
        background-color:rgb(38, 38, 128);
    }

    #counter > button {
        background-color: rgb(253, 253, 59);
        border:none;
        width: 150px;
        height: 50px;
        border-radius: 20px;
        border: 3px solid rgb(51, 51, 10);

    }
    #counter > div {
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 10px;
        color: white;
    }

    #bar {
        width: 0px;
        height:10px;
        background-color:#BAD;
        transition: width 0.5s;
    }

</style>
<div id="counter">
    <button id="d_but">-</button>
    <div id="c_num">1</div>
    <button id="i_but">+</button>
</div>
<div id="bar">
</div>
`;


// Standard way that must be used for templating. Format doesn't change

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("#d_but").onclick = this.dec;
        this.shadowRoot.getElementById("#i_but").onclick = this.inc;
    }

    dec (){
        this.num = this.num - 1;
        this.shadowRoot.getElementById("#c_num").innerText= this.num;
    }
    
    inc (){
        this.num = this.num +1 ;
        this.shadowRoot.getElementById("#c_num").innerText= this.num;
    }
}

customElements.define("the-counter", TheCounter);