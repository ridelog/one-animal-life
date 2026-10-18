// Authored dramatic encounters. The odds describe this story, not real-world wildlife statistics.
function trialPool(a,p){
 const opt=(label,chance,good,bad,gain,loss)=>({label,chance,good,bad,gain,loss});
 const encounter=(id,title,body,options)=>({id,title,body,options});
 const captive=a.setting==='zoo'||a.setting==='managed';
 const aquatic=['イワシ','ジンベエザメ','アオウミガメ','カクレクマノミ','マダコ','ミズクラゲ'].includes(a.species);
 const insect=['ナミアゲハ','カブトムシ','セイヨウミツバチ','クロオオアリ'].includes(a.species);
 const larva=!!a.adultAge&&life.span*p<a.adultAge;
 const illness=encounter('illness','体に異変が起きた',captive?'餌を取る量が減り、いつものようには動けない。世話をする人が異変に気づき、状態を確かめている。':'体が重く、餌を取るのが難しい。弱っていても、食べ物と安全な居場所を自分で探さなければならない。',[
  opt(captive?'落ち着く場所で体を休める':'安全な場所で動きを抑える',.8,captive?(insect?'餌や温度・湿度が調整され、少しずつ活動が戻った。':'安静と治療の時間を過ごし、少しずつ餌を取れるようになった。'):'動きを抑えて休み、少しずつ体力を取り戻した。',captive?(insect?'餌や環境を調整してもすぐには活動が戻らず、体力が落ちた。':'診察と治療は続いた。命はつながったが、体力が落ち、回復には長い時間がかかった。'):'休んでも体調はすぐには戻らず、十分に食べられない日が続いた。',{health:3,food:-5},{health:-16,food:-12}),
  opt(captive?'いつもの動きを続けようとする':'餌を探しに出る',.55,captive?'動きの変化を見た飼育担当者が対応し、少しずつ体調が戻ってきた。':'餌を得ることができた。休息を取りながら、病気の時期を乗り越えた。',captive?'無理に動いて消耗し、状態を観察しながら別の場所で過ごすことになった。':'弱った体で餌を探して消耗し、やっとのことで休める場所に戻った。',{health:1,food:4},{health:-23,safety:-9})
 ]);
 const food=encounter('scarcity',captive?'いつもの餌が食べられない':'食べ物が見つからない',captive?'いつもの餌を前にしても食が進まない。担当者が餌の状態や体調を確かめている。':'いつもの場所に餌が少ない。このまま待つか、体力を使って別の場所を探すか。',[
  opt(captive?'慣れた場所で少しずつ食べる':'近くで探しながら休む',.75,captive?'用意する餌や与え方が調整され、少しずつ食べられるようになった。':'少ないながら餌を見つけ、空腹の時期をしのいだ。',captive?'食欲が戻らず、健康確認と経過観察が続いた。':'近くには餌がほとんどなく、体力が落ちた。',{food:5},{food:-20,health:-8}),
  opt(captive?'餌場から離れ、別の場所へ移る':'別の場所まで探しに行く',.6,captive?'動きの変化に担当者が気づいた。餌の位置が変わり、食べ始めた。':'移動の先で餌を見つけたが、道中で体力を使った。',captive?'しばらく食べないまま過ごし、体重が減って別の管理が必要になった。':'移動しても十分には見つからず、疲れと空腹が残った。',{food:10,health:-3},{food:-24,health:-13})
 ]);
 if(a.species==='ミズクラゲ'){
  food.body='流れの中に餌となるプランクトンが少ない。傘を動かしながら、水の流れに運ばれる。';
  food.options=[opt('傘を動かし続ける',.65,'潮の流れが変わり、触手に小さな餌がかかった。','餌の少ない海水の中を漂い、体力が落ちた。',{food:7},{food:-20,health:-9}),opt('拍動を抑えて漂う',.75,'流れに運ばれ、餌のある海水へ戻った。','餌の少ない場所で長く漂い、傘の動きが弱くなった。',{food:4},{food:-15,health:-13})];
 }
 if(captive){
  if(a.species==='馬'){
   const colic=encounter('colic','強い腹痛', '腹が痛み、落ち着いて立っていられない。世話をする人が異変に気づき、獣医師を呼んだ。',[
    opt('静かな場所で立ち止まる',.8,'診察と処置を受け、腸の状態が落ち着いた。しばらく食事と運動を制限して過ごした。','症状が重く、治療は長引いた。回復後もしばらく運動を休むことになった。',{health:-4},{health:-22,food:-10}),
    opt('落ち着かず体を動かす',.55,'人が安全な場所へ誘導し、診察を受けた。時間をかけて腹痛が治まった。','消耗が大きく、集中的な治療と長い休養が必要になった。',{health:-7},{health:-28,safety:-8})
   ]);return [colic,illness,food];
  }
  const canBite=['ライオン','アムールトラ','チーター','ホッキョクグマ','ジャイアントパンダ','レッサーパンダ','コアラ','ミーアキャット','カピバラ','ユーラシアカワウソ','ラッコ','カニクイザル','犬','猫','ドブネズミ'].includes(a.species);
  if(canBite){
   const incident=encounter('keeperIncident','人を傷つけてしまった',a.setting==='zoo'?'移動の作業中、近づいた人に驚き、反射的に噛みついてしまった。人は退避し、周囲の扉が閉められた。事故の状況と、今後の安全な飼育方法が確認される。':'世話をする人に急に触れられ、驚いて噛みついてしまった。人が離れ、しばらく静かな場所で様子を見られることになった。',[
    opt('人から距離を取り、奥へ下がる',.8,'静かな場所へ移った。健康状態と事故の原因が調べられ、人と直接接触しない世話の方法へ変わった。','警戒が強く残り、別の場所で過ごす期間が長引いた。人との関わりは減った。',{safety:-5,bond:-9},{safety:-17,bond:-22}),
    opt('落ち着かず動き回る',.45,'人は距離を取り、安全に移動できるまで待った。その後は隔てを通して世話を受けることになった。','興奮が続き、安全確保のために行動範囲を制限された。飼育方法や移動先の検討が続き、暮らしが変わった。',{safety:-9,bond:-13},{safety:-26,bond:-30})
   ]);return [incident,illness,food];
  }
  if(aquatic){
   const water=encounter('water','水槽の環境が変わった','水質や水温に異変が起こり、体の調子が崩れた。飼育員が設備を確認し、別の水槽への移動を準備している。',[
    opt('動きを抑える',.8,'環境が調整された水槽へ移され、少しずつ元の状態に戻った。','移動と環境の変化で体力が落ち、長い経過観察が必要になった。',{health:-3,safety:-3},{health:-19,safety:-10}),
    opt('いつもの動きを続ける',.55,'飼育員が異変に気づいて対応し、環境が安定した。','環境が落ち着くまでに体力を消耗し、しばらく餌を取りにくくなった。',{health:-5},{health:-24,food:-14})
   ]);return [water,illness];
  }
  if(insect){
   const handling=encounter('handling','飼育場所の入れ替え','餌や敷材の交換が始まった。慣れた足場が動き、体を支える場所を探す。',[
    opt(larva?'近くの葉や土につかまる':'近くの足場につかまる',.85,'飼育員が体を傷つけないように移し、新しい餌のある場所で落ち着いた。','移動の途中で体を傷めた。世話を受けながら、動きを抑えて過ごした。',{safety:-2},{health:-17,safety:-9}),
    opt(larva?'体を動かして離れる':'別の場所へ移る',.6,'近くの安全な足場へ移り、交換が終わるのを待った。','慌てて動いて体を傷め、活動できる範囲が狭くなった。',{safety:-3},{health:-23,safety:-12})
   ]);return [handling,illness,food];
  }
  return [illness,food];
 }
 if(a.species==='ミズクラゲ')return [food,encounter('current','流れが変わった','強い流れで浅い場所へ運ばれ、水温や塩分の変化が体に負担をかける。',[
  opt('傘を動かして泳ぎ続ける',.6,'流れが変わり、沖の海水へ戻れた。','浅い場所にとどまり、傘を傷めながら流れが変わるのを待った。',{health:-4},{health:-22}),
  opt('水流に運ばれる',.7,'潮に運ばれ、また餌のある海水の中へ戻った。','岸近くで長く漂い、体力を失った。',{safety:-4},{health:-18,food:-12})
 ])];
 const top=['ライオン','アムールトラ','チーター','ホッキョクグマ','アジアゾウ','ジャイアントパンダ','ガラパゴスゾウガメ','ジンベエザメ'].includes(a.species);
 const predator=encounter('predator','捕食者が迫る',aquatic?'水の向こうから、あなたを狙う捕食者が近づいてきた。餌を追う動きを止め、逃げる方向を探す。':larva?'葉や土の近くで、あなたを狙う捕食者の気配がする。小さな体で身を隠す場所を探す。':'餌を探していると、あなたを狙う捕食者が近づいてきた。気づかれないよう隠れるか、距離を取るか。',[
  opt(aquatic?'進む向きを変える':larva?'葉や土の陰へ身を寄せる':'近くの陰に身を隠す',.8,'捕食者は別の方向へ離れた。しばらく隠れたあと、ようやく動き出した。','逃れることはできたが、体を傷つけられた。餌を探すにも時間がかかるようになった。',{safety:-6,food:-4},{health:-24,safety:-18}),
  opt(aquatic?'全力で泳いで離れる':larva?'体を動かして離れる':'急いで距離を取る',.6,'追跡を振り切った。逃げるために体力を使い、休む場所を探した。','追われる途中でけがをした。命はつながったが、動きにくさが残った。',{health:-6,safety:-5},{health:-29,safety:-20})
 ]);
 const capture=encounter('capture','人の仕掛けが近い',aquatic?'進む先に、人が使う漁具がある。逃げ道が狭くなっている。':'いつもの通り道に、人が置いた捕獲用の仕掛けがある。中には餌の匂いがする。',[
  opt(aquatic?'仕掛けから離れる':'餌に近づかず迂回する',.85,'仕掛けから離れ、安全な場所へ戻った。その日は十分な餌を取れなかった。','離れようとして仕掛けに触れ、体を傷めた。時間をかけて抜け出した。',{food:-7,safety:-4},{health:-18,safety:-15}),
  opt(aquatic?'狭い隙間を進む':'近くの餌を確かめる',.4,'仕掛けに気づき、すぐに引き返した。','仕掛けに捕らわれた。もがいた末に抜け出せたが、けがと強い警戒が残った。',{food:-3,safety:-8},{health:-27,safety:-25})
 ]);
 if(insect||a.species==='土壌の線虫')return [predator,food];
 if(top)return [food,illness,capture];
 return [predator,capture,illness,food];
}
function ensureTrials(){
 if(!life||Array.isArray(life.trials))return;
 life.trials=[];if(life.ended||life.progress>=.85)return;
 const count=Math.random()<.5?1:2,used=new Set(),start=life.progress;
 const occupied=[...storyEvents().map(e=>e.p),choicePoint(),.3,.78,.93,1];
 for(let i=0;i<count;i++){
  const low=start<.2?(i===0?.24:.65):start+(i+1)*(.86-start)/(count+1);
  let p=Number((low+Math.random()*(start<.2?.055:.008)).toFixed(4));
  while(occupied.some(v=>Math.abs(v-p)<.0001))p=Number((p+.0003).toFixed(4));
  const pool=trialPool(animal(),p).filter(t=>!used.has(t.id));const trial=pick(pool.length?pool:trialPool(animal(),p));used.add(trial.id);
  life.trials.push({...trial,p,roll:Math.random(),done:false});occupied.push(p);
 }
}
function showTrial(){
 const index=Number(life.pending.split(':')[1]),trial=life.trials?.[index];if(!trial)return;
 const result=life.pending.startsWith('trialResult:');
 $('#decision').innerHTML=`<div class="decision trial"><small>試練 ${index+1} / ${life.trials.length}${result?' · その後':''}</small><h3>${esc(trial.title)}</h3><p>${esc(result?trial.result:trial.body)}</p>${result?`<p class="small">${esc(trial.changes)}</p><button id="continueTrial" class="primary">この一生を続ける →</button>`:trial.options.map((o,i)=>`<button data-trial-option="${i}">${esc(o.label)} →</button>`).join('')}<p class="note">出来事と結果は創作です。選択しても、結果を思いどおりにできるとは限りません。</p></div>`;
 if(trial.id==='keeperIncident')$('#decision').querySelector('.trial')?.insertAdjacentHTML('beforeend','<p class="note">事故後の対応は架空の一例です。<a href="https://nationalzoo.si.edu/news/safety-report-for-zebra-incident-national-zoo" target="_blank" rel="noopener">安全管理の背景：Smithsonianの事故報告</a></p>');
 if(result)$('#continueTrial').onclick=()=>resolvePending();else document.querySelectorAll('[data-trial-option]').forEach(b=>b.onclick=()=>resolvePending(Number(b.dataset.trialOption)));
 updateButtons();
}
function resolveTrial(n){
 const result=life.pending.startsWith('trialResult:'),index=Number(life.pending.split(':')[1]),trial=life.trials[index];
 if(result){life.pending=null;$('#decision').innerHTML='';refresh();updateButtons();persist();return}
 if(trial.done)return;
 const selected=Number.isInteger(n)&&n>=0&&n<trial.options.length?n:0,o=trial.options[selected];
 const chance=Math.max(.2,o.chance-(life.stats.health<35?.15:0));const success=trial.roll<chance,changes=success?o.gain:o.loss;
 trial.done=true;trial.selected=selected;trial.success=success;trial.result=o[success?'good':'bad'];
 const labels={health:'健康',safety:'安心',bond:'つながり',food:'食べ物'};
 trial.changes=Object.entries(changes).map(([key,delta])=>{const before=life.stats[key];life.stats[key]=Math.max(5,Math.min(100,before+delta));const actual=life.stats[key]-before;return labels[key]+' '+(actual>0?'+':'')+actual}).join(' · ');
 life.events.push({p:life.progress,tag:'試練の結果',text:o.label+'。'+trial.result});
 life.pending=auto?null:'trialResult:'+index;
 if(auto){$('#decision').innerHTML='';refresh();updateButtons()}else{refresh();showTrial()}
 persist();
}
