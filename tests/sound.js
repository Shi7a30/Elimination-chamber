// Sound button: off means no sound AND no vibration; on plays soft sounds without errors.
const {chromium}=require('playwright');
const {PAGE,finish}=require('./lib');
(async()=>{const b=await chromium.launch();const p=await b.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__vib=[];navigator.vibrate=function(x){window.__vib.push(x);return true}});
await p.goto(PAGE);await p.waitForTimeout(1500);
const r=await p.evaluate(async()=>{const out={};
 mute=false;window.__vib=[];['tap','ok','win','lose'].forEach(k=>sfx[k]());sfx.elim(3);out.onVib=window.__vib.length;out.onCtx=!!AC;
 mute=true;window.__vib=[];['tap','ok','win','lose'].forEach(k=>sfx[k]());sfx.elim(3);out.offVib=window.__vib.length;
 mute=false;$("snd").click();out.afterClick=mute;out.label=$("snd").getAttribute("aria-label");
 return out});
console.log(r);await b.close();
finish('sound and vibration',[...errs,!r.onVib&&'sound on: nothing vibrated',r.offVib&&'sound off: phone still vibrated '+r.offVib+' times',
 !r.onCtx&&'sound on: no audio was set up',r.afterClick!==true&&'sound button did not turn sound off'])})();
