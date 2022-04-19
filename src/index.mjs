import asciify from "asciify-image";

import {playAudioFile} from 'audic';

playAudioFile('src/audio/audio.mp3');


var options = {
  fit: "box",
  // width: 75,
  height: 20,
  color: true,
};

async function asciifiyng(imageUrl) {
  try {
    const result = await asciify(`src/${imageUrl}`, options);
    return result;
  } catch (error) {
    console.error(error);
  }
}

let i = 0;
const interval = setInterval(async ()=>{
  if(i>298){
    clearInterval(interval)
    process.exit()
  }
  let filename = `00000${i}`.slice(-3);
  const url = `filme/1 Esponja _ A memória mais feliz DA VIDA do Lula Molusco _ 1 Esponja em Português_${filename}.jpg`;
  const image = await asciifiyng(url);
  console.log(image);
  i++;
}, 105)

