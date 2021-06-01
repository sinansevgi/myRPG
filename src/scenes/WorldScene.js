export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('World');
  }

  create() {
    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('tuxmon-sample-32px-extruded', 'tiles');
    map.createLayer('Below Player', tileset, 0, 0);
    const worldLayer = map.createLayer('World', tileset, 0, 0);
    const aboveLayer = map.createLayer('Above Player', tileset, 0, 0);
    worldLayer.setCollisionByProperty({
      collides: true,
    });
    aboveLayer.setDepth(10);

    const spawnPoint = map.findObject('Objects', (obj) => obj.name === 'Spawn Point');

    this.player = this.physics.add
      .sprite(spawnPoint.x, spawnPoint.y, 'player', 1)
      .setScale(0.75)
      .setSize(32, 32)
      .setOffset(16, 32);

    this.physics.add.collider(this.player, worldLayer);

    const camera = this.cameras.main;
    camera.startFollow(this.player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.cursors = this.input.keyboard.createCursorKeys();

    const { anims } = this;
    anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [3, 4, 5],
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [6, 7, 8],
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [9, 10, 11],
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', {
        frames: [0, 1, 2],
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.spawns = this.physics.add.group({
      classType: Phaser.GameObjects.Zone,
    });
    for (let i = 0; i < 30; i += 1) {
      const x = Phaser.Math.RND.between(0, map.widthInPixels);
      const y = Phaser.Math.RND.between(0, map.heightInPixels);
      this.spawns.create(x, y, 20, 20);
    }
    this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
    1;

    // this.sys.events.on('wake', this.wake, this);
  }

  update() {
    this.player.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-100);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(100);
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-100);
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(100);
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
  }

  onMeetEnemy(player, zone) {
    zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
    this.cameras.main.shake(100).flash(500);
    this.scene.switch('BattleScene');
  }

  wake() {
    this.cursors.left.reset();
    this.cursors.right.reset();
    this.cursors.up.reset();
    this.cursors.down.reset();
  }
}
