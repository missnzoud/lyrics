import {API} from './api.js';
import * as UI from './ui.js';


console.log(UI);
UI.searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();


    const artistName = UI.artistInput.value,
          songName = UI.sunInput.value;
                             //console.log(artistName + ':' + songName);

 if(artistName === '' || songName ===''  ) {
     UI.messageDiv.innerHTML = 'error... all field are mandatory';
     UI.messageDiv.classList.add('Error');
       //UI.messageDiv.style = 'border:solid';
       setTimeout(() => {
        UI.messageDiv.innerHTML = '';
        UI.messageDiv.classList.remove('error');
     }, 3000)
    
 }else{
     const lyric = new API(artistName, songName);
        //console.log(lyric);
        lyric.queryAPI()
            .then(data => {
               if(data.lyric.lyrics) {
                    let result = data.lyric.lyrics;
                    UI.resultDiv.textContent = result;
               } else {
                    UI.messageDiv.innerHTML = 'No Lyrics Found';
                    UI.messageDiv.classList.add('error');
                    setTimeout(() => {
                        UI.messageDiv.innerHTML = '';
                        UI.messageDiv.classList.remove('error');    
                        UI.searchForm.reset();
                    }, 3000);             
                  }
            })
    }

 
 

})