// Researched natural history; individual lifespans, events, choices and probabilities are authored fiction.
const BIODIVERSITY = [
  {
    "id": "bio-lion",
    "species": "ライオン",
    "scientificName": "Panthera leo",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 15,
    "color": "#9b8065",
    "habitat": "東アフリカの草原",
    "place": "野生のプライド",
    "care": "母と群れ",
    "health": 72,
    "safety": 57,
    "bond": 86,
    "food": 62,
    "opening": "草の奥で、母の腹に顔をうずめて生まれた。あなたは雌のライオンだ。",
    "events": [
      "母乳を飲み、きょうだいの体温に包まれる。",
      "巣の外で群れの雌たちに会う。大きな舌が額をなめた。",
      "母が捕らえた獲物のそばで、肉の匂いを覚えた。",
      "仲間の後ろから草に身を伏せる。群れの狩りに加わり始めた。",
      "乾季の水場へ歩く。夜には仲間と声を重ねた。"
    ],
    "eventAges": [
      0.02,
      0.2,
      0.9,
      2,
      5
    ],
    "decision": {
      "title": "草むらの気配",
      "body": "群れが前へ進む。あなたの前では草が風に揺れている。",
      "options": [
        [
          "仲間の近くを歩く",
          "肩が触れる距離で、同じ匂いの道をたどった。",
          1,
          5
        ],
        [
          "木陰で待つ",
          "日陰で息を整え、仲間の声に耳を向けた。",
          3,
          0
        ]
      ]
    },
    "ending": "草原に残った足跡を、次の風がゆっくり消していった。",
    "quote": "夜に重なる声の中に、あなたの声もあった。",
    "ecology": {
      "diet": "シマウマやヌーなどの哺乳類。幼獣は母乳から育つ。",
      "behavior": "血縁の雌を中心に群れをつくり、休息・狩り・子育てを行う。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ライオン",
          "url": "https://animaldiversity.org/accounts/Panthera_leo/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-amur-tiger",
    "species": "アムールトラ",
    "scientificName": "Panthera tigris altaica",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 18,
    "color": "#9b8065",
    "habitat": "雪の降る動物園",
    "place": "動物園の森林展示場",
    "care": "母と飼育員",
    "health": 82,
    "safety": 89,
    "bond": 64,
    "food": 88,
    "opening": "静かな産室で、縞模様の母のそばに生まれた。",
    "events": [
      "まだ閉じた目のまま、母乳を探して体を寄せた。",
      "足取りがしっかりし、産室の外の匂いを嗅いだ。",
      "成長につれ、用意された肉を自分で食べるようになった。",
      "母と別の区画で暮らし始めた。木にはあなたの爪の跡がついた。",
      "降り積もった雪の上を歩き、池の縁で長い尾を揺らした。"
    ],
    "eventAges": [
      0.01,
      0.2,
      1,
      3,
      6
    ],
    "decision": {
      "title": "丸太の向こう",
      "body": "展示場に新しい匂いの丸太が置かれた。",
      "options": [
        [
          "匂いを確かめる",
          "鼻先を近づけ、丸太のまわりを一周した。",
          0,
          2
        ],
        [
          "離れて眺める",
          "慣れた岩の上で休みながら様子を見た。",
          2,
          0
        ]
      ]
    },
    "ending": "最後の冬も、寝室にはいつもの足音が届いた。",
    "quote": "雪の白さが、あなたの縞をくっきり映した。",
    "ecology": {
      "diet": "肉食。野生ではシカやイノシシなどを捕らえる。",
      "behavior": "基本的に単独で行動し、匂いの印などで縄張りを知らせる。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アムールトラ",
          "url": "https://animaldiversity.org/accounts/Panthera_tigris/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-cheetah",
    "species": "チーター",
    "scientificName": "Acinonyx jubatus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 12,
    "color": "#9b8065",
    "habitat": "アフリカの開けた草原",
    "place": "野生の草原",
    "care": "母",
    "health": 64,
    "safety": 47,
    "bond": 67,
    "food": 58,
    "opening": "草に隠れた巣で、きょうだいと身を寄せて生まれた。",
    "events": [
      "母乳を飲み、母が戻る小さな物音を待った。",
      "母の後ろを歩く。きょうだいと追いかけ合った。",
      "動くものを目で追い、母の狩りを離れた場所で見た。",
      "母と離れ、自分で獲物を探す暮らしが始まった。",
      "見晴らしのいい土の高みに登り、草原の動きを探した。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      2,
      4
    ],
    "decision": {
      "title": "走ったあと",
      "body": "追跡を終え、胸が大きく動いている。",
      "options": [
        [
          "木陰で休む",
          "呼吸が落ち着くまで、周囲を見渡しながら横になった。",
          4,
          0
        ],
        [
          "草の陰へ移る",
          "目立ちにくい場所に移り、耳だけを動かした。",
          1,
          0
        ]
      ]
    },
    "ending": "草原の朝は続き、あなたが登った土の高みも残った。",
    "quote": "速く走る時間より、風を見ている時間が長かった。",
    "ecology": {
      "diet": "ガゼルなど比較的小型の有蹄類を中心に食べる肉食。",
      "behavior": "視覚で獲物を探し、短い距離を高速で走る。母が子を育てる。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：チーター",
          "url": "https://animaldiversity.org/accounts/Acinonyx_jubatus/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-leopard",
    "species": "ヒョウ",
    "scientificName": "Panthera pardus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 14,
    "color": "#9b8065",
    "habitat": "アフリカの疎林",
    "place": "野生の林",
    "care": "母",
    "health": 71,
    "safety": 52,
    "bond": 36,
    "food": 61,
    "opening": "岩陰の巣で、母の鼻があなたの背に触れた。",
    "events": [
      "母乳で育ち、巣穴の奥で母の匂いを覚えた。",
      "きょうだいと転がりながら、細い枝に前足をかけた。",
      "母が木に運んだ獲物の下で、枝の揺れを見上げた。",
      "母の行動圏を離れ、自分の通り道を探した。",
      "太い枝の上から、夕方の林を眺めるようになった。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      2,
      5
    ],
    "decision": {
      "title": "林の物音",
      "body": "地面から大きな動物の足音が近づく。",
      "options": [
        [
          "木へ登る",
          "爪を立て、枝葉の陰に体を収めた。",
          2,
          0
        ],
        [
          "茂みに隠れる",
          "低く伏せて足音が遠ざかるのを待った。",
          1,
          0
        ]
      ]
    },
    "ending": "あなたの休んだ枝には、雨のしずくが並んだ。",
    "quote": "見上げた人には見えなくても、そこに暮らしていた。",
    "ecology": {
      "diet": "中型の哺乳類など多様な動物を食べる肉食。",
      "behavior": "単独で暮らし、木登りが得意。獲物を木に運ぶこともある。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ヒョウ",
          "url": "https://animaldiversity.org/accounts/Panthera_pardus/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-jaguar",
    "species": "ジャガー",
    "scientificName": "Panthera onca",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 17,
    "color": "#9b8065",
    "habitat": "南米の川沿いの森",
    "place": "野生の熱帯林",
    "care": "母",
    "health": 73,
    "safety": 55,
    "bond": 39,
    "food": 66,
    "opening": "根の間の隠れ家で、湿った森の匂いの中に生まれた。",
    "events": [
      "母乳を飲み、葉から落ちる水音を聞いた。",
      "巣から出て、母の斑点を目印に歩いた。",
      "浅瀬に足を入れ、母が進む水の感触を覚えた。",
      "母から離れ、川沿いにひとりで歩く距離が伸びた。",
      "水辺の泥に足跡を残し、倒木のそばで獲物を待った。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      2,
      6
    ],
    "decision": {
      "title": "雨のあと",
      "body": "川の水かさが増え、いつもの岸が隠れた。",
      "options": [
        [
          "高い岸へ回る",
          "根の張る斜面を上り、乾いた場所にたどりついた。",
          3,
          0
        ],
        [
          "倒木の陰で待つ",
          "水音を聞きながら、流れが落ち着くまで休んだ。",
          1,
          0
        ]
      ]
    },
    "ending": "川は流れ、森はあなたの足跡を新しい泥で覆った。",
    "quote": "水音と斑点のある影が、森の一部になった。",
    "ecology": {
      "diet": "哺乳類・爬虫類など多様な動物を捕らえる肉食。",
      "behavior": "主に単独生活。水辺も利用し、泳ぐことができる。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ジャガー",
          "url": "https://animaldiversity.org/accounts/Panthera_onca/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-snow-leopard",
    "species": "ユキヒョウ",
    "scientificName": "Panthera uncia",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 16,
    "color": "#9b8065",
    "habitat": "中央アジアの岩山",
    "place": "野生の高山",
    "care": "母",
    "health": 65,
    "safety": 49,
    "bond": 43,
    "food": 57,
    "opening": "風の届きにくい岩穴で、長い毛の母に包まれて生まれた。",
    "events": [
      "母乳を飲み、岩穴の暗がりで眠った。",
      "穴の入口まで歩き、白く遠い尾根を見た。",
      "母について岩の段差を越えた。長い尾が後ろで揺れる。",
      "母と離れて歩く山道が増え、自分の休み場を持った。",
      "岩の上で尾を体に巻きつけ、冷たい風が過ぎるのを待った。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      2,
      5
    ],
    "decision": {
      "title": "吹き上げる風",
      "body": "尾根で雪が横に流れている。",
      "options": [
        [
          "岩陰へ入る",
          "風を避け、尾を足元に寄せて丸くなった。",
          3,
          0
        ],
        [
          "斜面を下る",
          "足場を選びながら、低い谷のほうへ移った。",
          0,
          0
        ]
      ]
    },
    "ending": "岩穴の奥に、静かな時間が積もっていった。",
    "quote": "山の影と同じ色の、一つの命だった。",
    "ecology": {
      "diet": "バーラルやアイベックスなど山地の有蹄類、小型哺乳類。",
      "behavior": "岩場で活動し、長い尾をバランスや保温に使う。基本的に単独。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ユキヒョウ（旧属名 Uncia）",
          "url": "https://animaldiversity.org/accounts/Uncia_uncia/"
        }
      ]
    },
    "bodyType": "cat"
  },
  {
    "id": "bio-polar-bear",
    "species": "ホッキョクグマ",
    "scientificName": "Ursus maritimus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 23,
    "color": "#9b8065",
    "habitat": "北極圏の海氷",
    "place": "野生の海氷と岸",
    "care": "母",
    "health": 63,
    "safety": 42,
    "bond": 58,
    "food": 48,
    "opening": "雪の巣穴で、母の体温に守られて生まれた。",
    "events": [
      "母乳を飲み、外の吹雪を知らずに眠った。",
      "母と巣穴を出て、初めて雪明かりに目を細めた。",
      "母の後ろについて海氷を歩き、穴のそばで待つ姿を見た。",
      "母と別れ、自分で氷と岸を行き来するようになった。",
      "開いた水面を泳いで渡り、岸に着いて毛の水を払った。"
    ],
    "eventAges": [
      0.03,
      0.3,
      1,
      3,
      7
    ],
    "decision": {
      "title": "氷の切れ目",
      "body": "進む先に広い水面が見える。",
      "options": [
        [
          "岸沿いを探す",
          "氷のつながる場所を探して、ゆっくり進んだ。",
          1,
          0
        ],
        [
          "いったん休む",
          "氷の上に体を伏せ、風と水の動きを確かめた。",
          3,
          0
        ]
      ]
    },
    "ending": "あなたの歩いた氷は、季節とともに姿を変えた。",
    "quote": "白い景色にも、ひとつずつ違う足跡があった。",
    "ecology": {
      "diet": "主にアザラシ。海氷を狩りの足場として利用する。",
      "behavior": "泳ぎに適応し、母子以外は単独で行動することが多い。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ホッキョクグマ",
          "url": "https://animaldiversity.org/accounts/Ursus_maritimus/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-brown-bear",
    "species": "ヒグマ",
    "scientificName": "Ursus arctos",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 22,
    "color": "#9b8065",
    "habitat": "北海道の森と川",
    "place": "野生の森林",
    "care": "母",
    "health": 75,
    "safety": 58,
    "bond": 44,
    "food": 66,
    "opening": "冬の穴の中で、まだ小さな声をあげて生まれた。",
    "events": [
      "母乳を飲み、母の毛の中で暖まった。",
      "春、母と穴を出て土と若葉の匂いを嗅いだ。",
      "母の横で木の実を探し、倒木の下を前足で掘った。",
      "母から離れ、季節ごとの食べ物を自分で探し始めた。",
      "秋に食べる時間が増え、やがて冬を過ごす場所へ向かった。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      3,
      7
    ],
    "decision": {
      "title": "秋の沢",
      "body": "沢沿いに木の実が落ちている。遠くで音がした。",
      "options": [
        [
          "森の奥へ移る",
          "音のする場所から離れ、斜面の実を探した。",
          2,
          0
        ],
        [
          "立ち止まって聞く",
          "鼻を上げて匂いを確かめ、静かになるまで待った。",
          1,
          0
        ]
      ]
    },
    "ending": "森が雪に覆われる頃、あなたの歩みも静まった。",
    "quote": "春の匂いを、何度も覚え直した。",
    "ecology": {
      "diet": "植物・木の実・昆虫・魚などを季節に応じて利用する雑食。",
      "behavior": "冬ごもりをし、母子を除けば単独で行動することが多い。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ヒグマ",
          "url": "https://animaldiversity.org/accounts/Ursus_arctos/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-giant-panda",
    "species": "ジャイアントパンダ",
    "scientificName": "Ailuropoda melanoleuca",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 25,
    "color": "#9b8065",
    "habitat": "竹のある動物園",
    "place": "動物園のパンダ舎",
    "care": "母と飼育員",
    "health": 88,
    "safety": 93,
    "bond": 66,
    "food": 92,
    "opening": "産室で生まれ、母の大きな前足にそっと抱かれた。",
    "events": [
      "母乳を飲み、母の胸の近くで眠った。",
      "自分の足で歩き、木組みの下を探検した。",
      "竹を口に運び始めた。まだ母のそばに戻って眠る。",
      "別の区画で暮らし、好みの休み台を見つけた。",
      "座って竹をつかみ、葉と茎を選びながら食べる毎日になった。"
    ],
    "eventAges": [
      0.03,
      0.4,
      1,
      3,
      8
    ],
    "decision": {
      "title": "新しい竹",
      "body": "朝、違う束の竹が運ばれてきた。",
      "options": [
        [
          "葉から食べる",
          "鼻先で確かめ、葉を寄せて食べ始めた。",
          1,
          1
        ],
        [
          "先に休む",
          "台の上に寝そべり、あとで竹の前に戻った。",
          2,
          0
        ]
      ]
    },
    "ending": "静かな寝室に、竹の葉がこすれる音が残った。",
    "quote": "見られている日にも、あなた自身の時間があった。",
    "ecology": {
      "diet": "食事の大部分は竹。竹をつかむための手首の構造を持つ。",
      "behavior": "単独性が強く、食べることと休息に長い時間を使う。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ジャイアントパンダ",
          "url": "https://animaldiversity.org/accounts/Ailuropoda_melanoleuca/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-red-panda",
    "species": "レッサーパンダ",
    "scientificName": "Ailurus fulgens",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 14,
    "color": "#9b8065",
    "habitat": "山地を模した動物園",
    "place": "動物園の樹木展示場",
    "care": "母と飼育員",
    "health": 84,
    "safety": 90,
    "bond": 59,
    "food": 87,
    "opening": "巣箱で、母が集めた柔らかな敷材の上に生まれた。",
    "events": [
      "母乳を飲み、巣箱の内側に体を寄せた。",
      "入口から顔を出し、母の尾を追って外へ出た。",
      "枝に登り、竹の葉を選んで口に運ぶようになった。",
      "自分の好きな枝で丸くなり、昼を過ごした。",
      "夕方、細い枝を渡りながら、展示場の匂いを確かめた。"
    ],
    "eventAges": [
      0.02,
      0.3,
      1,
      2,
      5
    ],
    "decision": {
      "title": "夕方の枝",
      "body": "空が暗くなり始め、枝の上に風が通る。",
      "options": [
        [
          "高い枝へ登る",
          "尾で釣り合いを取り、葉の間へ進んだ。",
          1,
          0
        ],
        [
          "巣箱へ戻る",
          "慣れた寝床で丸くなり、外の音を聞いた。",
          3,
          0
        ]
      ]
    },
    "ending": "いつもの枝には、また次の朝日が差した。",
    "quote": "赤い尾が揺れた場所を、風は覚えている。",
    "ecology": {
      "diet": "竹の葉を中心に、果実なども食べる。",
      "behavior": "木登りが得意で、主に薄明・夜間に活動する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：レッサーパンダ",
          "url": "https://animaldiversity.org/accounts/Ailurus_fulgens/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-koala",
    "species": "コアラ",
    "scientificName": "Phascolarctos cinereus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 15,
    "color": "#9b8065",
    "habitat": "豪州東部のユーカリ林",
    "place": "野生のユーカリ林",
    "care": "母",
    "health": 71,
    "safety": 55,
    "bond": 55,
    "food": 59,
    "opening": "とても小さな体で生まれ、母の袋へたどり着いた。",
    "events": [
      "袋の中で乳首につかまり、外の揺れを感じた。",
      "袋から顔を出す頃、母から離乳に必要なパップを受け取った。",
      "母の背に乗り、葉の匂いを覚えた。",
      "母と離れ、自分が休めるユーカリを探した。",
      "枝の分かれ目に体を預け、夕方には新しい葉へ手を伸ばした。"
    ],
    "eventAges": [
      0.03,
      0.5,
      0.8,
      2,
      5
    ],
    "decision": {
      "title": "枝の分かれ目",
      "body": "日差しが強くなり、幹の片側が影になった。",
      "options": [
        [
          "陰側へ移る",
          "幹に体を寄せて、涼しい場所で休んだ。",
          3,
          0
        ],
        [
          "葉の陰で丸まる",
          "葉が光を遮る場所に落ち着いた。",
          2,
          0
        ]
      ]
    },
    "ending": "葉の間から差す光が、ゆっくり移っていった。",
    "quote": "一枚ずつ違う葉を選んで、生きていた。",
    "ecology": {
      "diet": "限られた種類のユーカリの葉を選んで食べる。",
      "behavior": "樹上で長く休息する有袋類。子は育児嚢と母の背で育つ。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：コアラ",
          "url": "https://animaldiversity.org/accounts/Phascolarctos_cinereus/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-wombat",
    "species": "ウォンバット",
    "scientificName": "Vombatus ursinus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 18,
    "color": "#9b8065",
    "habitat": "豪州南東部の草地",
    "place": "野生の巣穴と草地",
    "care": "母",
    "health": 76,
    "safety": 64,
    "bond": 32,
    "food": 63,
    "opening": "母の袋の中へ進み、小さな口で乳首をつかんだ。",
    "events": [
      "後ろ向きに開く袋の中で、母乳を飲んで育った。",
      "袋の外へ出て、巣穴の土の感触を覚えた。",
      "母の後ろについて夜の草地へ出た。草を噛む時間が増えた。",
      "自分の巣穴を掘り、暗い通路に体を収めた。",
      "夜ごと草を食べ、朝が来る前に巣穴へ戻った。"
    ],
    "eventAges": [
      0.03,
      0.6,
      1,
      2,
      6
    ],
    "decision": {
      "title": "巣穴の入口",
      "body": "夜になり、入口の外から草の匂いがする。",
      "options": [
        [
          "草地へ出る",
          "近くの草をかじりながら、耳を動かした。",
          1,
          0
        ],
        [
          "入口で待つ",
          "鼻先だけを出し、辺りが静かになるのを待った。",
          2,
          0
        ]
      ]
    },
    "ending": "あなたが掘った通路に、冷たい土の匂いが残った。",
    "quote": "地面の下にも、帰る場所があった。",
    "ecology": {
      "diet": "草やスゲなどを中心に食べる草食。",
      "behavior": "丈夫な前足で巣穴を掘り、主に夜や薄暗い時間に活動する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ウォンバット",
          "url": "https://animaldiversity.org/accounts/Vombatus_ursinus/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-red-kangaroo",
    "species": "アカカンガルー",
    "scientificName": "Osphranter rufus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 16,
    "color": "#9b8065",
    "habitat": "豪州内陸の草原",
    "place": "野生の乾いた草地",
    "care": "母と緩やかな群れ",
    "health": 71,
    "safety": 54,
    "bond": 65,
    "food": 57,
    "opening": "生まれてすぐ、母の袋へ小さな前足でよじ登った。",
    "events": [
      "袋の中で乳を飲み、母が跳ぶ振動に揺られた。",
      "袋から顔を出し、草原の明るさを見た。",
      "袋の外で短く跳び、また母の近くへ戻った。",
      "育った体を後ろ足と尾で支え、仲間と草を食べた。",
      "乾いた季節、緑の残る場所を探して群れと移動した。"
    ],
    "eventAges": [
      0.02,
      0.5,
      0.8,
      2,
      5
    ],
    "decision": {
      "title": "真昼の草原",
      "body": "地面が熱くなり、木の影が小さくなった。",
      "options": [
        [
          "日陰で休む",
          "体を低くして、夕方の涼しさを待った。",
          4,
          0
        ],
        [
          "仲間のそばへ",
          "群れの休んでいる木陰に落ち着いた。",
          2,
          3
        ]
      ]
    },
    "ending": "赤土に残る跳躍の跡が、風で少しずつ薄れた。",
    "quote": "袋の中から始まった世界は、地平線まで続いた。",
    "ecology": {
      "diet": "草や草本の葉を食べる草食。",
      "behavior": "暑い日中は日陰で休み、涼しい時間に採食。跳躍し、尾も体を支える。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アカカンガルー",
          "url": "https://animaldiversity.org/accounts/Macropus_rufus/"
        }
      ]
    },
    "bodyType": "kangaroo"
  },
  {
    "id": "bio-meerkat",
    "species": "ミーアキャット",
    "scientificName": "Suricata suricatta",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 9,
    "color": "#9b8065",
    "habitat": "南部アフリカの乾燥地",
    "place": "野生の群れの巣穴",
    "care": "母と群れの成獣",
    "health": 70,
    "safety": 59,
    "bond": 86,
    "food": 61,
    "opening": "巣穴の奥で生まれ、仲間たちの小さな声に包まれた。",
    "events": [
      "母乳を飲み、まだ巣穴の奥で過ごした。",
      "穴の入口へ出ると、成獣がそばで周囲を見ていた。",
      "群れについて歩き、土を掘って小さな獲物を探した。",
      "見晴らしのいい場所で立ち、頭上の動きを確かめた。",
      "新しい子が生まれた巣穴のそばで、仲間と過ごした。"
    ],
    "eventAges": [
      0.02,
      0.08,
      0.4,
      1,
      3
    ],
    "decision": {
      "title": "頭上の影",
      "body": "空に影が動き、仲間が短く鳴いた。",
      "options": [
        [
          "巣穴へ戻る",
          "群れと一緒に入口へ駆け、暗い通路に身を隠した。",
          2,
          4
        ],
        [
          "物陰へ伏せる",
          "低くなり、見張りの次の声を待った。",
          0,
          0
        ]
      ]
    },
    "ending": "巣穴から出る足音は、その後も朝ごとに続いた。",
    "quote": "小さな声を、聞いてくれる仲間がいた。",
    "ecology": {
      "diet": "昆虫などの小動物を地面から掘り出して食べる。",
      "behavior": "群れで暮らし、見張りや子の世話を分担する。日中に活動。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ミーアキャット",
          "url": "https://animaldiversity.org/accounts/Suricata_suricatta/"
        }
      ]
    },
    "bodyType": "rodent"
  },
  {
    "id": "bio-fennec",
    "species": "フェネック",
    "scientificName": "Vulpes zerda",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 12,
    "color": "#9b8065",
    "habitat": "サハラの砂地",
    "place": "野生の砂漠の巣穴",
    "care": "両親と家族",
    "health": 72,
    "safety": 57,
    "bond": 74,
    "food": 55,
    "opening": "砂の下の巣穴で生まれ、母の腹に潜り込んだ。",
    "events": [
      "母乳を飲み、砂漠の昼の熱を知らずに眠った。",
      "巣穴の入口で家族とじゃれ、大きくなった耳を動かした。",
      "夜に外へ出て、砂の中の小さな物音を聞いた。",
      "前足で砂を掘り、小さな獲物を探すのが上手くなった。",
      "夜明け前には巣穴へ戻り、家族の匂いのする場所で休んだ。"
    ],
    "eventAges": [
      0.02,
      0.15,
      0.5,
      1,
      4
    ],
    "decision": {
      "title": "砂の中の音",
      "body": "足元の砂から、かすかな物音がした。",
      "options": [
        [
          "耳を澄ます",
          "大きな耳を向け、鼻先で位置を確かめた。",
          1,
          0
        ],
        [
          "巣穴へ戻る",
          "月明かりの砂を渡り、静かな巣へ入った。",
          3,
          2
        ]
      ]
    },
    "ending": "夜の砂に、あなたの小さな足跡が並んでいた。",
    "quote": "大きな耳で聞いた世界は、静寂だけではなかった。",
    "ecology": {
      "diet": "昆虫・小型の動物・卵・果実などを食べる雑食。",
      "behavior": "大きな耳を持ち、夜間に採食し、昼は巣穴で休む。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：フェネック",
          "url": "https://animaldiversity.org/accounts/Vulpes_zerda/"
        }
      ]
    },
    "bodyType": "canine"
  },
  {
    "id": "bio-red-fox",
    "species": "アカギツネ",
    "scientificName": "Vulpes vulpes",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 8,
    "color": "#9b8065",
    "habitat": "北半球の林と草地",
    "place": "野生の林縁",
    "care": "両親",
    "health": 68,
    "safety": 49,
    "bond": 61,
    "food": 55,
    "opening": "木の根元の巣穴で、きょうだいの間に生まれた。",
    "events": [
      "母乳を飲み、巣へ戻る親の気配に顔を上げた。",
      "巣穴の前でじゃれ、親が運ぶ食べ物の匂いを覚えた。",
      "草の中の音を聞き、跳びかかる動きを練習した。",
      "生まれた巣を離れ、自分で林の端を歩いた。",
      "秋には落ちた果実も食べ、余った食物を土に隠した。"
    ],
    "eventAges": [
      0.02,
      0.12,
      0.4,
      1,
      3
    ],
    "decision": {
      "title": "草の下の気配",
      "body": "草むらから小さく土の動く音がした。",
      "options": [
        [
          "じっと聞く",
          "耳を向け、動きが近づくのを待った。",
          1,
          0
        ],
        [
          "林へ戻る",
          "開けた場所を離れ、茂みの間を歩いた。",
          2,
          0
        ]
      ]
    },
    "ending": "林縁の細い通り道に、草がまた伸びていった。",
    "quote": "雪にも土にも、同じ足で道を描いた。",
    "ecology": {
      "diet": "小型哺乳類・昆虫・鳥・果実などを利用する雑食。",
      "behavior": "聴覚などを使って獲物を探し、余った食物を隠すことがある。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アカギツネ",
          "url": "https://animaldiversity.org/accounts/Vulpes_vulpes/"
        }
      ]
    },
    "bodyType": "canine"
  },
  {
    "id": "bio-raccoon-dog",
    "species": "タヌキ",
    "scientificName": "Nyctereutes viverrinus",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 9,
    "color": "#9b8065",
    "habitat": "日本の里山",
    "place": "野生の雑木林",
    "care": "両親",
    "health": 66,
    "safety": 46,
    "bond": 68,
    "food": 57,
    "opening": "里山の隠れ家で、きょうだいと一緒に生まれた。",
    "events": [
      "母乳を飲み、親の毛の匂いを覚えた。",
      "親について隠れ家の外へ出て、落ち葉を踏んだ。",
      "土を嗅ぎ、昆虫や落ちた果実を探すようになった。",
      "林の中に自分のよく歩く道ができた。",
      "秋の実りを食べ、冷える夜には茂みの奥で休んだ。"
    ],
    "eventAges": [
      0.02,
      0.15,
      0.5,
      1,
      3
    ],
    "decision": {
      "title": "道の明かり",
      "body": "林の外に光が動き、地面が低く震えた。",
      "options": [
        [
          "林の奥へ戻る",
          "明かりから離れ、落ち葉の道をたどった。",
          3,
          0
        ],
        [
          "茂みで待つ",
          "枝の下に身を置き、静かになるまで待った。",
          2,
          0
        ]
      ]
    },
    "ending": "里山の夜に、あなたの気配が静かに溶けた。",
    "quote": "人の知らない道を、毎晩歩いていた。",
    "ecology": {
      "diet": "果実・昆虫・小動物などを食べる雑食。",
      "behavior": "主に夜に活動し、家族で育児する。複数個体が使うため糞場がある。",
      "refLinks": [
        {
          "title": "天王寺動物園：タヌキのお話",
          "url": "https://www.tennojizoo.jp/blog/9339/"
        },
        {
          "title": "農林水産省：タヌキの食性・行動・繁殖",
          "url": "https://www.maff.go.jp/j/seisan/tyozyu/higai/manyuaru/manual_tyuugata_jyuurui/180330-4.pdf"
        }
      ]
    },
    "bodyType": "canine"
  },
  {
    "id": "bio-raccoon",
    "species": "アライグマ",
    "scientificName": "Procyon lotor",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#9b8065",
    "habitat": "北米の川沿いの林",
    "place": "野生の河畔林",
    "care": "母",
    "health": 72,
    "safety": 54,
    "bond": 45,
    "food": 64,
    "opening": "木のうろで生まれ、母の腹で暖まった。",
    "events": [
      "母乳を飲み、うろの奥で身を寄せた。",
      "母について木から下り、前足で地面を探った。",
      "浅い水の底を触り、小さな食べ物を見つけた。",
      "夜の川辺を自分で歩き、木のうろを休み場にした。",
      "秋には木の実を食べ、寒い日には巣で過ごす時間が増えた。"
    ],
    "eventAges": [
      0.02,
      0.2,
      0.5,
      1,
      3
    ],
    "decision": {
      "title": "水際の石",
      "body": "浅瀬の石の隙間から、小さな動きが伝わる。",
      "options": [
        [
          "前足で探る",
          "冷たい水の中へ前足を入れ、石の縁を触った。",
          1,
          0
        ],
        [
          "木の実を探す",
          "水辺を離れ、落ち葉の上に鼻を近づけた。",
          2,
          0
        ]
      ]
    },
    "ending": "川の水は、あなたが探った石を洗い続けた。",
    "quote": "指先で確かめた世界があった。",
    "ecology": {
      "diet": "水生小動物・昆虫・果実・木の実などを食べる雑食。",
      "behavior": "夜行性で、よく動く前足と触覚で食べ物を探る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アライグマ",
          "url": "https://animaldiversity.org/accounts/Procyon_lotor/"
        }
      ]
    },
    "bodyType": "bear"
  },
  {
    "id": "bio-capybara",
    "species": "カピバラ",
    "scientificName": "Hydrochoerus hydrochaeris",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#9b8065",
    "habitat": "南米の湿地",
    "place": "野生の水辺の群れ",
    "care": "母と群れ",
    "health": 75,
    "safety": 60,
    "bond": 78,
    "food": 70,
    "opening": "草の間で生まれ、すでに開いた目で母を見た。",
    "events": [
      "母乳を飲み、母のすぐそばを歩いた。",
      "浅い水に入り、群れの近くで泳ぎ始めた。",
      "草を食べる時間が増え、仲間と並んで岸に伏せた。",
      "水辺の群れで、警戒の声を聞いて水へ入ることを覚えた。",
      "雨季の緑の岸で、群れと草を食べ続けた。"
    ],
    "eventAges": [
      0.01,
      0.06,
      0.4,
      1,
      3
    ],
    "decision": {
      "title": "岸の気配",
      "body": "仲間が警戒の声をあげた。すぐそばに水がある。",
      "options": [
        [
          "水へ入る",
          "岸から滑り込み、鼻先を水面に出した。",
          2,
          3
        ],
        [
          "群れに近づく",
          "仲間の動きを見ながら、水際へ移った。",
          1,
          5
        ]
      ]
    },
    "ending": "水面の波紋が広がり、岸にはまた草が伸びた。",
    "quote": "水と陸のあいだに、あなたの居場所があった。",
    "ecology": {
      "diet": "草や水生植物を食べる。自分の糞を食べて栄養を再利用する。",
      "behavior": "群れで暮らす半水生の大型げっ歯類。泳ぎや潜水をする。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：カピバラ",
          "url": "https://animaldiversity.org/accounts/Hydrochoerus_hydrochaeris/"
        }
      ]
    },
    "bodyType": "rodent"
  },
  {
    "id": "bio-american-beaver",
    "species": "アメリカビーバー",
    "scientificName": "Castor canadensis",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 13,
    "color": "#9b8065",
    "habitat": "北米の森の小川",
    "place": "野生の池と巣",
    "care": "両親と家族",
    "health": 76,
    "safety": 67,
    "bond": 84,
    "food": 68,
    "opening": "枝と泥に包まれた巣で、母のそばに生まれた。",
    "events": [
      "母乳を飲み、巣の中で家族の匂いを覚えた。",
      "水へ出て、親の近くで泳いだ。",
      "小枝をかじり、前足で持って食べるようになった。",
      "家族と枝を運び、水の流れる隙間に泥を足した。",
      "育った巣を離れ、小川の新しい場所を探し始めた。"
    ],
    "eventAges": [
      0.01,
      0.06,
      0.4,
      1,
      3
    ],
    "decision": {
      "title": "流れる水の音",
      "body": "枝の間から、いつもより強く水が流れている。",
      "options": [
        [
          "枝を運ぶ",
          "くわえた枝を流れのそばへ運び、泥を押しつけた。",
          0,
          4
        ],
        [
          "池で泳ぐ",
          "水中の入口を通り、池の中を回った。",
          2,
          0
        ]
      ]
    },
    "ending": "残った池には、別の命も集まってきた。",
    "quote": "あなたの暮らしが、水のかたちを変えた。",
    "ecology": {
      "diet": "木の樹皮や小枝、水生植物などを食べる草食。",
      "behavior": "家族で暮らし、枝や泥でダムや巣を作る。歯で木をかじる。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アメリカビーバー",
          "url": "https://animaldiversity.org/accounts/Castor_canadensis/"
        }
      ]
    },
    "bodyType": "rodent"
  },
  {
    "id": "bio-eurasian-otter",
    "species": "ユーラシアカワウソ",
    "scientificName": "Lutra lutra",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 11,
    "color": "#9b8065",
    "habitat": "欧州の川と岸辺",
    "place": "野生の河川",
    "care": "母",
    "health": 73,
    "safety": 53,
    "bond": 49,
    "food": 64,
    "opening": "岸辺の隠れ家で生まれ、母の腹に潜り込んだ。",
    "events": [
      "母乳を飲み、岸の土の奥で眠った。",
      "隠れ家の入口に出て、流れる水を見た。",
      "母に続いて水へ入り、潜る時間が長くなった。",
      "魚を自分で捕らえ、川の曲がり角まで行動範囲が伸びた。",
      "慣れた岩に匂いを残し、川沿いの道を行き来した。"
    ],
    "eventAges": [
      0.02,
      0.2,
      0.5,
      1.5,
      4
    ],
    "decision": {
      "title": "流れの曲がり角",
      "body": "雨のあとで川が濁り、流れが強くなった。",
      "options": [
        [
          "岸の陰を進む",
          "流れの弱い岸際を選び、岩の陰へ移った。",
          2,
          0
        ],
        [
          "隠れ家で休む",
          "水音を聞きながら、乾いた寝床に体を置いた。",
          3,
          0
        ]
      ]
    },
    "ending": "川はあなたの通り道を、同じ音で流れていった。",
    "quote": "水の下に、誰にも見えない道があった。",
    "ecology": {
      "diet": "主に魚。地域や季節により甲殻類や両生類なども食べる。",
      "behavior": "単独性が強く、水辺の行動圏に匂いの目印を残す。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ユーラシアカワウソ",
          "url": "https://animaldiversity.org/accounts/Lutra_lutra/"
        }
      ]
    },
    "bodyType": "otter"
  },
  {
    "id": "bio-sea-otter",
    "species": "ラッコ",
    "scientificName": "Enhydra lutris",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 17,
    "color": "#9b8065",
    "habitat": "北太平洋の藻場",
    "place": "野生の沿岸海域",
    "care": "母",
    "health": 70,
    "safety": 55,
    "bond": 65,
    "food": 65,
    "opening": "海面で生まれ、母の胸に乗せられて波に揺れた。",
    "events": [
      "母の胸で乳を飲み、母が毛をなめて整えてくれた。",
      "母が潜るあいだ、水面の海藻のそばで待った。",
      "自分も浅く潜り、母の近くで海底の食べ物を探した。",
      "ひとりで潜る暮らしが始まり、毛づくろいを繰り返した。",
      "海底から貝を運び、水面で腹の上に置いて食べた。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.5,
      1,
      5
    ],
    "decision": {
      "title": "波の合間",
      "body": "食事のあと、体の毛が濡れてまとまっている。",
      "options": [
        [
          "毛づくろいする",
          "毛をこすり、空気を含ませながら全身を整えた。",
          4,
          0
        ],
        [
          "静かな藻場へ移る",
          "波の弱い場所へ泳ぎ、そこで毛を整えて休んだ。",
          2,
          0
        ]
      ]
    },
    "ending": "波は寄せ続け、海藻はゆっくり揺れていた。",
    "quote": "漂う時間も、生きるための仕事に満ちていた。",
    "ecology": {
      "diet": "ウニ・貝・カニなど海底の無脊椎動物を食べる。",
      "behavior": "海面で毛づくろいし、密な毛に空気を保つ。石を道具にする個体もいる。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ラッコ",
          "url": "https://animaldiversity.org/accounts/Enhydra_lutris/"
        }
      ]
    },
    "bodyType": "otter"
  },
  {
    "id": "bio-african-elephant",
    "species": "アフリカゾウ",
    "scientificName": "Loxodonta africana",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 55,
    "color": "#9b8065",
    "habitat": "アフリカのサバンナ",
    "place": "野生の母系の群れ",
    "care": "母と群れの雌",
    "health": 79,
    "safety": 61,
    "bond": 91,
    "food": 65,
    "opening": "群れの足の間で生まれ、長い鼻があなたに触れた。あなたは雌の子だ。",
    "events": [
      "母乳を飲み、母の腹の下を歩いた。",
      "まだ不器用な鼻を振り、水や草の匂いを確かめた。",
      "母乳を飲みながら、草や葉も口へ運ぶようになった。",
      "年長の雌たちについて、水場へ続く道を何度も歩いた。",
      "群れの子どもが鼻を伸ばすと、あなたも静かに鼻を寄せた。"
    ],
    "eventAges": [
      0.01,
      0.3,
      1,
      5,
      15
    ],
    "decision": {
      "title": "遠い水場",
      "body": "群れが乾いた川筋を進む。年長の雌が先頭にいる。",
      "options": [
        [
          "群れと進む",
          "仲間の足音と低い声を聞きながら歩いた。",
          1,
          6
        ],
        [
          "木陰で少し休む",
          "群れの近くの陰で息を整え、また歩き出した。",
          3,
          1
        ]
      ]
    },
    "ending": "長く踏んだ道に、群れの足跡が重なり続けた。",
    "quote": "覚えていたのは、水の場所と仲間の声だった。",
    "ecology": {
      "diet": "草・木の葉・枝・樹皮などを幅広く食べる草食。",
      "behavior": "雌と子を中心とした群れで生活し、鼻や低い声でやりとりする。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：アフリカゾウ",
          "url": "https://animaldiversity.org/accounts/Loxodonta_africana/"
        }
      ]
    },
    "bodyType": "elephant"
  },
  {
    "id": "bio-white-rhinoceros",
    "species": "シロサイ",
    "scientificName": "Ceratotherium simum",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 35,
    "color": "#9b8065",
    "habitat": "アフリカ南部の草原",
    "place": "野生の草原",
    "care": "母",
    "health": 79,
    "safety": 65,
    "bond": 48,
    "food": 71,
    "opening": "草原に生まれ、母の大きな体の横に立った。",
    "events": [
      "母乳を飲み、母のすぐそばで休んだ。",
      "母の前をちょこちょこ歩き、気配が変わると足を止めた。",
      "口を低くして草を食べ、まだ母のそばで乳も飲んだ。",
      "母と離れた時間が増え、草の豊かな場所を自分で探した。",
      "暑い日には泥に体を沈め、乾いた皮膚を泥で覆った。"
    ],
    "eventAges": [
      0.01,
      0.1,
      1,
      3,
      8
    ],
    "decision": {
      "title": "泥のくぼ地",
      "body": "日差しの下、浅い泥場が湿っている。",
      "options": [
        [
          "泥に入る",
          "重い体を下ろし、泥を背にまとった。",
          3,
          0
        ],
        [
          "草を食べる",
          "近くの短い草を口で刈り取った。",
          1,
          0
        ]
      ]
    },
    "ending": "草原には、あなたが体を沈めたくぼみが残った。",
    "quote": "大きな体で、小さな草を食べ続けた。",
    "ecology": {
      "diet": "幅広い口で地面の短い草を食べる草食。",
      "behavior": "泥浴びをし、匂いや糞の目印でやりとりする。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：シロサイ",
          "url": "https://animaldiversity.org/accounts/Ceratotherium_simum/"
        }
      ]
    },
    "bodyType": "hoof"
  },
  {
    "id": "bio-hippopotamus",
    "species": "カバ",
    "scientificName": "Hippopotamus amphibius",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 38,
    "color": "#9b8065",
    "habitat": "アフリカの川",
    "place": "野生の川と草地",
    "care": "母",
    "health": 77,
    "safety": 58,
    "bond": 56,
    "food": 70,
    "opening": "川辺で生まれ、母のそばで水面へ鼻を出した。",
    "events": [
      "母乳を飲み、母の近くで浅い場所に体を置いた。",
      "母に続き、水底を蹴って水面へ出る動きを覚えた。",
      "夜、母と岸へ出て草をかじるようになった。",
      "日中の川と夜の草地を行き来する道ができた。",
      "大きくなった体を水に沈め、耳と鼻を水面に出して休んだ。"
    ],
    "eventAges": [
      0.01,
      0.1,
      1,
      3,
      10
    ],
    "decision": {
      "title": "夕暮れの岸",
      "body": "日が落ち、川岸の道に草の匂いが流れる。",
      "options": [
        [
          "岸へ上がる",
          "慣れた道を歩き、草地へ向かった。",
          1,
          0
        ],
        [
          "水中で待つ",
          "周囲の動きが落ち着くまで、浅瀬にとどまった。",
          2,
          0
        ]
      ]
    },
    "ending": "川の面は、最後まで静かに光っていた。",
    "quote": "水と草地を結ぶ道が、あなたの日常だった。",
    "ecology": {
      "diet": "主に陸上の草を食べる。",
      "behavior": "日中は水中で過ごし、夜に岸へ出て採食する。水底を蹴って移動する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：カバ",
          "url": "https://animaldiversity.org/accounts/Hippopotamus_amphibius/"
        }
      ]
    },
    "bodyType": "hoof"
  },
  {
    "id": "bio-plains-zebra",
    "species": "グラントシマウマ",
    "scientificName": "Equus quagga boehmi",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 22,
    "color": "#9b8065",
    "habitat": "東アフリカの草原",
    "place": "野生の家族群",
    "care": "母と家族群",
    "health": 76,
    "safety": 56,
    "bond": 84,
    "food": 65,
    "opening": "草原に生まれ、長い脚で母の横に立った。",
    "events": [
      "母乳を飲み、母の縞と匂いを覚えた。",
      "家族群と歩き、母が足を止めると隣に寄った。",
      "草を食べる時間が増え、仲間の子と駆けた。",
      "成長した脚で、群れについて長い距離を歩けるようになった。",
      "仲間と首を寄せ、歯先で互いの毛を整えた。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.8,
      2,
      6
    ],
    "decision": {
      "title": "群れの移動",
      "body": "草原の向こうへ仲間が歩き始める。",
      "options": [
        [
          "群れに続く",
          "縞模様の間を歩き、次の草地へ向かった。",
          1,
          5
        ],
        [
          "そばの草をひと口",
          "短く草を噛み、すぐに仲間へ追いついた。",
          2,
          0
        ]
      ]
    },
    "ending": "無数の縞の中に、あなたにしかない模様があった。",
    "quote": "同じように見える命は、ひとつも同じではなかった。",
    "ecology": {
      "diet": "草を中心に食べる草食。",
      "behavior": "雄・複数の雌と子からなる家族群などで生活する。互いの毛づくろいもする。",
      "refLinks": [
        {
          "title": "サンディエゴ動物園：シマウマ",
          "url": "https://animals.sandiegozoo.org/animals/zebra"
        }
      ]
    },
    "bodyType": "hoof"
  },
  {
    "id": "bio-sika-deer",
    "species": "ニホンジカ",
    "scientificName": "Cervus nippon",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 15,
    "color": "#9b8065",
    "habitat": "日本の山の森林",
    "place": "野生の森と草地",
    "care": "母",
    "health": 71,
    "safety": 50,
    "bond": 52,
    "food": 61,
    "opening": "森の草の間で生まれ、白い斑点のある背を丸めた。あなたは雄だ。",
    "events": [
      "母乳を飲み、草の陰で静かに体を伏せた。",
      "母について林を歩き、葉の匂いを覚えた。",
      "冬毛になり、落ち葉の間から食べられる植物を探した。",
      "額の角が育ち、やがて生え替わる季節を経験した。",
      "秋の森で遠くの雄の声を聞き、首を上げて耳を向けた。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.7,
      2,
      5
    ],
    "decision": {
      "title": "森の境目",
      "body": "開けた草地に出る手前で、聞き慣れない音がした。",
      "options": [
        [
          "森で待つ",
          "木の間にとどまり、音の方向へ耳を向けた。",
          2,
          0
        ],
        [
          "斜面へ移る",
          "草地から離れ、木々のある斜面へ歩いた。",
          1,
          0
        ]
      ]
    },
    "ending": "森が芽吹き、あなたの足跡の上に若葉の影が落ちた。",
    "quote": "同じ山でも、季節ごとに違う匂いがした。",
    "ecology": {
      "diet": "草・木の葉・小枝など、季節や地域で異なる植物を食べる。",
      "behavior": "森林や草地を利用する。雄には毎年生え替わる角がある。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ニホンジカ",
          "url": "https://animaldiversity.org/accounts/Cervus_nippon/"
        }
      ]
    },
    "bodyType": "hoof"
  },
  {
    "id": "bio-japanese-macaque",
    "species": "ニホンザル",
    "scientificName": "Macaca fuscata",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 23,
    "color": "#9b8065",
    "habitat": "日本の山林",
    "place": "野生の母系の群れ",
    "care": "母と群れ",
    "health": 76,
    "safety": 60,
    "bond": 87,
    "food": 62,
    "opening": "木々に囲まれた山で生まれ、母の胸の毛を握った。あなたは雌だ。",
    "events": [
      "母乳を飲み、母の腹にしがみついて運ばれた。",
      "母の背に乗るようになり、近くの枝にも手を伸ばした。",
      "仲間の子と遊び、食べられる実を口に運んだ。",
      "母や親しい雌のそばで、指先で毛づくろいをした。",
      "冬の山で仲間と寄り添い、木の芽や残った食べ物を探した。"
    ],
    "eventAges": [
      0.01,
      0.2,
      1,
      3,
      7
    ],
    "decision": {
      "title": "仲間の隣",
      "body": "食事のあと、親しい仲間がそばに座った。",
      "options": [
        [
          "毛づくろいする",
          "指先で毛を分け、しばらく静かな時間を過ごした。",
          1,
          6
        ],
        [
          "子どもたちを見る",
          "近くで追いかけ合う子どもたちを、枝の上から見た。",
          2,
          1
        ]
      ]
    },
    "ending": "山の群れに、あなたと過ごした時間が残った。",
    "quote": "覚えていた手の温かさを、また別の手に返した。",
    "ecology": {
      "diet": "果実・種子・葉・昆虫などを季節に応じて食べる雑食。",
      "behavior": "群れで生活し、毛づくろいが関係を保つ。雌は生まれた群れに残ることが多い。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ニホンザル",
          "url": "https://animaldiversity.org/accounts/Macaca_fuscata/"
        }
      ]
    },
    "bodyType": "primate"
  },
  {
    "id": "bio-western-gorilla",
    "species": "ニシゴリラ",
    "scientificName": "Gorilla gorilla",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 40,
    "color": "#9b8065",
    "habitat": "中央アフリカの森林",
    "place": "野生の群れ",
    "care": "母と群れ",
    "health": 80,
    "safety": 65,
    "bond": 86,
    "food": 73,
    "opening": "森の群れの中で生まれ、母の胸に抱かれた。",
    "events": [
      "母乳を飲み、母の体に手足をからめた。",
      "母の背に乗り、葉の間から群れを眺めた。",
      "柔らかな葉や果実を食べ、仲間の子と組み合って遊んだ。",
      "枝や葉を引き寄せ、自分で休む床を作るようになった。",
      "群れと森を移動し、熟した果実のある木で食事をした。"
    ],
    "eventAges": [
      0.01,
      0.5,
      2,
      5,
      12
    ],
    "decision": {
      "title": "夕方の森",
      "body": "光が弱まり、群れが休む場所を探している。",
      "options": [
        [
          "葉を集める",
          "枝を曲げ、体を支える休み床を作った。",
          3,
          0
        ],
        [
          "群れのそばへ寄る",
          "仲間の見える場所を選び、葉の上に腰を下ろした。",
          1,
          5
        ]
      ]
    },
    "ending": "森の夕方に、あなたが組んだ葉の床が静まった。",
    "quote": "大きな手が触れた葉は、やがて土へ戻った。",
    "ecology": {
      "diet": "果実・葉・茎などを中心に、昆虫も食べる。",
      "behavior": "群れで生活し、地上や木に植物を組んだ休み床を作る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：ニシゴリラ",
          "url": "https://animaldiversity.org/accounts/Gorilla_gorilla/"
        }
      ]
    },
    "bodyType": "primate"
  },
  {
    "id": "bio-chimpanzee",
    "species": "チンパンジー",
    "scientificName": "Pan troglodytes",
    "group": "哺乳類",
    "weight": 1,
    "unit": "歳",
    "span": 42,
    "color": "#9b8065",
    "habitat": "アフリカの森林",
    "place": "野生の地域集団",
    "care": "母と集団",
    "health": 76,
    "safety": 56,
    "bond": 88,
    "food": 68,
    "opening": "森の群れで生まれ、母の胸に抱かれた。",
    "events": [
      "母乳を飲み、母の毛をしっかり握って運ばれた。",
      "母の背から木々を眺め、近くの枝をつかんだ。",
      "果実を自分で食べ、仲間の子と追いかけ合った。",
      "年長の仲間のそばで、食べ物の探し方をじっと見た。",
      "木の上で枝葉を折り、自分の寝床を作るようになった。"
    ],
    "eventAges": [
      0.01,
      0.5,
      2,
      5,
      10
    ],
    "decision": {
      "title": "果実の木",
      "body": "熟した果実の木に、仲間が集まっている。",
      "options": [
        [
          "仲間と登る",
          "枝を渡って果実を取り、そばの顔を確かめた。",
          1,
          5
        ],
        [
          "低い枝で待つ",
          "混み合う枝を避け、空いた場所から果実を取った。",
          2,
          0
        ]
      ]
    },
    "ending": "森で交わした声は、仲間のいる方向へ響いた。",
    "quote": "見て、真似て、覚えたことが一生をつくった。",
    "ecology": {
      "diet": "果実を中心に葉・種子・昆虫など。小動物を食べることもある。",
      "behavior": "集団内で小さな群れに分かれたり合流したりする。道具の使い方には地域差がある。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web：チンパンジー",
          "url": "https://animaldiversity.org/accounts/Pan_troglodytes/"
        }
      ]
    },
    "bodyType": "primate"
  },
  {
    "id": "bio-aptenodytes-forsteri",
    "species": "コウテイペンギン",
    "scientificName": "Aptenodytes forsteri",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 20,
    "color": "#adb6bc",
    "habitat": "野生",
    "place": "南極の海氷",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "父の足の上で殻を割り、腹の羽の下へ潜った。",
    "events": [
      "父の腹の羽の下で暖まり、栄養をもらった。",
      "海から戻った母の声を聞き分け、運ばれた餌を飲み込んだ。",
      "綿羽が抜け、初めて海へ入り魚を追った。",
      "冬の群れの中で、少しずつ立つ場所を入れ替えた。",
      "長い採餌のあと、氷の縁で息を整えた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.0,
      12.0
    ],
    "decision": {
      "title": "コウテイペンギンのある日",
      "body": "南極の海氷で過ごす一日。海氷で繁殖し、寒さの中で集まって体温を保つ。",
      "options": [
        [
          "群れへ身を寄せる",
          "群れへ身を寄せる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "氷の陰で伏せる",
          "氷の陰で伏せる。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "コウテイペンギンとして、南極の海氷で日々を重ねた。長い採餌のあと、氷の縁で息を整えた。この一羽の一生は、そこで静かに終わった。",
    "quote": "南極の海氷で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "魚・オキアミ・イカなど。雛は親の給餌に頼る。",
      "behavior": "海氷で繁殖し、寒さの中で集まって体温を保つ。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Aptenodytes forsteri",
          "url": "https://animaldiversity.org/accounts/Aptenodytes_forsteri/"
        }
      ]
    },
    "bodyType": "penguin"
  },
  {
    "id": "bio-spheniscus-humboldti",
    "species": "フンボルトペンギン",
    "scientificName": "Spheniscus humboldti",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 22,
    "color": "#adb6bc",
    "habitat": "動物園",
    "place": "動物園の岩場とプール",
    "care": "動物園の飼育員に世話される",
    "health": 78,
    "safety": 85,
    "bond": 58,
    "food": 83,
    "opening": "岩穴の巣で孵り、親から吐き戻した魚をもらった。",
    "events": [
      "巣穴の奥で魚をねだり、親の声に返事をした。",
      "胸の羽が揃い、浅いプールへ滑り込んだ。",
      "飼育員の持つ魚を見つけ、水中を急旋回した。",
      "相手と同じ巣穴へ小枝を運んだ。",
      "換羽のあいだ陸で静かに過ごし、新しい羽を整えた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.6,
      13.2
    ],
    "decision": {
      "title": "フンボルトペンギンのある日",
      "body": "動物園の岩場とプールで過ごす一日。南米の冷たい沿岸で採餌し、岩の隙間や穴で繁殖する。",
      "options": [
        [
          "プールを泳ぐ",
          "プールを泳ぐ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "岩場で羽を整える",
          "岩場で羽を整える。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "フンボルトペンギンとして、動物園の岩場とプールで日々を重ねた。換羽のあいだ陸で静かに過ごし、新しい羽を整えた。この一羽の一生は、そこで静かに終わった。",
    "quote": "動物園の岩場とプールで聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "野生では群れる小魚やイカなど。",
      "behavior": "南米の冷たい沿岸で採餌し、岩の隙間や穴で繁殖する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Spheniscus humboldti",
          "url": "https://animaldiversity.org/accounts/Spheniscus_humboldti/"
        }
      ]
    },
    "bodyType": "penguin"
  },
  {
    "id": "bio-pygoscelis-papua",
    "species": "ジェンツーペンギン",
    "scientificName": "Pygoscelis papua",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 18,
    "color": "#adb6bc",
    "habitat": "野生",
    "place": "亜南極の海岸",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "小石で囲まれた巣から顔を出し、親の餌を待った。",
    "events": [
      "親に温められ、小石の巣で餌をもらった。",
      "隣の雛たちとまとまり、帰ってくる親を呼んだ。",
      "海で翼を動かすと、陸より速く進めた。",
      "海岸の小石を一つ選び、巣へ持ち帰った。",
      "雪の上の通り道を歩き、いつもの入江へ向かった。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      5.4,
      10.8
    ],
    "decision": {
      "title": "ジェンツーペンギンのある日",
      "body": "亜南極の海岸で過ごす一日。小石の巣で子育てし、泳いで海の餌を捕る。",
      "options": [
        [
          "小石を巣へ運ぶ",
          "小石を巣へ運ぶ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "浜で休む",
          "浜で休む。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ジェンツーペンギンとして、亜南極の海岸で日々を重ねた。雪の上の通り道を歩き、いつもの入江へ向かった。この一羽の一生は、そこで静かに終わった。",
    "quote": "亜南極の海岸で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "魚・オキアミなどの甲殻類・頭足類。",
      "behavior": "小石の巣で子育てし、泳いで海の餌を捕る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Pygoscelis papua",
          "url": "https://animaldiversity.org/accounts/Pygoscelis_papua/"
        }
      ]
    },
    "bodyType": "penguin"
  },
  {
    "id": "bio-struthio-camelus",
    "species": "ダチョウ",
    "scientificName": "Struthio camelus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 35,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "アフリカの草原",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "大きな殻を割り、親の脚の下で休んだ。",
    "events": [
      "親の脚のそばで休み、地面をつついた。",
      "親について歩き、地面の種を自分でついばんだ。",
      "脚が伸び、群れと草原を走り抜けた。",
      "遠くの動く影に気づき、首を高く上げた。",
      "乾いた午後、地面へ腰を下ろして風を受けた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      10.5,
      21.0
    ],
    "decision": {
      "title": "ダチョウのある日",
      "body": "アフリカの草原で過ごす一日。飛ばずに走る大型の鳥。砂へ頭を埋める習性はない。",
      "options": [
        [
          "首を高く上げる",
          "首を高く上げる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "群れと歩く",
          "群れと歩く。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ダチョウとして、アフリカの草原で日々を重ねた。乾いた午後、地面へ腰を下ろして風を受けた。この一羽の一生は、そこで静かに終わった。",
    "quote": "アフリカの草原で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "草の葉・種子など植物が中心で、昆虫も食べる。",
      "behavior": "飛ばずに走る大型の鳥。砂へ頭を埋める習性はない。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Struthio camelus",
          "url": "https://animaldiversity.org/accounts/Struthio_camelus/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-dromaius-novaehollandiae",
    "species": "エミュー",
    "scientificName": "Dromaius novaehollandiae",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 20,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "オーストラリアの疎林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "縞模様の体で孵り、父の後ろを歩き始めた。",
    "events": [
      "父について数歩進み、地面の虫を探した。",
      "父の近くで小さな虫をついばんだ。",
      "雨のあと、芽吹く草地へ長い脚で移動した。",
      "浅い水場で喉を潤し、周囲を見渡した。",
      "低い声が響く疎林を、ゆっくり横切った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.0,
      12.0
    ],
    "decision": {
      "title": "エミューのある日",
      "body": "オーストラリアの疎林で過ごす一日。雄が抱卵と育雛を担い、食べ物や水を求めて移動する。",
      "options": [
        [
          "虫を探す",
          "虫を探す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "水場へ向かう",
          "水場へ向かう。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "エミューとして、オーストラリアの疎林で日々を重ねた。低い声が響く疎林を、ゆっくり横切った。この一羽の一生は、そこで静かに終わった。",
    "quote": "オーストラリアの疎林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "種子・果実・昆虫など。",
      "behavior": "雄が抱卵と育雛を担い、食べ物や水を求めて移動する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Dromaius novaehollandiae",
          "url": "https://animaldiversity.org/accounts/Dromaius_novaehollandiae/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-casuarius-casuarius",
    "species": "ヒクイドリ",
    "scientificName": "Casuarius casuarius",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 28,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "熱帯雨林の林床",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "林床の巣で孵り、父のそばに隠れた。",
    "events": [
      "父の後をついて歩き、落ち葉を踏んだ。",
      "縞のある体で落ち葉をかき分け、小さな実を探した。",
      "頭の突起が育ち、青い首が目立つようになった。",
      "熟した大きな実を飲み込み、林の奥へ歩いた。",
      "離れた場所に種を残し、暗い獣道を進んだ。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      8.4,
      16.8
    ],
    "decision": {
      "title": "ヒクイドリのある日",
      "body": "熱帯雨林の林床で過ごす一日。雄が雛を育てる。果実の種を運ぶ役割を持つ。",
      "options": [
        [
          "果実を飲み込む",
          "果実を飲み込む。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "森の道を歩く",
          "森の道を歩く。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ヒクイドリとして、熱帯雨林の林床で日々を重ねた。離れた場所に種を残し、暗い獣道を進んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "熱帯雨林の林床で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "落下した果実が中心で、昆虫や小動物なども食べる。",
      "behavior": "雄が雛を育てる。果実の種を運ぶ役割を持つ。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Casuarius casuarius",
          "url": "https://animaldiversity.org/accounts/Casuarius_casuarius/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-phoenicopterus-roseus",
    "species": "フラミンゴ",
    "scientificName": "Phoenicopterus roseus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 35,
    "color": "#adb6bc",
    "habitat": "動物園",
    "place": "動物園の浅い池",
    "care": "動物園の飼育員に世話される",
    "health": 78,
    "safety": 85,
    "bond": 58,
    "food": 83,
    "opening": "泥の巣で孵り、親から赤みのある分泌物をもらった。",
    "events": [
      "灰色の体で寄り添い、親の分泌物を口で受けた。",
      "灰色の雛たちと集まり、親の呼び声を待った。",
      "くちばしを逆さに水へ入れ、餌を濾す動きを覚えた。",
      "羽に桃色が増え、群れと首を揃えて歩いた。",
      "浅瀬で片脚をたたみ、仲間の声を聞いていた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      10.5,
      21.0
    ],
    "decision": {
      "title": "フラミンゴのある日",
      "body": "動物園の浅い池で過ごす一日。群れで暮らす。雛は灰色で、親の分泌物をもらって育つ。",
      "options": [
        [
          "水を濾して食べる",
          "水を濾して食べる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "片脚で休む",
          "片脚で休む。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "フラミンゴとして、動物園の浅い池で日々を重ねた。浅瀬で片脚をたたみ、仲間の声を聞いていた。この一羽の一生は、そこで静かに終わった。",
    "quote": "動物園の浅い池で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "野生では小さな甲殻類・昆虫の幼虫・藻類などを濾し取る。",
      "behavior": "群れで暮らす。雛は灰色で、親の分泌物をもらって育つ。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Phoenicopterus roseus",
          "url": "https://animaldiversity.org/accounts/Phoenicopterus_roseus/"
        }
      ]
    },
    "bodyType": "flamingo"
  },
  {
    "id": "bio-balaeniceps-rex",
    "species": "ハシビロコウ",
    "scientificName": "Balaeniceps rex",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 30,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "アフリカの湿地",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "湿地の巣で孵り、親が運ぶ魚を待った。",
    "events": [
      "親へ餌をねだり、運ばれてくる魚を食べた。",
      "育ったくちばしを鳴らし、親へ反応した。",
      "浅瀬で動かず待つうち、水面に魚が現れた。",
      "体を前へ倒すように、魚へくちばしを突き出した。",
      "葦の影に立ち、波紋が消えるまで待った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      9.0,
      18.0
    ],
    "decision": {
      "title": "ハシビロコウのある日",
      "body": "アフリカの湿地で過ごす一日。浅い水辺で待ち伏せし、大きなくちばしで獲物を捕る。",
      "options": [
        [
          "動かず待つ",
          "動かず待つ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "浅瀬をゆっくり歩く",
          "浅瀬をゆっくり歩く。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ハシビロコウとして、アフリカの湿地で日々を重ねた。葦の影に立ち、波紋が消えるまで待った。この一羽の一生は、そこで静かに終わった。",
    "quote": "アフリカの湿地で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "ハイギョやナマズなどの魚が中心。",
      "behavior": "浅い水辺で待ち伏せし、大きなくちばしで獲物を捕る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Balaeniceps rex",
          "url": "https://animaldiversity.org/accounts/Balaeniceps_rex/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-grus-japonensis",
    "species": "タンチョウ",
    "scientificName": "Grus japonensis",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 25,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "北海道の湿原",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "草の巣で孵り、親の足元へ歩き出した。",
    "events": [
      "親のそばを歩き、差し出された虫を食べた。",
      "親が差し出す虫を受け取り、浅瀬をついて回った。",
      "長い翼が育ち、湿原の上を飛び始めた。",
      "相手と向き合い、跳ねながら翼を広げた。",
      "冷えた朝、湿原に響く声へ返事をした。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      7.5,
      15.0
    ],
    "decision": {
      "title": "タンチョウのある日",
      "body": "北海道の湿原で過ごす一日。湿地で繁殖し、つがいで声や踊りを交わす。",
      "options": [
        [
          "相手へ鳴き返す",
          "相手へ鳴き返す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "翼を広げて跳ねる",
          "翼を広げて跳ねる。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "タンチョウとして、北海道の湿原で日々を重ねた。冷えた朝、湿原に響く声へ返事をした。この一羽の一生は、そこで静かに終わった。",
    "quote": "北海道の湿原で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "魚・昆虫・小動物・植物などを食べる雑食。",
      "behavior": "湿地で繁殖し、つがいで声や踊りを交わす。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Grus japonensis",
          "url": "https://animaldiversity.org/accounts/Grus_japonensis/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-ciconia-boyciana",
    "species": "コウノトリ",
    "scientificName": "Ciconia boyciana",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 25,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "里山の水田と湿地",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "高い巣で孵り、親が吐き出す餌へ首を伸ばした。",
    "events": [
      "巣の中央できょうだいと寄り、親の帰りを待った。",
      "巣の端で大きな翼を動かし、飛ぶ準備をした。",
      "水田へ降り、泥の中の魚をくちばしで探った。",
      "巣に戻った相手へ、くちばしを鳴らした。",
      "稲刈りあとの田で、跳ぶバッタを追った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      7.5,
      15.0
    ],
    "decision": {
      "title": "コウノトリのある日",
      "body": "里山の水田と湿地で過ごす一日。高い場所に巣を作り、くちばしを打ち合わせて合図する。",
      "options": [
        [
          "泥水へ嘴を差す",
          "泥水へ嘴を差す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "畦の虫を探す",
          "畦の虫を探す。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "コウノトリとして、里山の水田と湿地で日々を重ねた。稲刈りあとの田で、跳ぶバッタを追った。この一羽の一生は、そこで静かに終わった。",
    "quote": "里山の水田と湿地で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "魚・カエル・昆虫・ザリガニなど水辺の動物。",
      "behavior": "高い場所に巣を作り、くちばしを打ち合わせて合図する。",
      "refLinks": [
        {
          "title": "兵庫県立コウノトリの郷公園 — なにを食べる？",
          "url": "https://satokouen.jp/study_top/study_07"
        },
        {
          "title": "兵庫県 — コウノトリの生息環境と採餌",
          "url": "https://web.pref.hyogo.lg.jp/tjk04/kounotorikyougikai.html"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-nipponia-nippon",
    "species": "トキ",
    "scientificName": "Nipponia nippon",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 18,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "佐渡の里山",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "木の上の巣で孵り、両親から餌をもらった。",
    "events": [
      "枝の巣で温められ、運ばれる餌を食べた。",
      "枝へ移り、淡い朱色の翼を広げた。",
      "田の泥へくちばしを差し入れ、初めて餌を探した。",
      "春になると首の黒い物質を羽へこすりつけた。",
      "夕方のねぐらへ向かい、仲間と林へ降りた。"
    ],
    "eventAges": [
      0.01,
      0.18,
      0.6,
      5.4,
      10.8
    ],
    "decision": {
      "title": "トキのある日",
      "body": "佐渡の里山で過ごす一日。曲がったくちばしを浅い泥へ差し込み、餌を探す。",
      "options": [
        [
          "泥へ嘴を入れる",
          "泥へ嘴を入れる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "水路の縁へ移る",
          "水路の縁へ移る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "トキとして、佐渡の里山で日々を重ねた。夕方のねぐらへ向かい、仲間と林へ降りた。この一羽の一生は、そこで静かに終わった。",
    "quote": "佐渡の里山で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "ドジョウ・カエル・昆虫・ミミズなど。",
      "behavior": "曲がったくちばしを浅い泥へ差し込み、餌を探す。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Nipponia nippon",
          "url": "https://animaldiversity.org/accounts/Nipponia_nippon/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-ardea-cinerea",
    "species": "アオサギ",
    "scientificName": "Ardea cinerea",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 15,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "川沿いの林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "樹上の巣で孵り、親のくちばしへ餌をねだった。",
    "events": [
      "首を伸ばし、巣の中で親へ餌を求めた。",
      "巣の枝を踏み、風の中で翼を試した。",
      "浅瀬で立ち止まり、魚が寄るのを待った。",
      "首を折りたたんで飛び、川の曲がり角へ移った。",
      "夕暮れの岸で、小魚を丸ごと飲み込んだ。"
    ],
    "eventAges": [
      0.01,
      0.18,
      0.6,
      4.5,
      9.0
    ],
    "decision": {
      "title": "アオサギのある日",
      "body": "川沿いの林で過ごす一日。樹上で集団繁殖する一方、採餌では距離を取って待ち伏せする。",
      "options": [
        [
          "浅瀬で魚を待つ",
          "浅瀬で魚を待つ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "岸へ飛ぶ",
          "岸へ飛ぶ。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "アオサギとして、川沿いの林で日々を重ねた。夕暮れの岸で、小魚を丸ごと飲み込んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "川沿いの林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "主に魚。カエル・甲殻類・小型哺乳類なども捕る。",
      "behavior": "樹上で集団繁殖する一方、採餌では距離を取って待ち伏せする。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Ardea cinerea",
          "url": "https://animaldiversity.org/accounts/Ardea_cinerea/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-anas-platyrhynchos",
    "species": "マガモ",
    "scientificName": "Anas platyrhynchos",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "湖の岸辺",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "草陰で孵り、母の後を歩いて水へ入った。",
    "events": [
      "母の近くで、小さな虫を自分でついばんだ。",
      "水面の小さな虫を自分でついばんだ。",
      "翼が育ち、湖面から飛び上がった。",
      "浅い場所で尻を上げ、水中の餌へ首を伸ばした。",
      "換羽で飛べない期間、葦の近くで過ごした。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      3.0,
      6.0
    ],
    "decision": {
      "title": "マガモのある日",
      "body": "湖の岸辺で過ごす一日。雛は孵化後まもなく母について歩き、自分で採餌する。",
      "options": [
        [
          "水面の餌をつまむ",
          "水面の餌をつまむ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "葦の陰で休む",
          "葦の陰で休む。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "マガモとして、湖の岸辺で日々を重ねた。換羽で飛べない期間、葦の近くで過ごした。この一羽の一生は、そこで静かに終わった。",
    "quote": "湖の岸辺で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "水草・種子・水生昆虫など。雛は動物質の餌もよく食べる。",
      "behavior": "雛は孵化後まもなく母について歩き、自分で採餌する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Anas platyrhynchos",
          "url": "https://animaldiversity.org/accounts/Anas_platyrhynchos/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-aix-galericulata",
    "species": "オシドリ",
    "scientificName": "Aix galericulata",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "森に囲まれた池",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "木の洞で孵り、母の声に向かって地面へ跳び降りた。",
    "events": [
      "洞の中で体を寄せ、外からの母の声に反応した。",
      "きょうだいと池へ入り、小さな餌をついばんだ。",
      "木陰の枝に止まり、水面を見下ろした。",
      "秋の池で、落ちた木の実を探した。",
      "冬の群れへ合流し、岸の暗がりで休んだ。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      3.0,
      6.0
    ],
    "decision": {
      "title": "オシドリのある日",
      "body": "森に囲まれた池で過ごす一日。木の洞で繁殖し、雛は巣から飛び降りて母について水へ向かう。",
      "options": [
        [
          "木の実を探す",
          "木の実を探す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "枝に止まる",
          "枝に止まる。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "オシドリとして、森に囲まれた池で日々を重ねた。冬の群れへ合流し、岸の暗がりで休んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "森に囲まれた池で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "木の実・種子・水生昆虫など。",
      "behavior": "木の洞で繁殖し、雛は巣から飛び降りて母について水へ向かう。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Aix galericulata",
          "url": "https://animaldiversity.org/accounts/Aix_galericulata/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-cygnus-olor",
    "species": "コブハクチョウ",
    "scientificName": "Cygnus olor",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 20,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "大きな公園の湖",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "岸の大きな巣で孵り、親のそばで泳いだ。",
    "events": [
      "親の近くの水面で、灰色の体を浮かべた。",
      "灰色の体で浅瀬の水草をつまんだ。",
      "翼を大きく打ち、湖面を走って飛んだ。",
      "首を深く水へ入れ、沈んだ植物を食べた。",
      "白い羽を整え、湖の静かな湾へ戻った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.0,
      12.0
    ],
    "decision": {
      "title": "コブハクチョウのある日",
      "body": "大きな公園の湖で過ごす一日。雛は親の近くで泳ぎ、長い首を水中へ伸ばして採餌する。",
      "options": [
        [
          "首を沈めて水草を食べる",
          "首を沈めて水草を食べる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "岸で羽繕いする",
          "岸で羽繕いする。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "コブハクチョウとして、大きな公園の湖で日々を重ねた。白い羽を整え、湖の静かな湾へ戻った。この一羽の一生は、そこで静かに終わった。",
    "quote": "大きな公園の湖で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "主に水草。小さな水生動物も食べる。",
      "behavior": "雛は親の近くで泳ぎ、長い首を水中へ伸ばして採餌する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Cygnus olor",
          "url": "https://animaldiversity.org/accounts/Cygnus_olor/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-cygnus-atratus",
    "species": "コクチョウ",
    "scientificName": "Cygnus atratus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 20,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "オーストラリアの湖",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "水辺の巣で孵り、黒い親の間へ入った。",
    "events": [
      "岸で親へ寄り、柔らかな綿羽を乾かした。",
      "灰色の綿羽で泳ぎ、柔らかい水草をつまんだ。",
      "黒い羽が揃い、飛ぶと翼の白い部分が現れた。",
      "浅い湾で首を沈め、底の植物を引き上げた。",
      "湖に集まる群れの声を聞き、岸で休んだ。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.0,
      12.0
    ],
    "decision": {
      "title": "コクチョウのある日",
      "body": "オーストラリアの湖で過ごす一日。雛を両親が守り、群れでも生活する。飛ぶと白い風切羽が見える。",
      "options": [
        [
          "群れへ泳ぐ",
          "群れへ泳ぐ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "浅瀬の水草を探す",
          "浅瀬の水草を探す。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "コクチョウとして、オーストラリアの湖で日々を重ねた。湖に集まる群れの声を聞き、岸で休んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "オーストラリアの湖で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "水草・藻類・草など。",
      "behavior": "雛を両親が守り、群れでも生活する。飛ぶと白い風切羽が見える。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Cygnus atratus",
          "url": "https://animaldiversity.org/accounts/Cygnus_atratus/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-alcedo-atthis",
    "species": "カワセミ",
    "scientificName": "Alcedo atthis",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 6,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "小川の土手",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "土手の巣穴で孵り、親が運ぶ魚を飲み込んだ。",
    "events": [
      "巣穴の奥で、魚を運ぶ親の足音を聞いた。",
      "穴から出て、川を見下ろす枝へ止まった。",
      "水面へ飛び込み、小魚をくちばしに挟んだ。",
      "魚を枝へ打ちつけ、頭から飲み込んだ。",
      "青い背を光らせ、川に沿って低く飛んだ。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.6,
      1.8,
      3.6
    ],
    "decision": {
      "title": "カワセミのある日",
      "body": "小川の土手で過ごす一日。土の崖へ巣穴を掘り、水中へ飛び込んで獲物を捕る。",
      "options": [
        [
          "小魚へ飛び込む",
          "小魚へ飛び込む。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "上流の枝へ飛ぶ",
          "上流の枝へ飛ぶ。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "カワセミとして、小川の土手で日々を重ねた。青い背を光らせ、川に沿って低く飛んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "小川の土手で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "主に小魚で、水生昆虫や甲殻類なども捕る。",
      "behavior": "土の崖へ巣穴を掘り、水中へ飛び込んで獲物を捕る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Alcedo atthis",
          "url": "https://animaldiversity.org/accounts/Alcedo_atthis/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-hirundo-rustica",
    "species": "ツバメ",
    "scientificName": "Hirundo rustica",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 6,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "農村の家の軒先",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "軒下の泥の巣で孵り、親が運ぶ虫を口で受けた。",
    "events": [
      "きょうだいと並んで口を開き、親へ虫をねだった。",
      "巣の縁へ並び、初めて空へ踏み出した。",
      "田の上を旋回し、飛ぶ虫を捕まえた。",
      "夕暮れに葦原へ集まり、群れで夜を過ごした。",
      "季節風を受けながら、暖かい土地へ海を越えた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      1.8,
      3.6
    ],
    "decision": {
      "title": "ツバメのある日",
      "body": "農村の家の軒先で過ごす一日。泥の巣で育雛し、繁殖後には群れで渡る。",
      "options": [
        [
          "空中の虫を追う",
          "空中の虫を追う。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "葦原へ向かう",
          "葦原へ向かう。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ツバメとして、農村の家の軒先で日々を重ねた。季節風を受けながら、暖かい土地へ海を越えた。この一羽の一生は、そこで静かに終わった。",
    "quote": "農村の家の軒先で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "飛んでいる昆虫を捕らえて食べる。",
      "behavior": "泥の巣で育雛し、繁殖後には群れで渡る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Hirundo rustica",
          "url": "https://animaldiversity.org/accounts/Hirundo_rustica/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-motacilla-alba",
    "species": "ハクセキレイ",
    "scientificName": "Motacilla alba",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 6,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "町の川と駐車場",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "建物の隙間の巣で孵り、親から虫をもらった。",
    "events": [
      "巣の中で、運ばれてくる虫を飲み込んだ。",
      "巣立ち後も親を追いかけ、翼を震わせて餌を求めた。",
      "水際を走り、尾を振りながら虫をつかまえた。",
      "街灯の下で、光へ集まる虫を追った。",
      "夕方、仲間の集まるねぐらへ飛んだ。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.6,
      1.8,
      3.6
    ],
    "decision": {
      "title": "ハクセキレイのある日",
      "body": "町の川と駐車場で過ごす一日。地上を歩いたり走ったりして採餌し、尾を上下に動かす。",
      "options": [
        [
          "水際を走る",
          "水際を走る。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "飛んだ虫を追う",
          "飛んだ虫を追う。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ハクセキレイとして、町の川と駐車場で日々を重ねた。夕方、仲間の集まるねぐらへ飛んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "町の川と駐車場で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "昆虫などの小さな無脊椎動物。",
      "behavior": "地上を歩いたり走ったりして採餌し、尾を上下に動かす。",
      "refLinks": [
        {
          "title": "バードリサーチ — ハクセキレイ生態図鑑",
          "url": "https://www.bird-research.jp/1/seitai/6_1_alba.pdf"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-zosterops-japonicus",
    "species": "メジロ",
    "scientificName": "Zosterops japonicus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 7,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "里山の常緑樹林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "枝に下がる小さな巣で孵り、親が運ぶ虫を食べた。",
    "events": [
      "小さな巣の底で親に温められた。",
      "巣の外へ出て、葉陰で親を呼んだ。",
      "花へ細い舌を伸ばし、蜜をなめた。",
      "熟した小さな実をつつき、隣の木へ移った。",
      "冬の林で仲間と寄り、羽を膨らませた。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.6,
      2.1,
      4.2
    ],
    "decision": {
      "title": "メジロのある日",
      "body": "里山の常緑樹林で過ごす一日。枝先で採餌し、繁殖期以外は群れや他種の鳥と行動する。",
      "options": [
        [
          "花の蜜を吸う",
          "花の蜜を吸う。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "熟した果実をつつく",
          "熟した果実をつつく。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "メジロとして、里山の常緑樹林で日々を重ねた。冬の林で仲間と寄り、羽を膨らませた。この一羽の一生は、そこで静かに終わった。",
    "quote": "里山の常緑樹林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "花の蜜・果実・昆虫など。",
      "behavior": "枝先で採餌し、繁殖期以外は群れや他種の鳥と行動する。",
      "refLinks": [
        {
          "title": "森林総合研究所 — メジロ",
          "url": "https://www.ffpri.go.jp/tmk/kengakuannai/midokoro/chorui/mejiro.html"
        },
        {
          "title": "バードリサーチ — メジロの調査",
          "url": "https://www.bird-research.jp/1_katsudo/mejiro/index.html"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-parus-minor",
    "species": "シジュウカラ",
    "scientificName": "Parus minor",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 7,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "林の巣箱",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "巣箱で孵り、親の運ぶ幼虫へ口を開いた。",
    "events": [
      "巣箱の暗闇で、親の足音を待った。",
      "狭い穴から飛び出し、近くの枝で親を待った。",
      "枝の裏側を探り、葉につく虫を取った。",
      "仲間の警戒声を聞き、幹の周囲を見回した。",
      "冬の林を小鳥たちと移動し、種をついばんだ。"
    ],
    "eventAges": [
      0.01,
      0.1,
      0.6,
      2.1,
      4.2
    ],
    "decision": {
      "title": "シジュウカラのある日",
      "body": "林の巣箱で過ごす一日。樹洞や巣箱で繁殖し、鳴き声で仲間へ警戒や集合を伝える。",
      "options": [
        [
          "幹の陰へ寄る",
          "幹の陰へ寄る。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "仲間の声を聞く",
          "仲間の声を聞く。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "シジュウカラとして、林の巣箱で日々を重ねた。冬の林を小鳥たちと移動し、種をついばんだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "林の巣箱で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "昆虫・クモ・木の実など。繁殖期は雛へ虫を運ぶ。",
      "behavior": "樹洞や巣箱で繁殖し、鳴き声で仲間へ警戒や集合を伝える。",
      "refLinks": [
        {
          "title": "バードリサーチ — 仲間の声からヘビをイメージ",
          "url": "https://db3.bird-research.jp/news/201808-no3/"
        },
        {
          "title": "バードリサーチ — 巣箱プロジェクト",
          "url": "https://www.bird-research.jp/1_katsudo/subako/index_houhou.html"
        },
        {
          "title": "林野庁 — シジュウカラ",
          "url": "https://www.rinya.maff.go.jp/chubu/policy/business/conservation/corridor/sizyuukara.html"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-corvus-macrorhynchos",
    "species": "ハシブトガラス",
    "scientificName": "Corvus macrorhynchos",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 15,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "都市の公園",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "木の上の巣で孵り、親が喉から戻す餌を受け取った。",
    "events": [
      "親の羽の下で暖まり、口に入れられる餌を食べた。",
      "枝へ出て、親へ大きな声で餌をねだった。",
      "公園で実をくわえ、安全な枝へ運んだ。",
      "夕方になると仲間と集まり、ねぐらの林へ向かった。",
      "道具のような落ち枝をつつき、地面を確かめた。"
    ],
    "eventAges": [
      0.01,
      0.12,
      0.6,
      4.5,
      9.0
    ],
    "decision": {
      "title": "ハシブトガラスのある日",
      "body": "都市の公園で過ごす一日。樹上で繁殖し、繁殖期以外は集団ねぐらを使う。",
      "options": [
        [
          "木の実を拾う",
          "木の実を拾う。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "ねぐらの群れへ加わる",
          "ねぐらの群れへ加わる。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ハシブトガラスとして、都市の公園で日々を重ねた。道具のような落ち枝をつつき、地面を確かめた。この一羽の一生は、そこで静かに終わった。",
    "quote": "都市の公園で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "果実・昆虫・小動物・人の食べ物の残りなどの雑食。",
      "behavior": "樹上で繁殖し、繁殖期以外は集団ねぐらを使う。",
      "refLinks": [
        {
          "title": "国土交通省 — ハシブトガラス",
          "url": "https://www.cgr.mlit.go.jp/ootagawa/Bio/birds/index400.htm"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-columba-livia",
    "species": "ハト",
    "scientificName": "Columba livia",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "街の高架下",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "高架下で孵り、親のくちばしから素嚢乳をもらった。",
    "events": [
      "親のくちばしへ口を差し込み、素嚢乳を受けた。",
      "羽が揃い、足場の端で羽ばたいた。",
      "群れと広場へ降り、地面の種を探した。",
      "水たまりへくちばしを入れ、続けて水を飲んだ。",
      "首を揺らして歩き、夕方には高架下へ戻った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      3.0,
      6.0
    ],
    "decision": {
      "title": "ハトのある日",
      "body": "街の高架下で過ごす一日。岩場や建物の隙間で繁殖し、雛へ両親が素嚢乳を与える。",
      "options": [
        [
          "地面の種を探す",
          "地面の種を探す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "水たまりで飲む",
          "水たまりで飲む。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ハトとして、街の高架下で日々を重ねた。首を揺らして歩き、夕方には高架下へ戻った。この一羽の一生は、そこで静かに終わった。",
    "quote": "街の高架下で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "種子・穀物が中心。街では人由来の食べ物も利用する。",
      "behavior": "岩場や建物の隙間で繁殖し、雛へ両親が素嚢乳を与える。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Columba livia",
          "url": "https://animaldiversity.org/accounts/Columba_livia/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-melopsittacus-undulatus",
    "species": "セキセイインコ",
    "scientificName": "Melopsittacus undulatus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 8,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "オーストラリアの乾いた草原",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "木の洞で孵り、母から餌をもらって育った。",
    "events": [
      "暗い巣穴で、運ばれてくる餌をもらった。",
      "巣穴から出て、緑の仲間を目で追った。",
      "群れと草地へ降り、小さな種の殻を割った。",
      "遠くの雨で潤った土地へ、仲間と飛んだ。",
      "水場で短く飲み、いっせいに枝へ戻った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      2.4,
      4.8
    ],
    "decision": {
      "title": "セキセイインコのある日",
      "body": "オーストラリアの乾いた草原で過ごす一日。群れで行動し、水や食べ物のある場所へ移動する。",
      "options": [
        [
          "草の種を食べる",
          "草の種を食べる。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "群れと水場へ飛ぶ",
          "群れと水場へ飛ぶ。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "セキセイインコとして、オーストラリアの乾いた草原で日々を重ねた。水場で短く飲み、いっせいに枝へ戻った。この一羽の一生は、そこで静かに終わった。",
    "quote": "オーストラリアの乾いた草原で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "主に草の種子など。",
      "behavior": "群れで行動し、水や食べ物のある場所へ移動する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Melopsittacus undulatus",
          "url": "https://animaldiversity.org/accounts/Melopsittacus_undulatus/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-nymphicus-hollandicus",
    "species": "オカメインコ",
    "scientificName": "Nymphicus hollandicus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 12,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "オーストラリアの開けた疎林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "木の洞で孵り、両親から餌をもらった。",
    "events": [
      "親の体へ寄り、木の洞で眠った。",
      "羽が伸び、入り口の光へ顔を向けた。",
      "群れと地面に降り、種を回して殻を外した。",
      "上空の影に冠羽を立て、仲間と飛び上がった。",
      "疎林の枝で頬の羽を整え、夕暮れを待った。"
    ],
    "eventAges": [
      0.01,
      0.12,
      0.6,
      3.6,
      7.2
    ],
    "decision": {
      "title": "オカメインコのある日",
      "body": "オーストラリアの開けた疎林で過ごす一日。地上で種を探し、群れで警戒する。冠羽の角度も状態を伝える。",
      "options": [
        [
          "地面の種を探す",
          "地面の種を探す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "冠羽を立てて周りを見る",
          "冠羽を立てて周りを見る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "オカメインコとして、オーストラリアの開けた疎林で日々を重ねた。疎林の枝で頬の羽を整え、夕暮れを待った。この一羽の一生は、そこで静かに終わった。",
    "quote": "オーストラリアの開けた疎林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "草や木の種子が中心。",
      "behavior": "地上で種を探し、群れで警戒する。冠羽の角度も状態を伝える。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Nymphicus hollandicus",
          "url": "https://animaldiversity.org/accounts/Nymphicus_hollandicus/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-psittacus-erithacus",
    "species": "ヨウム",
    "scientificName": "Psittacus erithacus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 40,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "アフリカの森林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "高い木の洞で孵り、親の餌を待った。",
    "events": [
      "灰色の綿羽の体を温められ、親から餌をもらった。",
      "赤い尾の羽が伸び、洞の入り口へ登った。",
      "仲間の声を聞きながら、ヤシの実をついばんだ。",
      "聞き慣れた声の調子を、自分の声に混ぜて鳴いた。",
      "ねぐらへ戻る群れと合流し、枝で嘴を拭った。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      12.0,
      24.0
    ],
    "decision": {
      "title": "ヨウムのある日",
      "body": "アフリカの森林で過ごす一日。樹洞で育ち、群れで鳴き交わす。さまざまな音を学習する。",
      "options": [
        [
          "群れへ声を返す",
          "群れへ声を返す。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "木の実を割る",
          "木の実を割る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ヨウムとして、アフリカの森林で日々を重ねた。ねぐらへ戻る群れと合流し、枝で嘴を拭った。この一羽の一生は、そこで静かに終わった。",
    "quote": "アフリカの森林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "果実・種子・木の実など植物質が中心。",
      "behavior": "樹洞で育ち、群れで鳴き交わす。さまざまな音を学習する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Psittacus erithacus",
          "url": "https://animaldiversity.org/accounts/Psittacus_erithacus/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-ara-ararauna",
    "species": "ルリコンゴウインコ",
    "scientificName": "Ara ararauna",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 40,
    "color": "#b1b5a2",
    "habitat": "野生",
    "place": "南米の川沿いの森林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "ヤシの洞で孵り、親から餌をもらった。",
    "events": [
      "洞の底で、餌を待って鳴いた。",
      "青と黄色の羽が伸び、長い尾で体を支えた。",
      "森の上を飛び、仲間の大きな声へ返事をした。",
      "硬い木の実を足で持ち、くちばしで割った。",
      "相手と並んだ枝で、互いの羽を整えた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      12.0,
      24.0
    ],
    "decision": {
      "title": "ルリコンゴウインコのある日",
      "body": "南米の川沿いの森林で過ごす一日。つがいや群れで行動し、大きな声で連絡する。",
      "options": [
        [
          "実を足で持って割る",
          "実を足で持って割る。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "相手の羽を整える",
          "相手の羽を整える。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ルリコンゴウインコとして、南米の川沿いの森林で日々を重ねた。相手と並んだ枝で、互いの羽を整えた。この一羽の一生は、そこで静かに終わった。",
    "quote": "南米の川沿いの森林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "種子・木の実・果実など。硬い殻を強いくちばしで割る。",
      "behavior": "つがいや群れで行動し、大きな声で連絡する。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Ara ararauna",
          "url": "https://animaldiversity.org/accounts/Ara_ararauna/"
        }
      ]
    },
    "bodyType": "bird"
  },
  {
    "id": "bio-bubo-bubo",
    "species": "ワシミミズク",
    "scientificName": "Bubo bubo",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 22,
    "color": "#adb6bc",
    "habitat": "野生",
    "place": "岩場のある森林",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "岩棚の巣で孵り、親がちぎる肉を受け取った。",
    "events": [
      "親がちぎる肉を口で受け取った。",
      "綿羽の体で巣の周りを歩き、岩陰へ隠れた。",
      "薄暗い草地へ飛び、獲物の動く音を探した。",
      "消化できない毛や骨をペリットにして吐いた。",
      "夜の岩場で低い声を響かせた。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      6.6,
      13.2
    ],
    "decision": {
      "title": "ワシミミズクのある日",
      "body": "岩場のある森林で過ごす一日。主に夜に狩り、昼は木や岩陰で休む。ペリットを吐き出す。",
      "options": [
        [
          "草地の音を聞く",
          "草地の音を聞く。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "岩陰へ移る",
          "岩陰へ移る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ワシミミズクとして、岩場のある森林で日々を重ねた。夜の岩場で低い声を響かせた。この一羽の一生は、そこで静かに終わった。",
    "quote": "岩場のある森林で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "主にネズミ類などの哺乳類や鳥。",
      "behavior": "主に夜に狩り、昼は木や岩陰で休む。ペリットを吐き出す。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Bubo bubo",
          "url": "https://animaldiversity.org/accounts/Bubo_bubo/"
        }
      ]
    },
    "bodyType": "raptor"
  },
  {
    "id": "bio-tyto-alba",
    "species": "メンフクロウ",
    "scientificName": "Tyto alba",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 8,
    "color": "#adb6bc",
    "habitat": "野生",
    "place": "ヨーロッパの農地の納屋",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "納屋の暗い隅で孵り、親の運ぶネズミを食べた。",
    "events": [
      "きょうだいと納屋の隅に寄り、餌を求めた。",
      "白い顔の羽が揃い、梁の上へ登った。",
      "夜の牧草地を低く飛び、草の音へ耳を向けた。",
      "足でつかんだ小さな獲物を巣へ持ち帰った。",
      "朝の光を避け、納屋の奥で休んだ。"
    ],
    "eventAges": [
      0.01,
      0.08,
      0.6,
      2.4,
      4.8
    ],
    "decision": {
      "title": "メンフクロウのある日",
      "body": "ヨーロッパの農地の納屋で過ごす一日。優れた聴覚で獲物を探し、草地を低く飛んで夜に狩る。",
      "options": [
        [
          "草の上を低く飛ぶ",
          "草の上を低く飛ぶ。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "梁から音を探る",
          "梁から音を探る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "メンフクロウとして、ヨーロッパの農地の納屋で日々を重ねた。朝の光を避け、納屋の奥で休んだ。この一羽の一生は、そこで静かに終わった。",
    "quote": "ヨーロッパの農地の納屋で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "ハタネズミやネズミなど小型哺乳類が中心。",
      "behavior": "優れた聴覚で獲物を探し、草地を低く飛んで夜に狩る。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Tyto alba",
          "url": "https://animaldiversity.org/accounts/Tyto_alba/"
        }
      ]
    },
    "bodyType": "raptor"
  },
  {
    "id": "bio-haliaeetus-leucocephalus",
    "species": "ハクトウワシ",
    "scientificName": "Haliaeetus leucocephalus",
    "group": "鳥類",
    "weight": 1,
    "unit": "歳",
    "span": 24,
    "color": "#adb6bc",
    "habitat": "野生",
    "place": "北米の湖畔",
    "care": "人の世話を受けず野生で暮らす",
    "health": 78,
    "safety": 48,
    "bond": 58,
    "food": 61,
    "opening": "大木の巣で孵り、親がちぎった魚を受け取った。",
    "events": [
      "巣の中央で伏せ、親が差し出す魚の肉を食べた。",
      "褐色の翼で巣を離れ、岸の木へたどり着いた。",
      "湖面の魚へ足を伸ばし、爪でつかみ上げた。",
      "数年かけて頭と尾が白くなり、広い空を旋回した。",
      "古い巣に枝を足し、湖を見下ろした。"
    ],
    "eventAges": [
      0.01,
      0.3,
      0.6,
      7.2,
      14.4
    ],
    "decision": {
      "title": "ハクトウワシのある日",
      "body": "北米の湖畔で過ごす一日。高木に大きな巣を作る。成鳥になるまで頭や尾は白くならない。",
      "options": [
        [
          "魚へ足を伸ばす",
          "魚へ足を伸ばす。体を使ったあとは周囲を確かめた。",
          2,
          1
        ],
        [
          "高木から湖面を見る",
          "高木から湖面を見る。その場所でしばらく過ごした。",
          1,
          2
        ]
      ]
    },
    "ending": "ハクトウワシとして、北米の湖畔で日々を重ねた。古い巣に枝を足し、湖を見下ろした。この一羽の一生は、そこで静かに終わった。",
    "quote": "北米の湖畔で聞いた声を、私の体は覚えていた。",
    "ecology": {
      "diet": "魚が中心で、水鳥・哺乳類・死肉なども利用する。",
      "behavior": "高木に大きな巣を作る。成鳥になるまで頭や尾は白くならない。",
      "refLinks": [
        {
          "title": "ミシガン大学 Animal Diversity Web — Haliaeetus leucocephalus",
          "url": "https://animaldiversity.org/accounts/Haliaeetus_leucocephalus/"
        }
      ]
    },
    "bodyType": "raptor"
  },
  {
    "id": "bio-other-1",
    "species": "ガラパゴスゾウガメ",
    "scientificName": "Chelonoidis porteri",
    "group": "爬虫類",
    "bodyType": "turtle",
    "weight": 1,
    "unit": "歳",
    "span": 105,
    "color": "#9d9975",
    "habitat": "サンタクルス島西部の草地",
    "place": "サンタクルス島西部の草地",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "地中の巣で卵の殻を割りました。土をかき分けた先に、ガラパゴスの光がありました。",
    "events": [
      "草の陰で、細い葉を一口ずつかじった。",
      "葉の縁をかじり、草地を少しずつ歩いた。",
      "雨のあと、草の青い場所へ移った。",
      "甲羅に日が当たり、歩く足が温まった。",
      "長く踏まれた道を、今日もゆっくり進んだ。"
    ],
    "eventAges": [
      2.1,
      8.4,
      18.9,
      39.9,
      68.25
    ],
    "decision": {
      "title": "暑い草地",
      "body": "サンタクルス島西部の草地で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "草の茂った場所へ進む",
          "草の茂った場所へ進む。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "木陰で休む",
          "木陰で休む。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ガラパゴスゾウガメだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "草や低木の葉などの植物。",
      "behavior": "サンタクルス島西部の種。日なたで体を温め、植生を求めて歩く。旧来の広義ガラパゴスゾウガメの記述も参考。",
      "refLinks": [
        {
          "title": "生態資料：ガラパゴスゾウガメ",
          "url": "https://www.darwinfoundation.org/en/news/all-news-stories/galapagos-giant-tortoises-shells/"
        },
        {
          "title": "ガラパゴスゾウガメ類の食性（旧分類）",
          "url": "https://animaldiversity.org/accounts/Chelonoidis_nigra/"
        }
      ]
    }
  },
  {
    "id": "bio-other-2",
    "species": "アオウミガメ",
    "scientificName": "Chelonia mydas",
    "group": "爬虫類",
    "bodyType": "turtle",
    "weight": 1,
    "unit": "歳",
    "span": 67,
    "color": "#b1a28f",
    "habitat": "暖かい海の海草場",
    "place": "暖かい海の海草場",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "砂の下の卵からかえりました。きょうだいたちと砂をかき分け、浜から海へ向かいます。",
    "events": [
      "小さな前脚で波をかき、砂浜から離れた。",
      "海面近くで小さな餌を口にした。",
      "浅瀬で海藻をかじる時間が増えた。",
      "海草場へ潜り、息を吸うため水面に戻った。",
      "潮の流れに沿って、次の採食場所へ泳いだ。"
    ],
    "eventAges": [
      1.34,
      5.36,
      12.06,
      25.46,
      43.55
    ],
    "decision": {
      "title": "海草場の波",
      "body": "暖かい海の海草場で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "海草を食べ続ける",
          "海草を食べ続ける。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "息継ぎのため浮上する",
          "息継ぎのため浮上する。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アオウミガメだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼体は小さな無脊椎動物なども食べ、成長後は海草や海藻を多く食べる。",
      "behavior": "砂浜でふ化し海へ向かう。成長段階で食性や利用する海域が変わる。",
      "refLinks": [
        {
          "title": "生態資料：アオウミガメ",
          "url": "https://animaldiversity.org/accounts/Chelonia_mydas/"
        }
      ]
    }
  },
  {
    "id": "bio-other-3",
    "species": "アカウミガメ",
    "scientificName": "Caretta caretta",
    "group": "爬虫類",
    "bodyType": "turtle",
    "weight": 1,
    "unit": "歳",
    "span": 62,
    "color": "#93aaa1",
    "habitat": "外洋と沿岸の海",
    "place": "外洋と沿岸の海",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "砂浜の巣の中で卵からかえりました。砂を押し上げた先に、波の音がありました。",
    "events": [
      "浅い波を越え、流れ藻のある海へ進んだ。",
      "流れ藻のそばで小さな生き物を食べた。",
      "大きくなったあごで貝をかみ砕いた。",
      "海底を探ったあと、空気を吸いに浮上した。",
      "沿岸を離れ、潮の先へ長く泳いだ。"
    ],
    "eventAges": [
      1.24,
      4.96,
      11.16,
      23.56,
      40.3
    ],
    "decision": {
      "title": "海底の隙間",
      "body": "外洋と沿岸の海で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "貝を探る",
          "貝を探る。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "広い砂地へ泳ぐ",
          "広い砂地へ泳ぐ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アカウミガメだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "貝類、甲殻類など。強いあごで硬い餌も食べる雑食性。",
      "behavior": "幼体は流れ藻のある海域を利用し、成長すると沿岸の底でも採食する。",
      "refLinks": [
        {
          "title": "生態資料：アカウミガメ",
          "url": "https://animaldiversity.org/accounts/Caretta_caretta/"
        }
      ]
    }
  },
  {
    "id": "bio-other-4",
    "species": "グリーンイグアナ",
    "scientificName": "Iguana iguana",
    "group": "爬虫類",
    "bodyType": "lizard",
    "weight": 1,
    "unit": "歳",
    "span": 17,
    "color": "#adb7c1",
    "habitat": "熱帯の川沿いの林",
    "place": "熱帯の川沿いの林",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "地面に掘られた巣で卵からかえりました。まだ小さな体で、地上の明るい方へ向かいました。",
    "events": [
      "低い枝をつかみ、葉をかじった。",
      "柔らかな葉を小さくかみ切った。",
      "朝の枝で、背中を太陽へ向けた。",
      "近づく影を避け、川へ飛び込んで泳いだ。",
      "太い枝の上で、木の葉が揺れるのを見ていた。"
    ],
    "eventAges": [
      0.34,
      1.36,
      3.06,
      6.46,
      11.05
    ],
    "decision": {
      "title": "枝に落ちる影",
      "body": "熱帯の川沿いの林で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "枝の奥へ登る",
          "枝の奥へ登る。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "川へ泳いで逃げる",
          "川へ泳いで逃げる。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "グリーンイグアナだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "主に葉や熟した果実などの植物。",
      "behavior": "樹上で生活し、日光を浴びて体温を調節する。泳ぐことも得意。",
      "refLinks": [
        {
          "title": "生態資料：グリーンイグアナ",
          "url": "https://animaldiversity.org/accounts/Iguana_iguana/"
        }
      ]
    }
  },
  {
    "id": "bio-other-5",
    "species": "コモドオオトカゲ",
    "scientificName": "Varanus komodoensis",
    "group": "爬虫類",
    "bodyType": "lizard",
    "weight": 1,
    "unit": "歳",
    "span": 29,
    "color": "#9d9975",
    "habitat": "インドネシアの乾いた林",
    "place": "インドネシアの乾いた林",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "巣の中で卵からかえりました。大きな個体とは距離を取り、小さな体で木に登る暮らしが始まります。",
    "events": [
      "細い枝に登り、地上の大きな影を避けた。",
      "木の上で昆虫を捕らえた。",
      "舌を出し入れし、地面に残る匂いを探った。",
      "大きく育ち、地上で動物の死骸を食べた。",
      "日陰で休み、涼しくなるとまた歩き出した。"
    ],
    "eventAges": [
      0.58,
      2.32,
      5.22,
      11.02,
      18.85
    ],
    "decision": {
      "title": "林を渡る匂い",
      "body": "インドネシアの乾いた林で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "舌で匂いを追う",
          "舌で匂いを追う。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "日陰へ移る",
          "日陰へ移る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "コモドオオトカゲだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼体は昆虫や小型の脊椎動物、成体はシカなどの動物や死肉。",
      "behavior": "幼体は木を利用する。舌で化学的な手がかりを集め、餌を探す。",
      "refLinks": [
        {
          "title": "生態資料：コモドオオトカゲ",
          "url": "https://animaldiversity.org/accounts/Varanus_komodoensis/"
        }
      ]
    }
  },
  {
    "id": "bio-other-6",
    "species": "アメリカアリゲーター",
    "scientificName": "Alligator mississippiensis",
    "group": "爬虫類",
    "bodyType": "crocodile",
    "weight": 1,
    "unit": "歳",
    "span": 48,
    "color": "#b1a28f",
    "habitat": "米国南東部の湿地",
    "place": "米国南東部の湿地",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "植物の積もった巣で殻を割りました。水辺の暮らしが、まだ小さな体の先にありました。",
    "events": [
      "浅い水で、小さな虫にあごを向けた。",
      "浅い水で昆虫を捕らえた。",
      "水面から目を出し、小魚の動きを待った。",
      "岸に上がって背中を温めた。",
      "大きな体を水草の間に沈め、湿地で暮らした。"
    ],
    "eventAges": [
      0.96,
      3.84,
      8.64,
      18.24,
      31.2
    ],
    "decision": {
      "title": "湿地の水面",
      "body": "米国南東部の湿地で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "浅瀬で魚を待つ",
          "浅瀬で魚を待つ。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "岸で体を温める",
          "岸で体を温める。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アメリカアリゲーターだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼体は昆虫や小魚、成長後は魚、カメ、鳥や哺乳類など。",
      "behavior": "水と陸を利用する。成長に伴って捕らえられる餌が大きくなる。",
      "refLinks": [
        {
          "title": "生態資料：アメリカアリゲーター",
          "url": "https://animaldiversity.org/accounts/Alligator_mississippiensis/"
        }
      ]
    }
  },
  {
    "id": "bio-other-7",
    "species": "ナイルワニ",
    "scientificName": "Crocodylus niloticus",
    "group": "爬虫類",
    "bodyType": "crocodile",
    "weight": 1,
    "unit": "歳",
    "span": 57,
    "color": "#93aaa1",
    "habitat": "アフリカの川岸",
    "place": "アフリカの川岸",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "川岸の巣で卵からかえりました。水に入る前の地面にも、知らない気配がありました。",
    "events": [
      "岸の浅い水に潜り、小さな昆虫を追った。",
      "小さな昆虫を水面で捕らえた。",
      "あごの届く場所を魚が通るまで待った。",
      "午前の砂地で背中を温めた。",
      "暑くなると水へ戻り、目だけを外へ出した。"
    ],
    "eventAges": [
      1.14,
      4.56,
      10.26,
      21.66,
      37.05
    ],
    "decision": {
      "title": "川岸の昼",
      "body": "アフリカの川岸で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "砂地で日を浴びる",
          "砂地で日を浴びる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "水中へ戻る",
          "水中へ戻る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ナイルワニだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼体は昆虫や小動物、成体は魚を中心に鳥や哺乳類など。",
      "behavior": "日なたと水中を行き来して体温を調節し、水際で待ち伏せする。",
      "refLinks": [
        {
          "title": "生態資料：ナイルワニ",
          "url": "https://ielc.libguides.com/sdzg/factsheets/nile_crocodile/diet"
        },
        {
          "title": "San Diego Zoo：行動",
          "url": "https://ielc.libguides.com/sdzg/factsheets/nile_crocodile/behavior"
        }
      ]
    }
  },
  {
    "id": "bio-other-8",
    "species": "ボールパイソン",
    "scientificName": "Python regius",
    "group": "爬虫類",
    "bodyType": "snake",
    "weight": 1,
    "unit": "歳",
    "span": 24,
    "color": "#adb7c1",
    "habitat": "西アフリカの草地の隠れ穴",
    "place": "西アフリカの草地の隠れ穴",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "卵の殻を破り、体を伸ばしました。草原の隠れ場所を使う、小さなヘビの暮らしが始まりました。",
    "events": [
      "体を長く伸ばし、暗い隙間へ滑り込んだ。",
      "ネズミの気配を舌で探った。",
      "獲物を捕らえ、締めつけてから飲み込んだ。",
      "古い皮を脱ぎ、岩の陰へ戻った。",
      "近づく振動に、頭を包むように丸くなった。"
    ],
    "eventAges": [
      0.48,
      1.92,
      4.32,
      9.12,
      15.6
    ],
    "decision": {
      "title": "穴の外の気配",
      "body": "西アフリカの草地の隠れ穴で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "体を丸める",
          "体を丸める。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "隙間の奥へ入る",
          "隙間の奥へ入る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ボールパイソンだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "主にネズミ類。頻繁に食べる動物ではない。",
      "behavior": "隠れ場所を使い、獲物を待ち伏せする。危険を感じると体を丸める。",
      "refLinks": [
        {
          "title": "生態資料：ボールパイソン",
          "url": "https://animaldiversity.org/accounts/Python_regius/"
        }
      ]
    }
  },
  {
    "id": "bio-other-9",
    "species": "ニホンアマガエル",
    "scientificName": "Dryophytes japonicus",
    "group": "両生類",
    "bodyType": "frog",
    "weight": 1,
    "unit": "歳",
    "span": 5,
    "color": "#9d9975",
    "habitat": "田んぼと周囲の草むら",
    "place": "田んぼと周囲の草むら",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "水の中の卵からかえりました。まだ脚のないオタマジャクシとして、水辺の時間を生き始めました。",
    "events": [
      "オタマジャクシの尾で水をかき、池の底を泳いだ。",
      "脚が生え、尾が短くなって畦へ上がった。",
      "小さなガの幼虫を捕らえた。",
      "茶色い枝で体の色が変わった。",
      "雨に濡れた葉の上へ、指先で登った。"
    ],
    "eventAges": [
      0.01,
      0.15,
      0.3,
      1,
      2.5
    ],
    "decision": {
      "title": "葉を揺らす風",
      "body": "田んぼと周囲の草むらで、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "葉裏につかまる",
          "葉裏につかまる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "隣の茎へ跳ぶ",
          "隣の茎へ跳ぶ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ニホンアマガエルだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "成体はクモや昆虫など。幼生期と成体では食べ物も暮らす場所も異なる。",
      "behavior": "水中のオタマジャクシから変態する。体色を変え、指先で植物につかまる。",
      "refLinks": [
        {
          "title": "生態資料：ニホンアマガエル",
          "url": "https://www.nara-edu.ac.jp/cnee/NUE-KINDER-INSECT-GUIDE/web-content/musipage/nihonamagaeru.html"
        }
      ]
    }
  },
  {
    "id": "bio-other-10",
    "species": "アカハライモリ",
    "scientificName": "Cynops pyrrhogaster",
    "group": "両生類",
    "bodyType": "frog",
    "weight": 1,
    "unit": "歳",
    "span": 14,
    "color": "#b1a28f",
    "habitat": "里山の池と周囲の林",
    "place": "里山の池と周囲の林",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "水草に包まれた卵からかえりました。外鰓を持つ幼生として、水の中を動き始めました。",
    "events": [
      "外鰓を揺らし、小さな餌に近づいた。",
      "脚が育ち、水底の小さな生き物を食べた。",
      "変態し、池のそばの湿った林へ上がった。",
      "育った体で池へ戻り、水生昆虫を飲み込んだ。",
      "赤い腹を隠し、水草の根元で休んだ。"
    ],
    "eventAges": [
      0.02,
      0.12,
      0.3,
      3,
      8
    ],
    "decision": {
      "title": "池の明るい場所",
      "body": "里山の池と周囲の林で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "水草の陰へ潜る",
          "水草の陰へ潜る。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "水底で虫を探す",
          "水底で虫を探す。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アカハライモリだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "水生昆虫やオタマジャクシなどの小動物。",
      "behavior": "幼生は外鰓で呼吸し、幼体は水辺の林を利用。成体は主に水中で暮らす。",
      "refLinks": [
        {
          "title": "生態資料：アカハライモリ",
          "url": "https://www.tokyo-zoo.net/inokashira/encyclopedia/japanese-newt/index.html"
        }
      ]
    }
  },
  {
    "id": "bio-other-11",
    "species": "ジンベエザメ",
    "scientificName": "Rhincodon typus",
    "group": "魚類",
    "bodyType": "shark",
    "weight": 1,
    "unit": "歳",
    "span": 68,
    "color": "#93aaa1",
    "habitat": "熱帯の外洋",
    "place": "熱帯の外洋",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "母親の体の中で卵からかえり、海へ生まれ出ました。小さな体で、海水に浮かぶ餌を探し始めます。",
    "events": [
      "斑点のある小さな背で、海の流れを横切った。",
      "海水と一緒に小さな餌を取り込んだ。",
      "斑点のある背を光に照らされ、海面近くを進んだ。",
      "餌の集まる水面で大きな口を開けた。",
      "流れの異なる海域へ、長い距離を移動した。"
    ],
    "eventAges": [
      1.36,
      5.44,
      12.24,
      25.84,
      44.2
    ],
    "decision": {
      "title": "餌の集まる海面",
      "body": "熱帯の外洋で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "海面で口を開ける",
          "海面で口を開ける。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "流れに沿って泳ぐ",
          "流れに沿って泳ぐ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ジンベエザメだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "プランクトンや小魚などを海水からこし取る。",
      "behavior": "海を広く移動する。大きな口で海水を取り込み、餌をろ過して食べる。",
      "refLinks": [
        {
          "title": "生態資料：ジンベエザメ",
          "url": "https://animaldiversity.org/accounts/Rhincodon_typus/"
        }
      ]
    }
  },
  {
    "id": "bio-other-12",
    "species": "ホホジロザメ",
    "scientificName": "Carcharodon carcharias",
    "group": "魚類",
    "bodyType": "shark",
    "weight": 1,
    "unit": "歳",
    "span": 43,
    "color": "#adb7c1",
    "habitat": "温帯の沿岸と外洋",
    "place": "温帯の沿岸と外洋",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "母親の体から海へ生まれ出ました。自分のひれで泳ぐ、小さなホホジロザメの一生が始まりました。",
    "events": [
      "母から離れた海で、小さな魚を探した。",
      "小さな魚を追い、あごで捕らえた。",
      "イカの動く暗い水へ潜った。",
      "大きく育ち、海獣のいる沿岸を巡った。",
      "海面の影を下から見上げ、静かに進んだ。"
    ],
    "eventAges": [
      0.86,
      3.44,
      7.74,
      16.34,
      27.95
    ],
    "decision": {
      "title": "沿岸の匂い",
      "body": "温帯の沿岸と外洋で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "魚の群れを追う",
          "魚の群れを追う。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "沖へ泳ぐ",
          "沖へ泳ぐ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ホホジロザメだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼体は魚やイカなど。大型個体はアザラシなどや死骸も食べる。",
      "behavior": "感覚器を使って獲物を探す大型の捕食者。成長によって食性が変わる。",
      "refLinks": [
        {
          "title": "生態資料：ホホジロザメ",
          "url": "https://animaldiversity.org/accounts/Carcharodon_carcharias/"
        }
      ]
    }
  },
  {
    "id": "bio-other-13",
    "species": "カクレクマノミ",
    "scientificName": "Amphiprion ocellaris",
    "group": "魚類",
    "bodyType": "fish",
    "weight": 1,
    "unit": "歳",
    "span": 10,
    "color": "#9d9975",
    "habitat": "暖かい海のイソギンチャク",
    "place": "暖かい海のイソギンチャク",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "海中の卵からかえりました。イソギンチャクをすみかにする前に、海を漂う幼生の時間があります。",
    "events": [
      "透明な仔魚の体で、海の流れに乗った。",
      "イソギンチャクの触手の間に居場所を得た。",
      "流れてくる小さな餌をついばんだ。",
      "大きな仲間を避け、触手の奥に戻った。",
      "外の魚の影が去り、また水の中へ顔を出した。"
    ],
    "eventAges": [
      0.01,
      0.04,
      0.2,
      1,
      4
    ],
    "decision": {
      "title": "触手の外",
      "body": "暖かい海のイソギンチャクで、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "小さな餌をついばむ",
          "小さな餌をついばむ。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "触手の奥へ戻る",
          "触手の奥へ戻る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "カクレクマノミだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "動物プランクトンや藻類など。",
      "behavior": "イソギンチャクと共生し、群れに順位がある。成長に伴い性が変わりうる。",
      "refLinks": [
        {
          "title": "生態資料：カクレクマノミ",
          "url": "https://animaldiversity.org/accounts/Amphiprion_ocellaris/"
        }
      ]
    }
  },
  {
    "id": "bio-other-14",
    "species": "ナンヨウハギ",
    "scientificName": "Paracanthurus hepatus",
    "group": "魚類",
    "bodyType": "fish",
    "weight": 1,
    "unit": "歳",
    "span": 14,
    "color": "#b1a28f",
    "habitat": "インド太平洋のサンゴ礁",
    "place": "インド太平洋のサンゴ礁",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "海の卵からかえりました。まだ小さな体で、水の流れに運ばれていました。",
    "events": [
      "小さな仔魚として、水中の微細な餌を追った。",
      "サンゴの近くに落ち着き、小さな餌を食べた。",
      "青い体で仲間のそばを泳いだ。",
      "岩についた藻を口にした。",
      "大きな魚が近づき、隙間へ身を滑らせた。"
    ],
    "eventAges": [
      0.28,
      1.12,
      2.52,
      5.32,
      9.1
    ],
    "decision": {
      "title": "サンゴの影",
      "body": "インド太平洋のサンゴ礁で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "隙間に隠れる",
          "隙間に隠れる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "仲間に沿って泳ぐ",
          "仲間に沿って泳ぐ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ナンヨウハギだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "藻類や動物プランクトンなど。",
      "behavior": "サンゴ礁の周りを泳ぎ、危険を感じると岩やサンゴの隙間に隠れる。",
      "refLinks": [
        {
          "title": "生態資料：ナンヨウハギ",
          "url": "https://animaldiversity.org/accounts/Paracanthurus_hepatus/"
        }
      ]
    }
  },
  {
    "id": "bio-other-15",
    "species": "タツノオトシゴ",
    "scientificName": "Hippocampus coronatus",
    "group": "魚類",
    "bodyType": "seahorse",
    "weight": 1,
    "unit": "歳",
    "span": 3,
    "color": "#93aaa1",
    "habitat": "日本沿岸の海藻の茂み",
    "place": "日本沿岸の海藻の茂み",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "父親の育児嚢から海へ放たれました。生まれたばかりでも、自分で小さな餌を探さなければなりません。",
    "events": [
      "小さな背びれを動かし、海藻へ近づいた。",
      "細い尾を海藻に巻きつけた。",
      "近づく小さな甲殻類を吸い込んだ。",
      "波に揺れる茂みで、背びれを細かく動かした。",
      "海藻の陰で、流れが弱まるのを待った。"
    ],
    "eventAges": [
      0.06,
      0.24,
      0.54,
      1.14,
      1.95
    ],
    "decision": {
      "title": "海藻を揺らす波",
      "body": "日本沿岸の海藻の茂みで、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "尾を巻き直す",
          "尾を巻き直す。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "隣の海藻へ移る",
          "隣の海藻へ移る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "タツノオトシゴだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "アミ類などの小型甲殻類。",
      "behavior": "尾を海藻などに巻きつける。雌が雄の育児嚢へ卵を産み、雄が育てて子を放つ。",
      "refLinks": [
        {
          "title": "生態資料：タツノオトシゴ",
          "url": "https://aquarium.co.jp/picturebook/hippocampus-coronatus.html"
        },
        {
          "title": "日本動物園水族館協会：タツノオトシゴ類の飼育研究",
          "url": "https://www.jaza.jp/literatures/438"
        }
      ]
    }
  },
  {
    "id": "bio-other-16",
    "species": "トラフグ",
    "scientificName": "Takifugu rubripes",
    "group": "魚類",
    "bodyType": "fish",
    "weight": 1,
    "unit": "歳",
    "span": 8,
    "color": "#adb7c1",
    "habitat": "日本周辺の沿岸の海",
    "place": "日本周辺の沿岸の海",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "海の底に近い卵からかえりました。まだ小さな魚として、口に入る大きさの餌を探し始めます。",
    "events": [
      "仔魚の体で、小さな海の餌を食べた。",
      "海底の小さな甲殻類を探した。",
      "育った歯で貝の殻をかじった。",
      "沿岸を泳ぎ、岩の陰で休んだ。",
      "突然の影に水を吸い、体を膨らませた。"
    ],
    "eventAges": [
      0.16,
      0.64,
      1.44,
      3.04,
      5.2
    ],
    "decision": {
      "title": "岩場の気配",
      "body": "日本周辺の沿岸の海で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "砂底へ離れる",
          "砂底へ離れる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "岩陰に入る",
          "岩陰に入る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "トラフグだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "甲殻類、貝類、小魚など。",
      "behavior": "強い歯をもつ。刺激を受けると体を膨らませる防御行動をする。",
      "refLinks": [
        {
          "title": "生態資料：トラフグ",
          "url": "https://www.kaikyokan.com/cms/cp_sealife/%E3%83%88%E3%83%A9%E3%83%95%E3%82%B0/"
        },
        {
          "title": "全国海水養魚協会：トラフグの特徴",
          "url": "https://www.yoshoku.or.jp/gyosyu/torafugu/"
        }
      ]
    }
  },
  {
    "id": "bio-other-17",
    "species": "マダコ",
    "scientificName": "Octopus sinensis",
    "group": "軟体動物",
    "bodyType": "octopus",
    "weight": 1,
    "unit": "日",
    "span": 600,
    "color": "#9d9975",
    "habitat": "日本沿岸の岩礁",
    "place": "日本沿岸の岩礁",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "母ダコが守っていた卵からかえりました。小さな体で漂い、成長すると海底の隠れ場所を使うようになります。",
    "events": [
      "小さな腕を動かし、漂う餌に近づいた。",
      "育った体で海底に落ち着き、隠れる穴を探した。",
      "夜の岩場でカニを腕に包んだ。",
      "貝をつかみ、穴の奥へ運んだ。",
      "昼間は岩の割れ目で体を縮めていた。"
    ],
    "eventAges": [
      12.0,
      48.0,
      108.0,
      228.0,
      390.0
    ],
    "decision": {
      "title": "岩穴の外",
      "body": "日本沿岸の岩礁で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "腕で海底を探る",
          "腕で海底を探る。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "穴の奥へ戻る",
          "穴の奥へ戻る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "マダコだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "甲殻類や二枚貝など。",
      "behavior": "日中は岩穴に隠れ、夜に活動する。日本産マダコの学名は Octopus sinensis。",
      "refLinks": [
        {
          "title": "生態資料：マダコ",
          "url": "https://kamo-kurage.jp/shonaizukan/madako/"
        }
      ]
    }
  },
  {
    "id": "bio-other-18",
    "species": "コウイカ",
    "scientificName": "Sepia esculenta",
    "group": "軟体動物",
    "bodyType": "octopus",
    "weight": 1,
    "unit": "日",
    "span": 365,
    "color": "#b1a28f",
    "habitat": "沿岸の砂泥底",
    "place": "沿岸の砂泥底",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "海中に産みつけられた卵からかえりました。小さなひれを動かし、砂のある世界へ泳ぎ出しました。",
    "events": [
      "小さな触腕を伸ばし、餌を捕らえた。",
      "砂の上で小さな甲殻類を捕らえた。",
      "周囲の砂に似た色へ体を変えた。",
      "エビへ近寄り、触腕を一気に伸ばした。",
      "胴のひれを波打たせ、海底近くを進んだ。"
    ],
    "eventAges": [
      7.3,
      29.2,
      65.7,
      138.7,
      237.25
    ],
    "decision": {
      "title": "砂地を動くエビ",
      "body": "沿岸の砂泥底で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "触腕の届く所まで寄る",
          "触腕の届く所まで寄る。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "砂色になって待つ",
          "砂色になって待つ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "コウイカだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "小型甲殻類、ゴカイ、魚など。",
      "behavior": "砂地に体色を似せ、長い2本の触腕で餌を捕らえる。体内に石灰質の甲がある。",
      "refLinks": [
        {
          "title": "生態資料：コウイカ",
          "url": "https://www.knsk-osaka.jp/zukan/zukan_database/osakawanikimono/385c4e95fd0b200/565c4ea367620a3.html"
        }
      ]
    }
  },
  {
    "id": "bio-other-19",
    "species": "アメリカカブトガニ",
    "scientificName": "Limulus polyphemus",
    "group": "剣尾類",
    "bodyType": "woodlouse",
    "weight": 1,
    "unit": "歳",
    "span": 22,
    "color": "#93aaa1",
    "habitat": "北米大西洋岸の砂泥底",
    "place": "北米大西洋岸の砂泥底",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "浜の砂に産まれた卵からかえりました。小さな脚を動かして、浅い海へ向かいました。",
    "events": [
      "砂の上を歩き、小さな餌を探した。",
      "小さな貝や海底の生き物を探した。",
      "脱皮をして、一回り大きな甲を得た。",
      "夜の砂泥底を脚で歩いた。",
      "波が寄せる浅瀬へ、厚い甲を運んだ。"
    ],
    "eventAges": [
      0.44,
      1.76,
      3.96,
      8.36,
      14.3
    ],
    "decision": {
      "title": "浅瀬の砂",
      "body": "北米大西洋岸の砂泥底で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "脚で餌を探す",
          "脚で餌を探す。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "深い側へ歩く",
          "深い側へ歩く。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アメリカカブトガニだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "ゴカイ類や小型の貝など。",
      "behavior": "カニとは異なる鋏角類の仲間。海底を歩き、成長に伴って脱皮する。",
      "refLinks": [
        {
          "title": "生態資料：アメリカカブトガニ",
          "url": "https://animaldiversity.org/accounts/Limulus_polyphemus/"
        }
      ]
    }
  },
  {
    "id": "bio-other-20",
    "species": "ミズクラゲ",
    "scientificName": "Aurelia aurita 種群",
    "group": "刺胞動物",
    "bodyType": "jellyfish",
    "weight": 1,
    "unit": "日",
    "span": 240,
    "color": "#adb7c1",
    "habitat": "入り江を満たす海水",
    "place": "入り江を満たす海水",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "海中のポリプから、エフィラとして離れました。この物語は、ミズクラゲ類の一個体のクラゲ期をたどります。",
    "events": [
      "小さなエフィラの体を動かし、水中の餌を捕らえた。",
      "小さな体の縁で餌を捕らえた。",
      "傘が丸く広がり、ゆっくり脈打った。",
      "触手にかかったプランクトンを口へ運んだ。",
      "流れに運ばれ、入り江の淡い光の下へ来た。"
    ],
    "eventAges": [
      4.8,
      19.2,
      43.2,
      91.2,
      156.0
    ],
    "decision": {
      "title": "入り江の流れ",
      "body": "入り江を満たす海水で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "傘を脈打たせる",
          "傘を脈打たせる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "流れに運ばれる",
          "流れに運ばれる。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ミズクラゲだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "動物プランクトンなど。",
      "behavior": "ポリプとクラゲの世代をもつ。本作はエフィラから始まる1個体のクラゲ期。ミズクラゲ類は複数種を含むため広義の資料を参照。",
      "refLinks": [
        {
          "title": "生態資料：ミズクラゲ",
          "url": "https://animaldiversity.org/accounts/Aurelia_aurita/"
        }
      ]
    }
  },
  {
    "id": "bio-other-21",
    "species": "ナミアゲハ",
    "scientificName": "Papilio xuthus",
    "group": "昆虫",
    "bodyType": "butterfly",
    "weight": 1,
    "unit": "日",
    "span": 95,
    "color": "#9d9975",
    "habitat": "庭のミカンの木と花壇",
    "place": "庭のミカンの木と花壇",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "ミカン科の葉に産みつけられた卵からかえりました。まだ翅のない、小さな幼虫です。",
    "events": [
      "小さな幼虫の体で、ミカンの葉をかじった。",
      "脱皮を重ね、緑色の大きな幼虫になった。",
      "枝で体を固定し、蛹になった。",
      "蛹を割り、柔らかな翅を伸ばした。",
      "花にとまり、口吻を伸ばして蜜を吸った。"
    ],
    "eventAges": [
      1,
      15,
      28,
      40,
      55
    ],
    "decision": {
      "title": "花壇を渡る風",
      "body": "庭のミカンの木と花壇で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "低い花にとまる",
          "低い花にとまる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "木陰で翅を休める",
          "木陰で翅を休める。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ナミアゲハだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫はミカン、ユズ、サンショウなどの葉、成虫は花の蜜。",
      "behavior": "完全変態をする。若い幼虫は鳥のふんに似て、終齢幼虫は緑色になる。",
      "refLinks": [
        {
          "title": "生態資料：ナミアゲハ",
          "url": "https://www.nara-edu.ac.jp/cnee/NUE-KINDER-INSECT-GUIDE/web-content/musipage/namiageha/namiageha.html"
        }
      ]
    },
    "adultAge": 40
  },
  {
    "id": "bio-other-22",
    "species": "オオカバマダラ",
    "scientificName": "Danaus plexippus",
    "group": "昆虫",
    "bodyType": "butterfly",
    "weight": 1,
    "unit": "日",
    "span": 230,
    "color": "#b1a28f",
    "habitat": "北米のトウワタの草原",
    "place": "北米のトウワタの草原",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "トウワタの葉の卵からかえりました。この物語では、後に長い移動をする世代の幼虫として育ちます。",
    "events": [
      "若い幼虫の体で、トウワタの葉をかじった。",
      "縞模様の体が育ち、何度も脱皮した。",
      "蛹になり、葉の下で静かに過ごした。",
      "橙色と黒の翅を広げ、花で蜜を吸った。",
      "気流に乗り、越冬地へ向かう移動を続けた。"
    ],
    "eventAges": [
      1,
      10,
      18,
      30,
      110
    ],
    "decision": {
      "title": "移動途中の花",
      "body": "北米のトウワタの草原で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "蜜を吸って休む",
          "蜜を吸って休む。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "追い風で先へ進む",
          "追い風で先へ進む。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "オオカバマダラだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫はトウワタ類の葉、成虫は花の蜜。",
      "behavior": "完全変態をし、北米には長距離移動と集団越冬をする世代がある。本作は移動世代の創作。",
      "refLinks": [
        {
          "title": "生態資料：オオカバマダラ",
          "url": "https://animaldiversity.org/accounts/Danaus_plexippus/"
        }
      ]
    },
    "adultAge": 30
  },
  {
    "id": "bio-other-23",
    "species": "カブトムシ",
    "scientificName": "Trypoxylus dichotomus",
    "group": "昆虫",
    "bodyType": "beetle",
    "weight": 1,
    "unit": "日",
    "span": 450,
    "color": "#93aaa1",
    "habitat": "里山の腐葉土と雑木林",
    "place": "里山の腐葉土と雑木林",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "土の中の卵からかえりました。白い幼虫として、腐葉土の中を食べ進む暮らしが始まります。",
    "events": [
      "白い幼虫の体で、腐葉土を食べ進んだ。",
      "落ち葉の下へ深くもぐり、冬を越した。",
      "土で蛹室を作り、蛹になった。",
      "羽化した体が固まり、地上へ出た。",
      "夜の木に登り、樹液をなめた。"
    ],
    "eventAges": [
      1,
      100,
      260,
      300,
      320
    ],
    "decision": {
      "title": "落ち葉の下の気配",
      "body": "まわりの気配が変わった。体の届く小さな範囲で、次の時間を過ごす。",
      "options": [
        [
          "湿った場所へ移る",
          "湿った場所へ移る。ゆっくり時間が過ぎた。",
          2,
          0
        ],
        [
          "暗い場所にとどまる",
          "暗い場所にとどまる。周りはまた静かになった。",
          1,
          0
        ]
      ]
    },
    "ending": "カブトムシだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫は腐葉土、成虫は樹液や熟した果実の汁。",
      "behavior": "幼虫で冬を越し、蛹を経て成虫になる。成虫は主に夜活動する。",
      "refLinks": [
        {
          "title": "生態資料：カブトムシ",
          "url": "https://www.tokyo-zoo.net/tama/encyclopedia/japanese-rhinoceros-beetle/index.html"
        }
      ]
    },
    "adultAge": 300
  },
  {
    "id": "bio-other-24",
    "species": "オオクワガタ",
    "scientificName": "Dorcus hopei",
    "group": "昆虫",
    "bodyType": "beetle",
    "weight": 1,
    "unit": "日",
    "span": 2200,
    "color": "#adb7c1",
    "habitat": "里山の朽ち木とクヌギ",
    "place": "里山の朽ち木とクヌギ",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "朽ち木に産まれた卵からかえりました。大きなあごと翅を持つ前に、木の中で育つ時間があります。",
    "events": [
      "白い幼虫の体で、朽ち木を削るように食べた。",
      "木の中のトンネルで、冬を越した。",
      "木の中に部屋を作り、蛹になった。",
      "羽化して黒い体が固まるのを待った。",
      "夜のクヌギで樹液をなめ、洞へ戻った。"
    ],
    "eventAges": [
      1,
      200,
      900,
      960,
      1100
    ],
    "decision": {
      "title": "木の奥の気配",
      "body": "まわりの気配が変わった。体の届く小さな範囲で、次の時間を過ごす。",
      "options": [
        [
          "暗い隙間にとどまる",
          "暗い隙間にとどまる。ゆっくり時間が過ぎた。",
          2,
          0
        ],
        [
          "少しだけ奥へ進む",
          "少しだけ奥へ進む。周りはまた静かになった。",
          1,
          0
        ]
      ]
    },
    "ending": "オオクワガタだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫は朽ち木、成虫は樹液。",
      "behavior": "朽ち木の中で幼虫期を過ごし、蛹を経て成虫になる。成虫は樹洞を利用し越冬もする。",
      "refLinks": [
        {
          "title": "生態資料：オオクワガタ",
          "url": "https://www.bunka.pref.mie.lg.jp/rekishi/kenshi/asp/shijyo/detail639.html"
        }
      ]
    },
    "adultAge": 960
  },
  {
    "id": "bio-other-25",
    "species": "ナナホシテントウ",
    "scientificName": "Coccinella septempunctata",
    "group": "昆虫",
    "bodyType": "beetle",
    "weight": 1,
    "unit": "日",
    "span": 400,
    "color": "#9d9975",
    "habitat": "畑の葉の裏と草地",
    "place": "畑の葉の裏と草地",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "葉の上の卵からかえりました。赤い丸い体になる前に、細長い幼虫としてアブラムシを探します。",
    "events": [
      "葉を歩き、近くのアブラムシを捕らえた。",
      "脱皮を重ね、次の葉へ餌を探しに行った。",
      "葉に体を固定し、蛹になった。",
      "羽化して、赤い翅に黒い斑点が現れた。",
      "寒くなると、草の根元へ仲間と集まった。"
    ],
    "eventAges": [
      1,
      12,
      24,
      35,
      200
    ],
    "decision": {
      "title": "葉についた餌",
      "body": "畑の葉の裏と草地で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "アブラムシを追う",
          "アブラムシを追う。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "葉裏に隠れる",
          "葉裏に隠れる。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ナナホシテントウだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫・成虫とも主にアブラムシ。成虫は花粉も利用する。",
      "behavior": "完全変態をする。成虫は集まって越冬することがある。",
      "refLinks": [
        {
          "title": "生態資料：ナナホシテントウ",
          "url": "https://animaldiversity.org/accounts/Coccinella_septempunctata/"
        }
      ]
    },
    "adultAge": 35
  },
  {
    "id": "bio-other-26",
    "species": "オオカマキリ",
    "scientificName": "Tenodera aridifolia",
    "group": "昆虫",
    "bodyType": "mantis",
    "weight": 1,
    "unit": "日",
    "span": 210,
    "color": "#b1a28f",
    "habitat": "背の高い草むら",
    "place": "背の高い草むら",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "卵のうから小さな体で出てきました。成虫に似ていますが、まだ飛べる翅はありません。",
    "events": [
      "小さな前脚を構え、自分より小さな虫を待った。",
      "小さな虫を前脚ではさんだ。",
      "草につかまり、脱皮で体が大きくなった。",
      "最後の脱皮で翅が伸びた。",
      "草の間で身を揺らし、獲物の来るのを待った。"
    ],
    "eventAges": [
      1,
      15,
      40,
      100,
      140
    ],
    "decision": {
      "title": "草を動く虫",
      "body": "背の高い草むらで、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "前脚を構えて待つ",
          "前脚を構えて待つ。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "茎の陰へ移る",
          "茎の陰へ移る。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "オオカマキリだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "昆虫やクモなどの小動物。",
      "behavior": "幼虫から脱皮を重ねる不完全変態。前脚で動く獲物を捕らえる。",
      "refLinks": [
        {
          "title": "生態資料：オオカマキリ",
          "url": "https://animaldiversity.org/accounts/Tenodera_aridifolia/"
        }
      ]
    },
    "adultAge": 100
  },
  {
    "id": "bio-other-27",
    "species": "トノサマバッタ",
    "scientificName": "Locusta migratoria",
    "group": "昆虫",
    "bodyType": "mantis",
    "weight": 1,
    "unit": "日",
    "span": 200,
    "color": "#93aaa1",
    "habitat": "川原のイネ科の草地",
    "place": "川原のイネ科の草地",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "土の中の卵からかえりました。小さな脚で草むらに出て、幼虫として草を食べ始めます。",
    "events": [
      "まだ翅のない体で草を登り、葉を食べた。",
      "柔らかな草の葉をかじった。",
      "脱皮をして、後脚がより大きくなった。",
      "成虫になり、長い翅を広げた。",
      "草むらの上を飛び、離れた場所へ降りた。"
    ],
    "eventAges": [
      1,
      12,
      30,
      65,
      120
    ],
    "decision": {
      "title": "草地を吹く風",
      "body": "川原のイネ科の草地で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "草をかじる",
          "草をかじる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "遠くの草へ跳ぶ",
          "遠くの草へ跳ぶ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "トノサマバッタだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "イネ科などの草。",
      "behavior": "不完全変態をし、幼虫は跳ねて移動、成虫になると翅で飛ぶ。",
      "refLinks": [
        {
          "title": "生態資料：トノサマバッタ",
          "url": "https://www.hirosaki-u.ac.jp/wp-content/uploads/2022/06/R4_0628_pressdate.pdf"
        }
      ]
    },
    "adultAge": 65
  },
  {
    "id": "bio-other-28",
    "species": "セイヨウミツバチ",
    "scientificName": "Apis mellifera",
    "group": "昆虫",
    "bodyType": "bee",
    "weight": 1,
    "unit": "日",
    "span": 75,
    "color": "#adb7c1",
    "habitat": "養蜂場の巣箱と花畑",
    "place": "養蜂場の巣箱と花畑",
    "care": "養蜂家が巣箱を管理",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "巣房の中で卵からかえりました。雌の働き蜂になる幼虫として、仲間から餌を受け取ります。",
    "events": [
      "巣房で体を曲げ、働き蜂から餌を受け取った。",
      "蓋をされた巣房で蛹になった。",
      "羽化し、巣房を掃除した。",
      "幼虫の世話や巣の仕事をした。",
      "花へ飛び、花粉と蜜を集めて巣へ戻った。"
    ],
    "eventAges": [
      1,
      7,
      19,
      27,
      45
    ],
    "decision": {
      "title": "花畑の帰り道",
      "body": "養蜂場の巣箱と花畑で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "巣へ蜜を運ぶ",
          "巣へ蜜を運ぶ。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "近くの花でも蜜を集める",
          "近くの花でも蜜を集める。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "セイヨウミツバチだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "花蜜、花粉、蜂蜜。幼虫は働き蜂から餌を受け取る。",
      "behavior": "本作は雌の働き蜂。幼虫・蛹を経て羽化し、巣内作業から採餌へ役割が変わる。",
      "refLinks": [
        {
          "title": "生態資料：セイヨウミツバチ",
          "url": "https://animaldiversity.org/accounts/Apis_mellifera/"
        }
      ]
    },
    "adultAge": 19
  },
  {
    "id": "bio-other-29",
    "species": "カイコ",
    "scientificName": "Bombyx mori",
    "group": "昆虫",
    "bodyType": "butterfly",
    "weight": 1,
    "unit": "日",
    "span": 65,
    "color": "#9d9975",
    "habitat": "学校の飼育箱",
    "place": "学校の飼育箱",
    "care": "学校で桑の葉をもらう",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "人が管理する卵からかえりました。まだ翅はなく、幼虫として桑の葉を食べて育ちます。",
    "events": [
      "小さな幼虫として、桑の葉の縁をかじった。",
      "脱皮を重ね、白い体が大きくなった。",
      "細い糸を吐いて、自分を繭で包んだ。",
      "繭の中で蛹になり、体の形が変わった。",
      "繭を出て蛾になった。餌を食べず、飼育箱で翅を動かした。"
    ],
    "eventAges": [
      1,
      12,
      28,
      32,
      46
    ],
    "decision": {
      "title": "飼育箱の静かな時間",
      "body": "まわりの気配が変わった。体の届く小さな範囲で、次の時間を過ごす。",
      "options": [
        [
          "静かにとどまる",
          "静かにとどまる。ゆっくり時間が過ぎた。",
          2,
          0
        ],
        [
          "わずかに体を動かす",
          "わずかに体を動かす。周りはまた静かになった。",
          1,
          0
        ]
      ]
    },
    "ending": "カイコだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫は桑の葉や専用の人工飼料。成虫は餌を食べない。",
      "behavior": "完全に家畜化された昆虫。繭の中で蛹になり、成虫は飛べず、人の世話を必要とする。",
      "refLinks": [
        {
          "title": "生態資料：カイコ",
          "url": "https://www.agr.kyushu-u.ac.jp/lab/kasan/wordpress/research/mainresearch/mainresearch1/"
        }
      ]
    },
    "adultAge": 46
  },
  {
    "id": "bio-other-30",
    "species": "アブラゼミ",
    "scientificName": "Graptopsaltria nigrofuscata",
    "group": "昆虫",
    "bodyType": "cicada",
    "weight": 1,
    "unit": "日",
    "span": 2600,
    "color": "#b1a28f",
    "habitat": "公園の木の根と幹",
    "place": "公園の木の根と幹",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "木の枝に産みつけられた卵からかえり、地面へ下りました。幼虫として土に潜る、長い時間が始まります。",
    "events": [
      "幼虫の脚で土を掘り、木の根へ近づいた。",
      "暗い土の中で根に口を刺し、汁を吸った。",
      "脱皮を重ね、根のまわりで何度も季節を越した。",
      "まだ幼虫のまま、地中で次の夏を待った。",
      "数年分の土をかき分けながら、太い根のそばで育った。"
    ],
    "eventAges": [
      1,
      90,
      500,
      1100,
      1700
    ],
    "decision": {
      "title": "地中の根",
      "body": "公園の木の根と幹で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "根のそばにとどまる",
          "根のそばにとどまる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "湿った土へ掘り進む",
          "湿った土へ掘り進む。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "アブラゼミだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "幼虫は根から、成虫は幹や枝から樹液を吸う。",
      "behavior": "不完全変態。幼虫は数年間地中で暮らし、最後の脱皮のため地上へ出る。",
      "refLinks": [
        {
          "title": "生態資料：アブラゼミ",
          "url": "https://www.nara-edu.ac.jp/cnee/NUE-KINDER-INSECT-GUIDE/web-content/musipage/aburazemi.html"
        }
      ]
    },
    "lateEvents": [
      {
        "age": 2500,
        "text": "夏の夕方、地上へ出て幹を登り、最後の脱皮で翅を伸ばした。"
      },
      {
        "age": 2505,
        "text": "成虫として幹から樹液を吸った。長かった地中の時間の先に、空があった。"
      }
    ],
    "adultAge": 2500
  },
  {
    "id": "bio-other-31",
    "species": "ジョロウグモ",
    "scientificName": "Trichonephila clavata",
    "group": "クモ類",
    "bodyType": "spider",
    "weight": 1,
    "unit": "日",
    "span": 210,
    "color": "#93aaa1",
    "habitat": "庭木の枝の間",
    "place": "庭木の枝の間",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "卵のうからかえり、きょうだいたちの小さな集まりの中にいました。この物語では、雌として育ちます。",
    "events": [
      "細い糸を枝へ渡し、最初の小さな網を張った。",
      "細い網にかかった虫を食べた。",
      "脱皮をして、脚も網も大きくなった。",
      "金色に光る糸を枝の間へ渡した。",
      "秋の大きな網の端に、小さな雄が現れた。"
    ],
    "eventAges": [
      1,
      20,
      50,
      90,
      140
    ],
    "decision": {
      "title": "網を揺らす振動",
      "body": "庭木の枝の間で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "糸の振動を確かめる",
          "糸の振動を確かめる。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "網の端で待つ",
          "網の端で待つ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "ジョロウグモだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "網にかかった昆虫。",
      "behavior": "本作は雌。網を張り、脱皮して成長する。雄は小さく、雌の網を利用する。",
      "refLinks": [
        {
          "title": "生態資料：ジョロウグモ",
          "url": "https://www.nara-edu.ac.jp/cnee/NUE-KINDER-INSECT-GUIDE/web-content/musipage/zyorouumo.html"
        }
      ]
    }
  },
  {
    "id": "bio-other-32",
    "species": "オカダンゴムシ",
    "scientificName": "Armadillidium vulgare",
    "group": "甲殻類",
    "bodyType": "woodlouse",
    "weight": 1,
    "unit": "歳",
    "span": 3,
    "color": "#adb7c1",
    "habitat": "庭の湿った落ち葉の下",
    "place": "庭の湿った落ち葉の下",
    "care": "人の管理なし",
    "health": 73,
    "safety": 49,
    "bond": 30,
    "food": 67,
    "opening": "母親の育房で育ち、小さな体で外へ出ました。落ち葉の下の湿った世界が、最初の居場所になりました。",
    "events": [
      "湿った落ち葉の下へ歩き、柔らかい部分をかじった。",
      "湿った落ち葉の端を少しずつ食べた。",
      "脱皮をして、灰色の殻が大きくなった。",
      "乾いた地面を避け、植木鉢の陰へ潜った。",
      "触れた振動に驚き、体を丸く閉じた。"
    ],
    "eventAges": [
      0.06,
      0.24,
      0.54,
      1.14,
      1.95
    ],
    "decision": {
      "title": "落ち葉の乾き",
      "body": "庭の湿った落ち葉の下で、次の動きを選ぶ短い時間が訪れた。",
      "options": [
        [
          "湿った葉の下へ行く",
          "湿った葉の下へ行く。その場所で、しばらく暮らしを続けた。",
          2,
          0
        ],
        [
          "体を丸めて待つ",
          "体を丸めて待つ。体を休め、周囲の気配を確かめた。",
          1,
          0
        ]
      ]
    },
    "ending": "オカダンゴムシだったあなたの体が、静かに動きを止めた。そこにあった小さな生活の時間も、確かにこの世界の一部だった。",
    "quote": "誰も見ていなかった時間にも、暮らしはあった。",
    "ecology": {
      "diet": "主に腐りかけた落ち葉など。",
      "behavior": "陸上性の甲殻類。湿った場所を好み、危険を感じると丸くなる。脱皮は体の前後で分かれる。",
      "refLinks": [
        {
          "title": "生態資料：オカダンゴムシ",
          "url": "https://animaldiversity.org/accounts/Armadillidium_vulgare/"
        }
      ]
    }
  }
];
// Unlisted records remain available only to finish previously saved lives.
const FEATURED_SPECIES = new Set(["ライオン", "アムールトラ", "ジャイアントパンダ", "レッサーパンダ", "カピバラ", "ユーラシアカワウソ", "コウテイペンギン", "フラミンゴ", "アオウミガメ", "ナミアゲハ", "チーター", "ホッキョクグマ", "コアラ", "ミーアキャット", "ラッコ", "ニホンジカ", "フンボルトペンギン", "ハシビロコウ", "カワセミ", "セキセイインコ", "ガラパゴスゾウガメ", "ニホンアマガエル", "ジンベエザメ", "カクレクマノミ", "マダコ", "ミズクラゲ", "カブトムシ", "セイヨウミツバチ"]);
ANIMALS.push(...BIODIVERSITY.filter(a=>FEATURED_SPECIES.has(a.species)));
