const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// thanks chierit :) 
ASSET_MANAGER.queueDownload("./assets/Boss.png");
ASSET_MANAGER.queueDownload("./assets/Background.png");

ASSET_MANAGER.downloadAll(() => {
  const canvas = document.getElementById("gameWorld");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  gameEngine.addEntity(new Entity(gameEngine));
  gameEngine.addEntity(new Background(gameEngine));

  gameEngine.init(ctx);
  gameEngine.start();
});
