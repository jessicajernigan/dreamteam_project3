const db = require('./connection');
const { Vibe, Creator } = require('../models');

db.once('open', async () => {
	await Vibe.deleteMany();

	const vibes = await Vibe.insertMany([
		{ name: 'Rock' },
		{ name: 'Hip Hop' },
		{ name: 'Reggae' },
		{ name: 'Jazz' },
		{ name: 'Country' },
		{ name: 'Disco' },
		{ name: 'Blues' }
	]);

	console.log('vibes seeded', vibes);

	// Rock: vibes[0]._id
	// Hip Hop: vibes[1]._id
	// Reggae: vibes[2]._id
	// Jazz: vibes[3]._id
	// Country: vibes[4]._id
	// Disco: vibes[5]._id
	// Blues: vibes[6]._id

	await Creator.deleteMany();

  // need to .create() one at a time instead of .insertMany() or password validation does not work
	await Creator.create({
		username  : 'Royal Trux',
		email     : 'test1@gmail.com',
		password  : 'password123',
		stageName : 'Royal Trux',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Virginia',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[3]._id, vibes[6]._id ]
	});

	await Creator.create({
		username  : 'Guided By Voices',
		email     : 'test2@gmail.com',
		password  : 'password123',
		stageName : 'Guided By Voices',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Ohio',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[6]._id ]
	});
	await Creator.create({
		username  : 'Lee Scratch Perry',
		email     : 'test3@gmail.com',
		password  : 'password123',
		stageName : 'Lee Scratch Perry',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Jamaica',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[2]._id ]
	});
	await Creator.create({
		username  : 'Johnny Cash',
		email     : 'test4@gmail.com',
		password  : 'password123',
		stageName : 'Johnny Cash',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[4]._id, vibes[6]._id ]
	});
	await Creator.create({
		username  : 'Outkast',
		email     : 'test5@gmail.com',
		password  : 'password123',
		stageName : 'Outkast',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[1]._id, vibes[3]._id ]
	});
	await Creator.create({
		username  : 'Miles Davis',
		email     : 'test6@gmail.com',
		password  : 'password123',
		stageName : 'Miles Davis',
		imgUrl    : 'https://source.unsplash.com/300x300/?musician',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[3]._id, vibes[6]._id ]
	});

	console.log('creators seeded');

	

	process.exit();
});
