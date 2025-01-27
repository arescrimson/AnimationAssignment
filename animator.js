class Animator {
  constructor(
    spritesheet,
    xStart,
    yStart,
    width,
    height,
    frameCount,
    frameDuration,
    scaleX = 1, 
    scaleY = 1 
  ) {
    Object.assign(this, {
      spritesheet,
      xStart,
      yStart,
      width,
      height,
      frameCount,
      frameDuration,
      scaleX,
      scaleY,
    });
    this.elapsedTime = 0;
    this.totalTime = frameCount * frameDuration;
  }

  drawFrame(tick, ctx, x, y) {
    this.elapsedTime += tick;

    if (this.elapsedTime >= this.totalTime) {
      this.elapsedTime -= this.totalTime;
    }

    const frame = this.currentFrame();

    ctx.drawImage(
      this.spritesheet,
      this.xStart + this.width * frame, // Source x
      this.yStart, // Source y
      this.width, // Source width
      this.height, // Source height
      x, // Destination x
      y, // Destination y
      this.width * this.scaleX, // Destination width (scaled)
      this.height * this.scaleY // Destination height (scaled)
    );
  }

  currentFrame() {
    return Math.floor(this.elapsedTime / this.frameDuration);
  }

  isDone() {
    return this.elapsedTime >= this.totalTime;
  }
}
