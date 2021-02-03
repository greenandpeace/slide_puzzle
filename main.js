var assets = [
    "images/title.png",// タイトル
    "images/210125_san_01.jpg",
];

function gameStart(){
    var scene = new Scene();
    core.replaceScene(scene); core.resume();

    //==========
    // ここから
    //==========

    function get_random(num){return Math.floor(Math.random()*num)};

    scene.backgroundColor = "lightgray"
    const san_group = new Group();
    scene.addChild(san_group);
    //ピースが入ってる配列
    const sg_cn = san_group.childNodes;
    //ピースを入れる配列(初めに消えたピースの所になんか入れる)
    const pieces = [];

    function init(){
        for(let i = 0;i<=2;i++){
            for(let i2 = 0;i2<=1;i2++){
                  //三分割したものを左から出していく
                  let san_d = new ExSprite(633/3,421/2);
                  san_d.image = core.assets["images/210125_san_01.jpg"];
                  san_d.frame = i+ i2*3;
                  san_d.x = san_d.width*i;
                  san_d.y = san_d.height*i2
                  san_group.addChild(san_d);
                  //piecesにsan-dを入れる
                  pieces.push(san_d);
                  console.log(get_random(sg_cn.length),pieces);
                  san_d.on(Event.TOUCH_START,function(e){
                    console.log(e,this);
                  });
            }
        }
      ///ランダムでピースを一つ消す
      const random_num = get_random(sg_cn.length);
      //消すピースが入っていた所を"blank"に置き換える;
      san_group.removeChild(sg_cn[random_num]);
      //sg_cn[random_num].visible = false;
      //sg_cn[0] = "ホゲホゲ"
      console.log(sg_cn,sg_cn[random_num].x);
    }
    init();


    function suffle(){
      //sg_cn[0].x = sg_cn[2].x;
      //console.log(sg_cn[0].x,sg_cn[1].x);
    };
    //suffle();



    //==========
    // ここまで
    //==========

};

function titleStart(){// タイトル画面
    var scene = gameManager.createTitleScene();
    core.replaceScene(scene); core.pause();
    scene.on(enchant.Event.TOUCH_START, function(){gameStart();});
}

//==========
//EnchantJS
enchant();
var gameManager;
var core;
var scene;
window.onload = function(){
    gameManager = new common.GameManager();
    core = gameManager.createCore(640, 640);
    core.preload(assets);
    core.onload = function(){titleStart();};
    core.start();
};
