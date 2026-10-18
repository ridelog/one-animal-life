/* Original small pixel illustrations, in the existing scene format. */
function drawBiodiversityScene(canvas,a,elapsed=Infinity){
 const g=canvas.getContext('2d');g.imageSmoothingEnabled=false;
 const r=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))};
 const originalType=a.bodyType;const juvenile=Number.isFinite(a.adultAge)&&elapsed<a.adultAge;const type=juvenile?(['butterfly','beetle','bee'].includes(originalType)?'larva':'nymph'):originalType,col=a.color||'#a48c6b',dark='#37443d',light='#e0ddcb';
 const sea=['fish','shark','seahorse','octopus','jellyfish'].includes(type)||/海|水族館|水槽|沿岸|サンゴ/.test(a.habitat);
 const pond=!sea&&['frog','crocodile','turtle','otter','flamingo'].includes(type)&&/水|池|川|河|湿地/.test(a.habitat);
 const ice=type==='penguin'&&/コウテイ|ジェンツー/.test(a.species)||a.species==='ホッキョクグマ';
 const indoor=/家|ケージ|鳥かご|飼育室/.test(a.habitat);
 r(0,0,750,250,sea?'#91b9c4':ice?'#c9dce1':indoor?'#d5d8cb':'#bed6d7');
 if(sea){r(0,213,750,37,'#829d97');for(let i=0;i<18;i++)r(i*47,20+(i%4)*43,25,3,'#b8d4d8');for(let i=0;i<6;i++){r(65+i*125,183+(i%2)*12,7,48,'#6c9888');r(59+i*125,194,17,6,'#6c9888')}}
 else if(ice){r(0,178,750,72,'#e8efeb');r(0,205,750,45,'#a5c6ce');r(210,200,220,20,'#edf2eb');r(515,188,130,29,'#dae6e2');for(let i=0;i<4;i++)r(i*203,110,140,15,'#dce8e6')}
 else if(indoor){r(0,184,750,66,'#b9b49f');r(75,25,140,125,'#8c9c96');r(82,32,126,111,'#cbe1df');r(142,32,6,111,'#8c9c96');r(82,82,126,5,'#8c9c96');r(480,165,150,35,'#a79383')}
 else {r(0,170,750,80,'#a2b18d');for(let i=0;i<5;i++){r(40+i*163,90,12,83,'#8b8b72');r(20+i*163,45,57,55,'#88a38a');r(10+i*163,65,78,25,'#88a38a')}r(0,166,750,8,'#7f987b');if(pond)r(80,185,595,42,'#9dbdbb');for(let i=0;i<4;i++){r(45+i*190,25,75,15,'#e5eeea');r(60+i*190,15,44,15,'#e5eeea')}if(/動物園|放飼|飼育/.test(a.habitat)){r(0,142,750,4,'#a5a58b');for(let i=0;i<10;i++)r(18+i*85,131,5,44,'#959c84')}}
 if(a.setting==='zoo'){
  if(sea){r(12,10,7,230,'#859b93');r(731,10,7,230,'#859b93');r(19,10,712,5,'#d4e1dd');r(36,30,4,70,'#d4e1dd')}
  else {r(0,141,750,4,'#a5a58b');for(let i=0;i<10;i++)r(18+i*85,134,5,38,'#959c84');r(590,135,95,62,'#8e9d8d');r(606,153,45,44,'#617769')}
 }
 let x=346,y=170;
 const b=(xx,yy,w,h,c=col)=>r(x+xx,y+yy,w,h,c);
 const eye=(xx,yy)=>b(xx,yy,4,4,dark);
 function quadruped(head=25,leg=24){b(-32,-28,75,34);b(32,-45,head,32);b(-26,3,9,leg);b(27,3,9,leg);b(36,-53,9,13);b(-44,-23,18,6);eye(45,-35)}
 switch(type){
 case 'larva':for(let i=0;i<8;i++){b(-42+i*11,-4,12,19,'#a3b082');b(-39+i*11,13,4,5,dark)}b(43,-8,15,20,'#8d9e72');eye(52,-4);break;
 case 'nymph':b(-12,-25,27,47);b(-8,-39,20,19);for(let i=0;i<3;i++){b(-31,-15+i*14,20,4,dark);b(14,-15+i*14,20,4,dark)}eye(4,-34);break;
 case 'cat':case 'canine':quadruped();b(-49,-34,8,15);if(/ライオン/.test(a.species)){b(27,-50,34,42,'#9b784d');b(38,-42,21,27,col);eye(49,-34)}if(/トラ|ヒョウ|チーター|ジャガー/.test(a.species)){for(let i=0;i<7;i++)b(-26+i*10,-23+(i%2)*11,4,7,dark)}break;
 case 'bear':b(-38,-36,85,44);b(35,-49,37,35);b(38,-58,12,13);b(62,-56,10,12);b(-30,4,15,28);b(29,4,15,28);eye(59,-38);if(/パンダ/.test(a.species)){b(38,-40,14,15,dark);b(-25,-32,14,56,dark);b(26,-22,15,48,dark)}break;
 case 'hoof':quadruped(25,39);b(26,-65,14,30);b(36,-74,5,14);b(48,-73,5,14);if(/シマウマ/.test(a.species)){for(let i=0;i<9;i++)b(-30+i*8,-25,4,27,dark);b(38,-42,5,28,dark)}if(/サイ/.test(a.species)){b(62,-40,8,10,light);b(64,-49,4,10,light)}break;
 case 'elephant':b(-52,-57,105,65);b(31,-75,53,57);b(-41,5,18,41);b(32,5,18,41);b(74,-25,13,55);b(62,20,16,11);b(32,-61,27,38,'#99a69d');eye(67,-58);break;
 case 'primate':b(-20,-37,49,50);b(7,-62,36,31);b(15,-53,28,20,'#b9aa90');b(-31,-25,13,55);b(26,-25,13,55);b(-17,9,13,27);b(12,9,13,27);eye(32,-48);break;
 case 'rodent':case 'otter':b(-37,-22,79,32);b(30,-35,33,28);b(36,-44,10,12);b(-30,7,12,12);b(29,7,12,12);eye(52,-25);b(-63,-10,29,7);if(/ビーバー/.test(a.species))b(-74,-6,35,17,'#665e4c');if(/ラッコ/.test(a.species)){b(-13,-1,28,12,light);b(-20,-1,9,10,dark)}break;
 case 'kangaroo':b(-25,-35,55,49);b(16,-65,20,44);b(23,-78,34,22);b(26,-103,8,29);b(43,-102,8,27);b(-25,3,20,35);b(-25,30,45,8);b(-64,8,42,10);b(-82,16,25,8);b(26,-26,16,7);eye(45,-71);break;
 case 'bird':case 'raptor':b(-21,-29,48,39);b(15,-48,28,26);b(41,-39,16,8,'#b6a163');b(-11,7,4,27,'#a58b62');b(15,7,4,27,'#a58b62');b(-17,31,16,4,'#a58b62');b(10,31,16,4,'#a58b62');b(-39,-19,23,8);b(-12,-22,25,24,'#8b9681');eye(33,-40);if(/ダチョウ|エミュー|ヒクイ/.test(a.species)){b(19,-77,10,37);b(15,-91,30,19);eye(35,-85);b(-8,7,5,45);b(16,7,5,45)}break;
 case 'penguin':b(-22,-64,49,74);b(-14,-47,31,52,light);b(-10,-88,36,29);b(23,-77,20,8,'#baa064');b(-34,-46,12,49);b(26,-46,12,45);b(-22,9,24,7,'#a4936d');b(8,9,24,7,'#a4936d');eye(15,-79);break;
 case 'flamingo':b(-29,-42,58,32);b(18,-88,10,52);b(24,-108,28,24);b(46,-92,18,9,'#625f54');b(-20,-12,4,70);b(13,-12,4,70);b(-25,55,13,4);b(8,55,13,4);eye(42,-101);break;
 case 'turtle':b(-40,-26,82,42);b(-30,-37,61,16);b(-52,-17,22,14);b(37,-18,26,16);b(-36,13,17,11);b(22,13,17,11);b(-23,-29,10,36,'#8b9577');b(7,-29,10,36,'#8b9577');eye(54,-14);break;
 case 'crocodile':case 'lizard':b(-40,-22,90,29);b(43,-23,49,18);b(-69,-17,34,11);b(-89,-11,23,7);b(-31,4,10,16);b(26,4,10,16);for(let i=0;i<8;i++)b(-37+i*10,-29,5,8,'#6f826c');eye(63,-21);break;
 case 'snake':for(let i=0;i<16;i++)b(-75+i*10,Math.sin(i*.6)*15,13,10);b(71,-3,20,14);eye(84,0);b(89,8,15,3,'#9e5d61');break;
 case 'frog':b(-29,-20,61,31);b(-24,-37,17,18);b(13,-37,17,18);b(-45,-1,23,20);b(25,-1,23,20);b(-42,15,31,7);b(16,15,31,7);eye(-16,-31);eye(20,-31);break;
 case 'fish':case 'shark':y=131;b(-47,-20,95,33);b(-65,-32,18,57);b(40,-13,30,21);b(-3,-39,19,22);b(3,10,18,17);b(58,-4,4,4,dark);if(a.species.includes('クマノミ')){b(-27,-19,8,32,light);b(14,-19,8,32,light)}if(type==='shark'){b(-7,-53,8,33);b(1,-44,8,24);b(38,-8,4,16,dark)}else if(/ハギ/.test(a.species))b(-16,-16,29,24,'#344a65');break;
 case 'seahorse':y=126;b(-3,-39,16,55);b(-3,-52,28,20);b(21,-46,23,8);b(-8,8,13,24);b(-19,27,21,8);b(-24,16,7,15);eye(13,-47);break;
 case 'octopus':y=135;b(-24,-36,51,44);b(-34,-22,11,22);b(26,-22,11,22);for(let i=0;i<7;i++){b(-36+i*11,5,7,25+i%3*7);b(-43+i*13,25+i%3*7,15,5)}eye(-12,-13);eye(15,-13);break;
 case 'jellyfish':y=109;b(-34,-20,70,15);b(-45,-5,92,17);b(-36,12,74,7);for(let i=0;i<6;i++){b(-31+i*13,18,4,41+i%3*9);b(-36+i*13,53+i%3*9,8,4)}break;
 case 'butterfly':b(-5,-31,8,62,dark);b(-40,-46,35,41);b(3,-46,35,41);b(-30,-5,26,35);b(4,-5,26,35);b(-37,-39,20,22,'#ceaa7f');b(9,-39,20,22,'#ceaa7f');b(-12,-48,3,20,dark);b(7,-48,3,20,dark);break;
 case 'beetle':case 'woodlouse':case 'spider':case 'bee':case 'cicada':case 'mantis':b(-19,-31,40,55);b(-11,-45,24,18);for(let i=0;i<3;i++){b(-37,-21+i*19,20,4,dark);b(20,-21+i*19,20,4,dark);b(-39,-20+i*19,4,12,dark);b(37,-20+i*19,4,12,dark)}eye(-5,-38);eye(9,-38);if(type==='spider'){b(-46,-39,29,4,dark);b(20,-39,29,4,dark)}if(type==='bee'){b(-19,-13,40,8,dark);b(-19,7,40,8,dark);b(-40,-32,24,20,light);b(20,-32,24,20,light)}if(type==='cicada'){b(-28,-24,15,52,'#a7b4a0');b(16,-24,15,52,'#a7b4a0')}if(type==='beetle'){b(-3,-26,3,45,dark);if(/カブト/.test(a.species))b(-3,-68,7,28);if(/クワガタ/.test(a.species)){b(-14,-61,6,22);b(9,-61,6,22)}}if(type==='mantis'){b(-10,-16,7,47);b(13,-15,7,47);b(-27,-43,16,6);b(20,-43,16,6)}if(type==='woodlouse')for(let i=0;i<5;i++)b(-18,-25+i*10,38,3,dark);break;
 default:quadruped();
 }
 r(0,242,750,8,sea?'#7c9993':'#7e947e');
}
