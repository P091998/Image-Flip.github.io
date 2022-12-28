let meme=document.querySelector('#meme');
let btn=document.querySelector('#btn');

btn.addEventListener('click',generateMemes);
let i=-1;
function generateMemes()
{
    let ajax=new XMLHttpRequest;
    let url='https://api.imgflip.com/get_memes';

    ajax.open('GET',url,true);
    
    ajax.onreadystatechange=function()
    {
        if(this.status===200)
        {
            console.log(this.responseText);
            let ans = JSON.parse(this.responseText);
            let image=ans.data.memes[i];
            meme.innerHTML=`<img src=${image.url} class="img-fluid" alt="Image"/>`;
        }
        else
        {
            meme.innerText="Oops!!! There was an error."
        }
    }

    ajax.send();
    i++;
}