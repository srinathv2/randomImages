
function f(){
    document.getElementById("butt").addEventListener('click',()=>{

        document.body.innerHTML=`
        <div><img src="https://source.unsplash.com/260x180/?${document.getElementById("text").value}" alt="no net"></div>
        <div class="uin">
            <button type="submit" id="bored">Bored🥱?</button>
        </div>`
        
        document.getElementById("bored").addEventListener('click',()=>{
            document.body.innerHTML=`<input type="text" id="text" placeholder="type something nature,tech">
            <button type="submit" id="butt">Apply</button>`;
            f();
        })
        
    })
    
}
document.getElementById("bored").addEventListener('click',()=>{
    document.body.innerHTML=`<input type="text" id="text" placeholder="type something nature,tech">
        <button type="submit" id="butt">Apply</button>`;
    f();
})