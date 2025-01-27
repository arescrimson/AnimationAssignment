class Entity {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset("./assets/Boss.png"), 
      // idle starts at top
      0, // xStart
      0, // yStart
      288, // Frame width
      160, // Frame height
      6, // Frame count
      0.2, // Frame duration
      3,
      3
    );
    this.x = window.innerWidth / 3;
    this.y = window.innerHeight / 7;
    this.speed = 0;
  }

  update() {
    this.x += this.speed * this.game.clockTick;
  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }
}
