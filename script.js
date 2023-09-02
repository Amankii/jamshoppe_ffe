document.addEventListener('DOMContentLoaded', ()=> {
    
    const video0 = document.querySelector('.video');
    const media = matchMedia('(max-width: 600px)');

    media.addEventListener("change", ()=> {
        const vpl = MediaSource('./images/phone-screen.mp4');

        video0.innerHTML =  vpl;
    })

});