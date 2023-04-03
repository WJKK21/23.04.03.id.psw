function createEle(TagName){
    let element=document.createElement(TagName);
    return element;
}


function setStyle(element,style){
    for(let st in style){
        element.style[st]=style[st];
    }
}


//----------함수 여기까지----------------------------------------

const loginContainerSt={
    display:"flex",
    width:"100%",
    height:"100%",
}

const logoSt={
    
}



//-----------스타일 여기까지-------------------------------------------------


let loginRoot=document.getElementById("login");
let logo=createEle("div");
let loginBox=createEle("div");
let socialLogin=createEle("div");


//logo code
loginRoot.appendChild(logo);
logo.textContent="BOOK STARGRAM";


//login box code
loginRoot.appendChild(loginBox);
loginBox.appendChild(createEle("div"));
loginBox.appendChild(createEle("input"));
loginBox.appendChild(createEle("div"));
loginBox.appendChild(createEle("input"));

loginBox.child[0].textContent="ID";
loginBox.child[2].textContent="Password";





loginRoot.appendChild(socialLogin);





