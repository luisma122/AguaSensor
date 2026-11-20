const slider=document.getElementById('levelSlider');
const percent=document.getElementById('levelPercent');
const tankWater=document.getElementById('tankWater');

function updateSimulation(){
  const level=Number(slider.value);
  percent.textContent=`${level}%`;
  tankWater.style.height=`${level}%`;
}
slider.addEventListener('input',updateSimulation);
updateSimulation();
document.getElementById('year').textContent=new Date().getFullYear();

const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{
  const open=mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}));

const form=document.getElementById('whatsappForm');
const sector=document.getElementById('sectorSelect');
const otherWrap=document.getElementById('otherAddressWrap');
const otherInput=document.getElementById('otherAddress');
sector.addEventListener('change',()=>{
  const other=sector.value==='Otro';
  otherWrap.hidden=!other;
  otherInput.required=other;
});
form.addEventListener('submit',event=>{
  event.preventDefault();
  const d=new FormData(form);
  const selectedSector=d.get('sector')==='Otro'?`Otro: ${d.get('otraDireccion')}`:d.get('sector');
  const message=[
    'Hola AguaSensor, quiero una demostración o piloto de 30 días.',
    `Nombre: ${d.get('nombre')}`,
    `Establecimiento: ${d.get('establecimiento')}`,
    `WhatsApp: ${d.get('whatsapp')}`,
    `Sector: ${selectedSector}`,
    `Tanques: ${d.get('tanques')}`
  ].join('\n');
  const encoded=encodeURIComponent(message);
  const chooser=document.createElement('div');
  chooser.className='number-chooser';
  chooser.innerHTML=`<div class="number-chooser-card"><h3>¿A cuál WhatsApp deseas enviar la solicitud?</h3><a target="_blank" rel="noopener" href="https://wa.me/573106589313?text=${encoded}">Enviar al 310 658 9313</a><a target="_blank" rel="noopener" href="https://wa.me/573052261783?text=${encoded}">Enviar al 305 226 1783</a><button type="button" class="chooser-close">Cancelar</button></div>`;
  document.body.appendChild(chooser);
  chooser.querySelector('.chooser-close').addEventListener('click',()=>chooser.remove());
  chooser.addEventListener('click',e=>{if(e.target===chooser)chooser.remove();});
});
document.querySelectorAll('.plan-action').forEach(button=>{
  button.addEventListener('click',()=>{
    document.getElementById('contacto').scrollIntoView({behavior:'smooth'});
    document.querySelector('[name="tanques"]').placeholder=`Indica tus tanques para solicitar: ${button.dataset.plan}`;
  });
});
