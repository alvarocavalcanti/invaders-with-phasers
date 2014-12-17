function start() {
	    	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'invaders-with-phaser', {preload: preload, create: create, update: update});

		var enemies;
		var bullets = [];
	    	var ship;
	    	var cursors;
	    	var fireButton;
	    	var bullet;
	    	var bulletTime = 0;

	    	function preload () {
	    		game.load.spritesheet('ship','img/ship_24x25.png', 24, 25, 5);
	    		game.load.spritesheet('bullet','img/shot_14x14.png', 14, 14);
	    		game.load.spritesheet('enemy', 'img/enemy_21x21.png', 21, 21, 3);
	    	}

	    	function create () {
	    		game.physics.startSystem(Phaser.Physics.ARCADE);
	    		
	    		enemies = game.add.group();
	    		enemies.enableBody = true;
	    		enemies.physicsBodyType = Phaser.Physics.ARCADE;

	    		ship = game.add.sprite(game.world.centerX, game.world.height - 50, 'ship');
	    		ship.anchor.setTo(0.5, 0.5);
	    		game.physics.enable(ship, Phaser.Physics.ARCADE);
	    		
	    		ship.body.collideWorldBounds = true;

	    		ship.animations.add('idle', [2]);
	    		ship.animations.add('left', [1,0]);
	    		ship.animations.add('right', [3,4]);

	    		ship.animations.play('idle', 15, true);

	    		ship.body.drag.setTo(200,200);
	   		
	   		var enemyCount = 50;
	   		for (var i = 0; i < enemyCount; i++) {
				createEnemy(enemies, game.world.centerX + (i * 20));
	   		}

	    		enemies.setAll('anchor.x', 0.5);
	    		enemies.setAll('anchor.y', 0.5);
	    		
	    		enemies.setAll('body.collideWorldBounds', true);
	    		enemies.setAll('body.velocity.x', -200);
	    		enemies.setAll('body.bounce.x', 1);

	    		cursors = game.input.keyboard.createCursorKeys();
	    		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    	}
	    	
	    	function createEnemy(enemyGroup, x) {
		    var enemy = enemyGroup.create(x, 20, 'enemy');
		    
	    	    game.physics.enable(enemy, Phaser.Physics.ARCADE);
	    	    enemy.animations.add('anim', [2,1,0,1]);
    		    enemy.animations.play('anim', 4, true);
    		    
    		    return enemy;
	    	}

	    	function update () {
	    		if (cursors.left.isDown) {
	    			ship.body.acceleration.x = -200;
	    			if (ship.animations.currentAnim.name != 'left')
	    				ship.animations.play('left', 15, false);
	    		} else if (cursors.right.isDown) {
	    			ship.body.acceleration.x = 200;
	    			if (ship.animations.currentAnim.name != 'right')
	    				ship.animations.play('right', 15, false);
	    		} else {
	    			ship.body.acceleration.x = 0;
	    			ship.animations.play('idle', 15, false);
	    		}

	    		if (fireButton.isDown) {
	    			shoot();
	    		}
	    		
	    		
	    		
	    		
	    	}

	    	function shoot () {
	    		if (game.time.now > bulletTime) {
		    		var bullet = game.add.sprite(ship.x, ship.y - (ship.height/2), 'bullet');
		    		bullet.anchor.setTo(0.5, 0.5);
		    		bullet.animations.add('glow');
		    		bullet.animations.play('glow', 30, true);
		    		game.physics.enable(bullet, Phaser.Physics.ARCADE);
		    		bullet.body.velocity.y = -300;
		    		bulletTime = game.time.now + 400;
		    		bullets.push(bullet)
	    		}
	    	}

	    }