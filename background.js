class Background {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset("./assets/Background.png"),
      0, // xStart
      0, // yStart
      800, // Frame width
      336, // Frame height
      8, // Frame count
      0.1, // Frame duration
      2,
      2
    );
    this.x = 0; // Initial x position
    this.y = 0; // Initial y position
    this.speed = 0;
  }

  update() {
    this.x -= this.speed * this.game.clockTick;

    if (this.x > 1024) {
      this.x = 0;
    }
  }

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }
}
