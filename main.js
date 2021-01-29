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

    scene.backgroundColor = "lightgray"
    const san_group = new Group();
    scene.addChild(san_group);

    const san = new Sprite(633,421);
    san.image = core.assets["images/210125_san_01.jpg"];
    //scene.addChild(san);
    for(let i = 0;i<=2;i++){
          for(let i2 = 0;i2<=1;i2++){
              //三分割したものを左から出していく
              let san_d = new ExSprite(633/3,421/2);
              san_d.image = san.image;
              san_d.frame = i;
              san_d.x = san_d.width*i;
              san_group.addChild(san_d);
              console.log(san_d.width,i,san_d.width*i);
     }
    }
    /*
    const sg_cn = san_group.childNodes
    function suffle(){
      sg_cn[0].x = sg_cn[1].x
      console.log(sg_cn[0].x,sg_cn[2].x);
    };
    suffle();
    */

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
