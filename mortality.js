// Species-appropriate narrative diagnoses. This is authored fiction, not a mortality-rate model.
const MORTALITY_VERSION=4;
const DISEASE_SOURCES={
 zoo:{title:'MSD · 動物園動物の疾病と高齢個体の管理',url:'https://www.merckvetmanual.com/exotic-and-laboratory-animals/zoo-animals/common-disorders-and-procedures-of-zoo-animals'},
 lionKidney:{title:'Smithsonian · 高齢ライオンの腎臓の健康管理',url:'https://nationalzoo.si.edu/animals/news/how-do-you-care-for-aging-lion'},
 tigerKidney:{title:'Seneca Park Zoo · アムールトラの慢性腎臓病',url:'https://senecaparkzoo.org/wp-content/uploads/2025/09/September-12-2025-Seneca-Park-Zoo-Amur-Tiger-Diagnosed-With-Chronic-Kidney-Disease.pdf'},
 horse:{title:'MSD · 馬の疝痛と腸の閉塞',url:'https://www.merckvetmanual.com/digestive-system/colic-in-horses/overview-of-colic-in-horses'},
 kidney:{title:'MSD · 犬猫の腎機能障害',url:'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/renal-dysfunction-in-dogs-and-cats'},
 dogHeart:{title:'MSD · 犬猫の心不全',url:'https://www.merckvetmanual.com/circulatory-system/heart-failure-in-dogs-and-cats/heart-failure-in-dogs-and-cats'},
 catHeart:{title:'MSD · 猫の心筋症',url:'https://www.merckvetmanual.com/cat-owners/heart-and-blood-vessel-disorders-of-cats/acquired-heart-and-blood-vessel-disorders-in-cats'},
 lymphoma:{title:'MSD · 犬のリンパ腫',url:'https://www.merckvetmanual.com/circulatory-system/lymphoma-in-dogs/lymphoma-in-dogs'},
 bird:{title:'MSD · アスペルギルス症',url:'https://www.merckvetmanual.com/infectious-diseases/fungal-infections/aspergillosis-in-animals'},
 rat:{title:'MSD · ラットの慢性呼吸器病',url:'https://www.merckvetmanual.com/all-other-pets/rats/disorders-and-diseases-of-rats'},
 rabbit:{title:'MSD · ウサギの消化器疾患',url:'https://www.merckvetmanual.com/all-other-pets/rabbits/digestive-disorders-of-rabbits'},
 reptile:{title:'MSD · 爬虫類の疾病',url:'https://www.merckvetmanual.com/all-other-pets/reptiles/disorders-and-diseases-of-reptiles'},
 fish:{title:'MSD · 魚類の疾病',url:'https://www.merckvetmanual.com/all-other-pets/fish/disorders-and-diseases-of-fish'},
 turtle:{title:'NOAA · ウミガメの線維乳頭腫症',url:'https://www.fisheries.noaa.gov/national/marine-life-distress/fibropapillomatosis-and-sea-turtles-frequently-asked-questions'},
 otter:{title:'MSD · 海生哺乳類のトキソプラズマ症',url:'https://www.merckvetmanual.com/exotic-and-laboratory-animals/marine-mammals/parasitic-diseases-of-marine-mammals'},
 toxo:{title:'MSD · トキソプラズマ症',url:'https://www.merckvetmanual.com/infectious-diseases/toxoplasmosis/toxoplasmosis-in-animals'},
 goat:{title:'MSD · ヤギの栄養に関連する疾病',url:'https://www.merckvetmanual.com/management-and-nutrition/nutrition-goats/nutritional-diseases-of-goats'},
 koala:{title:'NSW · コアラの疾病',url:'https://www.environment.nsw.gov.au/topics/animals-and-plants/threatened-species/programs-legislation-and-framework/nsw-koala-strategy/improving-health-and-safety-koalas'}
};
function mortalityAge(a){const span=life?.animalId===a.id?life.span:a.span;return a.unit==='日'?span/365:span}
function namedIllnesses(a,age=mortalityAge(a)){
 const managed=a.setting!=='wild';
 const illness=(cause,symptoms,course,ref,minAge=0)=>({cause,kind:'illness',symptoms,prelude:cause+'が進行し、'+symptoms+'。',text:cause+'が進行しました。'+symptoms+'。'+(managed?'世話や治療を受けましたが、':'')+course+'ため、死亡しました。',reference:DISEASE_SOURCES[ref],minAge});
 const pneumonia=()=>illness('細菌性肺炎','肺に炎症が起こり、呼吸が苦しくなりました','呼吸の状態が悪化した','zoo');
 let options=[];
 switch(a.species){
 case '馬':options=[illness('小腸の絞扼性閉塞（重い疝痛）','腸が締めつけられて血流が途絶え、激しい腹痛が起きました','腸の障害と全身状態の悪化から回復できなかった','horse')];break;
 case 'ライオン':case 'アムールトラ':options=[pneumonia()];if(managed)options.push(illness('慢性腎臓病','腎臓の働きが低下し、食欲と体重が落ちました','腎不全が進行した',a.species==='ライオン'?'lionKidney':'tigerKidney',10));break;
 case '犬':options=[illness('僧帽弁閉鎖不全症による心不全','心臓の弁がうまく閉じず、肺に水がたまって呼吸が苦しくなりました','心不全が進んだ','dogHeart',6),illness('悪性リンパ腫','リンパ系のがんが全身に広がり、食欲と体力が落ちました','病状が進行した','lymphoma',1)];break;
 case '猫':options=[illness('慢性腎臓病','腎臓の働きが低下し、食欲不振や脱水が進みました','尿毒症が進行した','kidney',5),illness('肥大型心筋症による心不全','心臓の筋肉が厚くなり、十分に血液を送れなくなりました','心不全が進行した','catHeart',1)];break;
 case 'ドブネズミ':options=[illness('マイコプラズマ性慢性呼吸器病','呼吸器の感染が長く続き、肺炎が悪化しました','呼吸の状態が悪化した','rat')];break;
 case 'カイウサギ':options=[illness('消化管うっ滞に伴う重度の衰弱','胃腸の動きが低下し、食べ物と水を十分に取れなくなりました','脱水と全身の衰弱が進んだ','rabbit')];break;
 case 'ヤギ':options=[illness('腸性毒血症','腸内で産生された細菌の毒素によって、全身の状態が急に悪化しました','急激な全身状態の悪化から回復できなかった','goat')];break;
 case 'コアラ':options=[illness('クラミジア感染症','感染による炎症が広がり、食欲と体力が落ちました','重い感染症から回復できなかった','koala')];break;
 case 'ラッコ':options=a.setting==='wild'?[illness('トキソプラズマ症による脳炎','原虫による感染で脳に炎症が起こり、動きが乱れました','神経症状が悪化した','otter')]:[pneumonia()];break;
 case 'ミーアキャット':options=[illness('全身性トキソプラズマ症','原虫による感染が複数の臓器に広がりました','臓器の障害が進んだ','toxo')];break;
 case 'ガラパゴスゾウガメ':options=[illness('細菌性肺炎','呼吸器の感染によって肺に炎症が起きました','呼吸の状態が悪化した','reptile')];break;
 case 'アオウミガメ':options=a.setting==='wild'?[illness('線維乳頭腫症による重度の衰弱','体にできた腫瘍が大きくなり、泳ぐことや餌を取ることが難しくなりました','十分に食べられず衰弱した','turtle')]:[illness('細菌性肺炎','肺に炎症が起こり、呼吸や浮き沈みに異常が出ました','呼吸の状態が悪化した','reptile')];break;
 case 'カクレクマノミ':options=[illness('海水性白点病（クリプトカリオン症）','寄生虫が体表やえらに障害を起こしました','えらの障害で呼吸できなくなった','fish')];break;
 case 'ジンベエザメ':case 'イワシ':options=[];break;
 case 'ナミアゲハ':case 'カブトムシ':case 'セイヨウミツバチ':case 'クロオオアリ':case '土壌の線虫':case 'マダコ':case 'ミズクラゲ':case 'ニホンアマガエル':options=[];break;
 default:
  if(a.group==='鳥類')options=[illness('アスペルギルス症','真菌の感染で呼吸器に病変が広がり、息が苦しくなりました','呼吸器の障害が進んだ','bird')];
  else if(a.group==='哺乳類')options=[pneumonia()];
 }
 return options.filter(o=>age>=o.minAge);
}
function detailedDeathOptions(a,legacy){
 const nonmedical=/^(捕食|餌不足|餌不足による衰弱|干ばつによる餌不足|交通事故|衝突事故|漁獲|混獲による溺死|漁具への混獲|船との衝突|サメによる咬傷|ほかの肉食獣による攻撃|同種との争いによるけが|乾燥による衰弱|食肉処理|寿命に伴う衰弱)$/;
 const options=legacy.filter(o=>nonmedical.test(o.cause)).map(o=>({...o,kind:o.cause==='食肉処理'?'production':o.cause==='寿命に伴う衰弱'?'aging':'external'}));
 if(a.farmUse==='production'||a.id==='chicken'||a.id==='chicken-layer')return options;
 if(a.species==='アオウミガメ'&&a.setting==='wild')options.push({cause:'ビニール袋の誤飲による腸閉塞',kind:'external',prelude:'餌を取る海にも、人の捨てたビニール袋が漂うようになりました。',text:'海を漂うビニール袋を餌と見誤り、飲み込みました。袋が消化管に詰まって腸閉塞を起こし、十分に餌を取れなくなりました。その後、衰弱が進んで死亡しました。',reference:{title:'NOAA · 海洋ごみの誤飲と腸閉塞',url:'https://marinedebris.noaa.gov/why-marine-debris-problem/ingestion'}});
 options.push(...namedIllnesses(a));
 const captive=a.setting==='zoo'||a.setting==='managed';
 const mature=!(a.adultAge&&(life?.animalId===a.id?life.span:a.span)<a.adultAge);
 const livedLong=(life?.animalId===a.id?life.span:a.span)>=a.span*.75;
 const ageAllowsSenescence=a.species!=='ジンベエザメ'||mortalityAge(a)>=70;
 if(captive&&mature&&livedLong&&ageAllowsSenescence&&!options.some(o=>o.kind==='aging'))options.push({cause:'老衰',kind:'aging',prelude:'年を重ね、少しずつ体を保つ力が弱くなっていきました。',text:'穏やかに息を引き取った。',reference:DISEASE_SOURCES.zoo});
 if(!options.length)options.push({cause:'環境の変化による衰弱',kind:'external',prelude:'周囲の環境が変わり、体を保つことが難しくなりました。',text:'周囲の環境の変化に体が対応できず、衰弱して死亡しました。'});
 return options;
}
function selectDeathOutcome(a){
 let options=deathOptions(a);const recent=deathHistory.slice(-2);
 // Variety is an explicit fiction rule: retain appropriate causes, avoid consecutive identical diagnoses.
 if(recent.length===2&&recent.every(e=>e.kind==='illness')&&options.some(o=>o.kind!=='illness'))options=options.filter(o=>o.kind!=='illness');
 const previous=[...deathHistory].reverse().find(e=>e.species===a.species);
 if(previous&&options.some(o=>o.cause!==previous.cause))options=options.filter(o=>o.cause!==previous.cause);
 const categories=[...new Set(options.map(o=>o.kind))];const category=pick(categories);
 return {...pick(options.filter(o=>o.kind===category)),modelVersion:MORTALITY_VERSION};
}
function recordDeath(){
 if(!life?.death||deathHistory.some(e=>e.serial===life.serial))return;
 deathHistory.push({serial:life.serial,species:animal().species,cause:life.death.cause,kind:life.death.kind});deathHistory=deathHistory.slice(-20);
}
function upgradeDeath(old,a){
 if(old.modelVersion===MORTALITY_VERSION)return old;
 const options=deathOptions(a),same=options.find(o=>o.cause===old.cause);
 if(same)return {...same,modelVersion:MORTALITY_VERSION};
 const illness=options.filter(o=>o.kind==='illness');const pool=/病|感染|疝痛|がん|腫瘍/.test(old.cause)&&illness.length?illness:options;
 const hash=[...(life.serial||a.id)].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0);
 return {...pool[hash%pool.length],modelVersion:MORTALITY_VERSION};
}

function simplifyAgingRecords(){
 const ending='穏やかに息を引き取った。';
 const old='年を重ね、食べる量や動ける時間が少しずつ減りました。慣れた場所で世話を受けながら過ごし、最後は寿命に伴う全身の衰弱で死亡しました。';
 for(const record of [life,...memories]){
  if(!record)continue;
  const aging=record.death?.cause?.startsWith('老衰');
  if(aging){record.death.cause='老衰';record.death.text=ending;}
  for(const event of record.events||[])if(event.text===old||(aging&&event.p===1&&event.tag?.includes('死亡')))event.text=ending;
 }
 for(const entry of deathHistory)if(entry.cause?.startsWith('老衰'))entry.cause='老衰';
}
