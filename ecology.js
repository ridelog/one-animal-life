// Natural-history notes are sourced; individual lives and probability weights are fiction.
const REFERENCES={
horse:{title:'JRA · 育成牧場とは',url:'https://own.jra.jp/facilities/farm/hidaka/intro/'},
horseDiet:{title:'University of Minnesota · Using hay in horse diets',url:'https://extension.umn.edu/agriculture/animals-and-livestock/horse/hay-in-horse-diets'},
racing:{title:'JRA · 競馬をテキストで学ぶ',url:'https://jra.jp/kouza/beginner/seminar/pdf/learn-by-text.pdf'},
retire:{title:'JRA · 引退競走馬への取組み',url:'https://own.jra.jp/company/social/hretirement/index.html'},
giraffe:{title:'東京ズーネット · キリン',url:'https://www.tokyo-zoo.net/ueno/encyclopedia/giraffe/index.html'},
giraffeFeed:{title:'多摩動物公園 · キリン用給餌器',url:'https://www.tokyo-zoo.net/topics/news/tama/3561_24375_2017-09-08.html'},
giraffeYoung:{title:'上野動物園 · キリンの離乳',url:'https://www.tokyo-zoo.net/topics/news/ueno/2294_26291_2020-06-18.html'},
elephant:{title:'Smithsonian’s National Zoo · Asian elephant',url:'https://nationalzoo.si.edu/animals/asian-elephant'},
petDiet:{title:'Merck Veterinary Manual · Feeding practices in small animals',url:'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals'},
cat:{title:'Merck Veterinary Manual · Social behavior of cats',url:'https://www.merckvetmanual.com/en-us/veterinary/behavior/behavior-of-cats/social-behavior-of-cats'},
rat:{title:'University of Michigan · Rattus norvegicus',url:'https://animaldiversity.org/accounts/Rattus_norvegicus/'},
monkey:{title:'University of Michigan · Macaca fascicularis',url:'https://animaldiversity.org/accounts/Macaca_fascicularis/'},
sparrow:{title:'RSPB · Tree sparrow',url:'https://www.rspb.org.uk/birds-and-wildlife/tree-sparrow'},
sparrowYoung:{title:'RSPB · Tree sparrow feeding and nesting',url:'https://web-cdn.rspb.org.uk/helping-nature/what-we-do/influence-government-and-business/farming/advice-for-farmers-helping-bird-species/tree-sparrow-advice-for-farmers'},
ant:{title:'東京ズーネット · アリの女王探し',url:'https://www.tokyo-zoo.net/topics/news/tama/2287_26298_2020-06-21.html'},
chicken:{title:'Merck Veterinary Manual · Feeding poultry',url:'https://www.merckvetmanual.com/poultry/nutrition-and-management-poultry/feeding-and-management-practices-in-poultry'},
layer:{title:'Merck Veterinary Manual · Backyard poultry nutrition',url:'https://www.merckvetmanual.com/exotic-and-laboratory-animals/backyard-poultry/management-of-backyard-poultry'},
fish:{title:'葛西臨海水族園 · 水辺のいきもの通信',url:'https://www.tokyo-zoo.net/zoo/kasai/nagisa/pdf/nagisa_tsushin_10.pdf'},
fishSchool:{title:'葛西臨海水族園 · スイミー 教員向け説明書',url:'https://www.tokyo-zoo.net/education/school-resources/swimmy/pdf/teacher%27s%20manual.pdf'},
nematode:{title:'Nature · Soil nematode abundance (2019)',url:'https://www.nature.com/articles/s41586-019-1418-6'}
};
const ECOLOGY={
'馬':{diet:'母乳から草へ移行。成長後は牧草・乾草を基本に、運動量や体の状態に合わせて配合飼料などを加えます。',behavior:'草食動物で、少しずつ繰り返し食べます。仲間との距離や人の合図を確かめ、休息と手入れも必要です。',refs:['horse','horseDiet','racing','retire']},
'キリン':{diet:'幼い時は母乳。成長すると木の葉を食べ、飼育下では枝葉や乾草などが用意されます。',behavior:'長い舌で葉をたぐり寄せます。食物を口に戻してかみ直す反芻をし、水を飲むときは前脚を広げます。',refs:['giraffe','giraffeFeed','giraffeYoung']},
'犬':{diet:'乳を飲んで育ち、離乳後は成長段階に合った犬用フードなどを食べます。路上では、手に入る食べ物が安定しないこともあります。',behavior:'鼻を使って周囲を確かめ、他の犬や人と関わります。食事・飲み水・休息の環境は、人との暮らし方で変わります。',refs:['petDiet']},
'猫':{diet:'幼い時は母乳。離乳後は猫に必要な栄養を満たす食事が必要です。屋外では小動物や昆虫なども捕らえます。',behavior:'幼い時は母猫に依存し、成長とともに探索や遊びが増えます。人や他の猫との距離の取り方には個体差があります。',refs:['cat','petDiet']},
'アジアゾウ':{diet:'乳を飲んで成長し、草・葉・枝・樹皮などを食べます。飼育下では乾草や専用飼料も用いられます。',behavior:'鼻で植物をつかみます。野生の雌は血縁の群れで暮らし、水や食べ物を求めて移動します。雄の成長後の暮らしは異なります。',refs:['elephant']},
'カニクイザル':{diet:'果実、葉、昆虫などを食べる雑食のサルです。飼育下の食事は野生と異なり、栄養を調整した飼料などが用いられます。',behavior:'母にしがみついて育ち、群れの中では毛づくろいや声・表情で関わります。研究施設の扱いは施設や研究内容により異なります。',refs:['monkey']},
'ドブネズミ':{diet:'植物由来の食物や動物質など、さまざまなものを食べます。都市では人の食べ残しも利用します。',behavior:'においや触覚を頼りに食物を探し、隠れ場所や通り道を使います。ペットのラットも同じ種に属します。',refs:['rat']},
'鶏':{diet:'幼い時と成長後、採卵用と食肉用で配合飼料が異なります。産卵する雌は卵殻を作るための栄養も必要です。',behavior:'自分で餌をついばみます。庭に出られる環境では土をかいて探す、砂浴びをするなどの行動が見られます。飼育環境は一様ではありません。',refs:['chicken','layer']},
'スズメ':{diet:'成鳥は草の種や穀物などを食べ、ひなには昆虫などが多く運ばれます。',behavior:'建物の隙間や樹洞などに巣をつくり、群れで採食します。ひなが巣立つ時期と、何年も生きる一生は分けて描いています。',refs:['sparrow','sparrowYoung']},
'イワシ':{diet:'小さなプランクトンを食べる沿岸のイワシ類をモデルにしています。種や成長段階によって食物は変わります。',behavior:'仲間と群れをつくって泳ぎ、大型の魚などの餌にもなります。「イワシ」は複数の種を含む通称です。',refs:['fish','fishSchool']},
'土壌の線虫':{diet:'この物語では、土壌の水分の中で微生物を食べるタイプをモデルにしています。線虫には菌を食べるものや、捕食性・植物食性のものもいます。',behavior:'線虫の種類は多く、発育や寿命もさまざまです。この設定の24日という一生は、野生の線虫すべての寿命を示すものではありません。',refs:['nematode']}
};
ECOLOGY['クロオオアリ']={diet:'働きアリは甘い液や昆虫などを利用し、巣へ食物を運びます。幼虫のための動物質も集めます。',behavior:'働きアリは雌です。卵を産む女王とは役割が異なり、巣の世話や採食を分担します。この物語は成虫の働きアリとして羽化した時から始まります。',refs:['ant']};
const BASE_AGES={rat:[.045,.12,.4,.9,1.5],'dog-neglect':[.04,.4,1,3,6],'cat-rich':[.2,1,5,10,14],'elephant-zoo':[.05,1,6,18,35],'monkey-lab':[.3,1,3,7,12],horse:[.01,1,4,10,18],chicken:[2,7,20,30,40],sparrow:[.03,.05,.2,.8,1.1],ant:[10,25,50,100,150],nematode:[1,3,5,10,16],fish:[.03,.2,.8,1.5,2.5]};
for(const a of ANIMALS){a.ecology=ECOLOGY[a.species];if(!a.eventAges)a.eventAges=BASE_AGES[a.id];}
ANIMALS.find(a=>a.id==='ant').sex='雌（働きアリ）';
ANIMALS.find(a=>a.id==='nematode').sex='この設定では特定しません';
// Correct daily timing and food descriptions in the original stories.
ANIMALS.find(a=>a.id==='sparrow').events[0]='巣の中で、親鳥が運ぶ昆虫を口にしました。少しずつ羽が伸び、巣の縁から外をのぞくようになりました。';
ANIMALS.find(a=>a.id==='horse').events[2]='成長して、人を背中に乗せる練習が始まりました。草や乾草を食べながら、声と手綱の合図を覚えました。';
ANIMALS.find(a=>a.id==='cat-feral').decision={title:'草の間の物音',body:'小さな音がしました。近くには身を隠せる茂みもあります。',options:[['身を低くして確かめる','耳と鼻を向け、しばらく気配を追いました。',1,1],['茂みで休む','葉の下で体を丸め、周りの音を聞いていました。',5,1]]};
ANIMALS.find(a=>a.id==='elephant-wild').decision={title:'木陰で群れが止まる',body:'しばらく歩いたあと、仲間が足を止めました。近くに葉の茂る枝があります。',options:[['枝葉を食べる','鼻で枝を寄せ、葉を口へ運びました。',5,2],['仲間と触れ合う','鼻先を寄せ、互いの気配を確かめました。',2,10]]};
ANIMALS.find(a=>a.id==='monkey-wild').decision={title:'いつもの枝で',body:'近くの仲間が座りました。少し先には、実のある枝が伸びています。',options:[['毛づくろいをする','毛を分け、仲間と体を寄せて過ごしました。',2,9],['実を探す','枝を移り、食べられる果実を探しました。',5,1]]};
ANIMALS.find(a=>a.id==='rat-pet').decision={title:'ケージの扉が開く',body:'見慣れた人の手がそばにあり、仲間は布の下で休んでいます。',options:[['手のにおいを確かめる','鼻を近づけ、なじみのにおいを嗅ぎました。',2,8],['仲間のそばで休む','布の下へ入り、体を寄せました。',5,5]]};
