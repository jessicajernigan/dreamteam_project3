const db = require('./connection');
const { Vibe, Creator } = require('../models');
const Song = require('../models/Song');

db.once('open', async () => {
	await Vibe.deleteMany();

	const vibes = await Vibe.insertMany([
		{ name: 'All' }, //0
		{ name: 'Rock' }, // 1
		{ name: 'Hip Hop' }, // 2
		{ name: 'Reggae' }, // 3
		{ name: 'Jazzy' }, // 4
		{ name: 'Country' }, // 5
		{ name: 'Smooth' }, // 6
		{ name: 'Mellow' }, // 7
		{ name: 'Melodious' }, // 8
		{ name: 'Punk' }, // 9
		{ name: 'Romantic' }, // 10
		{ name: 'R & B' }, // 11
		{ name: 'Soul' }, // 12
		{ name: 'Indie' }, // 13
		{ name: 'Folksy' }, // 14
		{ name: 'Trap' } // 15
	]);

	console.log('vibes seeded', vibes);

	await Song.deleteMany();

	const songs = await Song.insertMany([
		{
			title   : '8th of January',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/hospital-revival/8th_of_January-2.mp3'
		},
		{
			title   : "Ain't Nobody's Bizness",
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/hospital-revival/Aint_Nobodys_Bizness-2.mp3'
		},
		{
			title   : 'Hash Smugglers Blues',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/hospital-revival/Hash_Smugglers_Blues.mp3'
		},
		{
			title   : '8th of january',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/btn-the-chaps/8th_of_January.mp3'
		},
		{
			title   : "I'm Not Drunk, You Are",
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/btn-the-chaps/Im_Not_Drunk_You_Are.mp3'
		},
		{
			title   : 'All New Blooming',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/greylizards/All_New_Blooming.mp3'
		},
		{
			title   : 'Wirklich Wichtig',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/greylizards/Wirklich_Wichtig-2.mp3'
		},
		{
			title   : 'A la Luz',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/savingjim/A_la_Luz.mp3'
		},
		{
			title   : 'Stoned Funghi',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/savingjim/Stoned_Funghi_2.mp3'
		},
		{
			title   : 'Sandpaper Tigers',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/taking_back_autumn/Sandpaper_Tigers.mp3'
		},
		{
			title   : 'Stoned Funghi',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/a_jones/Stoned_Funghi.mp3'
		},
		{
			title   : 'Le Sang',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/a_jones/Two_Le_Sang.mp3'
		},
		{
			title   : 'Time is On My Side',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/limp_compass/Time_is_On_My_Side.mp3'
		},
		{
			title   : 'Sandpaper Tigers',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/limp_compass/Two_Sandpaper_Tigers.mp3'
		},
		{
			title   : 'Vuelve a la Luz',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/limp_compass/Vuelve_a_la_Luz.mp3'
		},
		{
			title   : 'Lateen Sails',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/apples-n-plums/Lateen_Sails.mp3'
		},
		{
			title   : 'Le Sang',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/apples-n-plums/Le_Sang.mp3'
		},
		{
			title   : 'Penceresi Yola Karsi',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/apples-n-plums/Two_Penceresi_Yola_Karsi.mp3'
		},
		{
			title   : 'Amsterdam',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/rupert/Amsterdam.mp3'
		},
		{
			title   : 'Funky Banane Nightclub',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/rupert/Funky_Banane_Nightclub.mp3'
		},
		{
			title   : 'Hash Smugglers Blues',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/verucappleback/Hash_Smugglers_Blues_2.mp3'
		},
		{
			title   : 'Lateen Sails',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/y-moths/Two_Lateen_Sails.mp3'
		},
		{
			title   : "Ain't Nobody's Bizness",
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/lucy-trout/Aint_Nobodys_Bizness.mp3'
		},
		{
			title   : 'All New Blooming',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/melvin_chelmy/All_New_Blooming_2.mp3'
		},
		{
			title   : 'Kielokaz',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/marlowe_crawley/Two Kielokaz.mp3'
		},
		{
			title   : 'Any Way That You Want Me',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/musharraf/Any_Way_That_You_Want_Me.mp3'
		},
		{
			title   : 'Rain',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/musharraf/Rain.mp3'
		},
		{
			title   : 'Andara Yaye',
			songUrl : 'http://d28dtfvuvlqgls.cloudfront.net/c_davis/Andara_Yaye.mp3'
		},
		{
			title   : 'Dog Soldier Stand Down',
			songUrl :
				'http://d28dtfvuvlqgls.cloudfront.net/sgtscrumpleton/Dog_Soldier_Stand_Down.mp3'
		}
	]);

	console.log('songs seeded: ', songs);

	await Creator.deleteMany();

	// need to .create() one at a time instead of .insertMany() or password validation does not work
	// all creators get vibes[0]._id ('All') so All filter will work
	const testCreator = await Creator.create({
		username  : 'test',
		email     : 'test@gmail.com',
		password  : 'password123',
		stageName : 'test',
		imgUrl: 'https://source.unsplash.com/300x300/?musician',
		location  : 'Virginia',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [
			vibes[0]._id,
			vibes[1]._id,
			vibes[2]._id,
			vibes[5]._id,
			vibes[8]._id
		],
		songs     : []
	});

	await Creator.create({
		username  : 'hospital-revival',
		email     : 'hottamale24@aol.com',
		password  : 'wiu4erjskfdn',
		stageName : 'Hospital Revival',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/hospital-revival/busker-peeps-3.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id, vibes[7]._id, vibes[2]._id ],
		songs     : [ songs[0], songs[1], songs[2] ]
	});

	await Creator.create({
		username  : 'btn-the-chaps',
		email     : '6alekber.20140@arunachalnews.com',
		password  : 'asdfasdf',
		stageName : 'Between the Chaps and Me',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/btn-the-chaps/busker-peeps-1.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id, vibes[3]._id ],
		songs     : [ songs[3], songs[4] ]
	});

	await Creator.create({
		username  : 'greylizards',
		email     : 'amessaoud_s@getthemp3.com',
		password  : 'password1',
		stageName : 'Flight of the Grey Lizards',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/greylizards/buskr-one-man-band.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[9]._id, vibes[10]._id ],
		songs     : [ songs[5], songs[6] ]
	});

	await Creator.create({
		username  : 'savingjim',
		email     : 'aamitoj.singh27@imtinc.us',
		password  : 'pw2394ierj',
		stageName : 'Saving Jim',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/savingjim/busker-guy-4.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[12]._id, vibes[4]._id ],
		songs     : [ songs[7], songs[8] ]
	});

	await Creator.create({
		username  : 'taking_back_autumn',
		email     : 'kabdou.mca@kocheme.com',
		password  : 'asdfxh',
		stageName : 'Taking Back Autumn',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/taking_back_autumn/busker-gal-2.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id ],
		songs     : [ songs[9] ]
	});

	await Creator.create({
		username  : 'a_jones',
		email     : 'vmahnoor.baloxr@imtinc.us',
		password  : 'asdrthrtdgrf',
		stageName : 'Aquarius Jones',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/a_jones/busker-guy-9.jpg',
		location  : 'Ft. Worth, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[12]._id, vibes[4]._id ],
		songs     : [ songs[10], songs[11] ]
	});

	await Creator.create({
		username  : 'limp_compass',
		email     : 'rabed.mechti.3o@valueweboffers.com',
		password  : 'asrgdfvc',
		stageName : 'Limp Compass',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/limp_compass/busker-guy-8.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[8]._id, vibes[4]._id, vibes[11]._id ],
		songs     : [ songs[12], songs[13], songs[14] ]
	});

	await Creator.create({
		username  : 'apples-n-plums',
		email     : 'jbadar-159-128@guidelican.site',
		password  : 'asrdtyhg',
		stageName : 'Apples and Plums',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/apples-n-plums/busker-guy-10.jpg',
		location  : 'Seneca, SC',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[14]._id, vibes[15]._id, vibes[1]._id ],
		songs     : [ songs[15], songs[16], songs[17] ]
	});

	await Creator.create({
		username  : 'rupert',
		email     : 'rmootaz1995@ardudi.ga',
		password  : 'asfgd',
		stageName : 'Rupert Herndon',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/rupert/busker-guy-13.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id ],
		songs     : [ songs[18], songs[19] ]
	});

	await Creator.create({
		username  : 'verucappleback',
		email     : 'rimad_migu0@julymovo.com',
		password  : 'aesrdthf',
		stageName : 'Veruca Appleback',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/verucappleback/busker-gal-3.jpg',
		location  : 'Spokane, WA',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id ],
		songs     : [ songs[20] ]
	});

	await Creator.create({
		username  : 'y-moths',
		email     : '8shivani.m.khullv@mixalo.com',
		password  : 'asrdt',
		stageName : 'Why Moths',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/y-moths/busker-gal-4.jpg',
		location  : 'Spokane, WA',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[15]._id ],
		songs     : [ songs[21] ]
	});

	await Creator.create({
		username  : 'lucy-trout',
		email     : 'dgabrielmoraes09o@ryannoack.com',
		password  : 'kwjrshdf',
		stageName : 'Lucinda Trout',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/lucy-trout/busker-gal-5.jpg',
		location  : 'Boston, MA',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[12]._id ],
		songs     : [ songs[22] ]
	});

	await Creator.create({
		username  : 'melvin_chelmy',
		email     : 'chix.102t@ardudi.ga',
		password  : 'alksjrdfg',
		stageName : 'Melvin Chelmy',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/melvin_chelmy/busker-guy-5.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[3]._id ],
		songs     : [ songs[23] ]
	});

	await Creator.create({
		username  : 'marlowe_crawley',
		email     : '4omi@mailboxvip.com',
		password  : 'slkdjf',
		stageName : 'Marlow Crawley',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/marlowe_crawley/busker-guy-2.jpg',
		location  : 'Albany, NY',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[14]._id ],
		songs     : [ songs[24] ]
	});

	await Creator.create({
		username  : 'musharraf',
		email     : 'ghamza.italya.12v@swapinsta.com',
		password  : 'sdfkjn',
		stageName : 'Musharraf Shaughnessy',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/musharraf/busker-guy-7.jpg',
		location  : 'Cleveland, TN',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id ],
		songs     : [ songs[25], songs[26] ]
	});

	await Creator.create({
		username  : 'c_davis',
		email     : 'gyusra.khan.3992@gegearkansas.com',
		password  : 'asdfkjg',
		stageName : 'Czeslaw Davis',
		imgUrl    : 'http://d28dtfvuvlqgls.cloudfront.net/c_davis/busker-guy-1.jpg',
		location  : 'Chattanooga, TN',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[5]._id ],
		songs     : [ songs[27] ]
	});

	await Creator.create({
		username  : 'sgtscrumpleton',
		email     : 'hziad.allouch.94v@instaku-media.com',
		password  : 'jirfsdk',
		stageName : 'Herman Scrumple',
		imgUrl    :
			'http://d28dtfvuvlqgls.cloudfront.net/sgtscrumpleton/busker-guy-6.jpg',
		location  : 'Austin, TX',
		bio       :
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
		vibes     : [ vibes[0]._id, vibes[4]._id ],
		songs     : [ songs[28] ]
	});

	console.log('creators seeded.  test example: ', testCreator);

	process.exit();
});
