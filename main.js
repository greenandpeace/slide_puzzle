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

    const san = new ExSprite(633/3,421/2);
    san.image = core.assets["images/210125_san_01.jpg"];
    scene.addChild(san);

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
