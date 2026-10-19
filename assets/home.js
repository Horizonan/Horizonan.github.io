import {DiceRenderer,randomDie} from './dice.js';

const skins={
  ruby:{name:'Ruby',color:[232,44,58],ink:'#fff9f8',shade:'#821d2a',glint:[255,207,213],gloss:.2},
  unicorn:{name:'Unicorn',theme:'unicorn',color:[220,192,237],ink:'#5b3d78',shade:'#fff6ff',glint:[255,243,255],gloss:.3},
  blockcraft:{name:'Blockcraft',theme:'blockcraft',color:[114,141,64],ink:'#fff9d9',shade:'#3c3528',glint:[213,235,159],gloss:.05}
};
const canvas=document.getElementById('preview-die');
const roll=document.getElementById('preview-roll');
const status=document.getElementById('preview-result');
let renderer,selected='ruby',value=5,rolling=false;

try{
  renderer=new DiceRenderer(canvas);
  document.getElementById('preview-controls').hidden=false;
  for(const button of document.querySelectorAll('button[data-skin]')){
    button.addEventListener('click',()=>{
      if(rolling)return;
      selected=button.dataset.skin;renderer.setSkin(skins[selected]);
      document.getElementById('rolla-preview').dataset.skin=selected;
      document.querySelectorAll('button[data-skin]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      canvas.setAttribute('aria-label',`${skins[selected].name} three-dimensional die showing ${value}`);
    });
  }
  roll.addEventListener('click',async()=>{
    if(rolling)return;
    rolling=true;roll.disabled=true;roll.querySelector('span').textContent='Rolling…';
    document.querySelectorAll('button[data-skin]').forEach(b=>b.disabled=true);
    status.textContent='';canvas.setAttribute('aria-label',`${skins[selected].name} die rolling`);
    try{
      value=randomDie(6);await renderer.animate([value]);
      status.textContent=`You rolled ${value}`;
      canvas.setAttribute('aria-label',`${skins[selected].name} three-dimensional die showing ${value}`);
    }catch{status.textContent='Open Rolla to keep playing.';}
    finally{
      rolling=false;roll.disabled=false;roll.querySelector('span').textContent='Roll again';
      document.querySelectorAll('button[data-skin]').forEach(b=>b.disabled=false);
    }
  });
}catch{
  // The project itself remains a normal link if canvas is unavailable.
  canvas.hidden=true;status.textContent='Explore the full experience →';
}
