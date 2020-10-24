const db = require('./connection');
const { Vibe, Creator } = require('../models');

db.once('open', async () => {
  await Vibe.deleteMany();

  const vibes = await Vibe.insertMany([
    { name: 'Rock' }, // 0
    { name: 'Hip Hop' }, // 1
    { name: 'Reggae' }, // 2
    { name: 'Jazzy' }, // 3
    { name: 'Country' }, // 4
    { name: 'Smooth' }, // 5
    { name: 'Mellow' }, // 6
    { name: 'Melodious' }, // 7
    { name: 'Punk' },  // 8
    { name: 'Romantic' }, // 9
    { name: 'R & B' }, // 10
    { name: 'Soul' }, // 11
    { name: 'Indie' }, // 12
    { name: 'Folksy' }, // 13
    { name: 'Trap' } // 14
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

  const creators = await Creator.insertMany([
    { 
      name: 'Royal Trux',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Virginia',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[3]._id, vibes[6]._id ]
    },
    { 
      name: 'Guided By Voices',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Ohio',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [vibes[0]._id, vibes[6]._id ],
    },
    { 
      name: 'Lee Scratch Perry',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Jamaica',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[2]._id ],
    },
    { 
      name: 'Johnny Cash',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[4]._id, vibes[6]._id ],
    },
    { 
      name: 'Outkast',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[1]._id, vibes[3]._id ],
    },
    { 
      name: 'Miles Davis',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[3]._id, vibes[6]._id ],
    },
    { 
      name: 'Hospital Revival',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[11]._id, vibes[2]._id ],
    },
    { 
      name: 'Between the Chaps and Me',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[12]._id, vibes[13]._id, vibes[6]._id ],
    },
    { 
      name: 'Flight of the Grey Lizards',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[2]._id, vibes[8]._id ],
    },
    { 
      name: 'Saving Jim',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[6]._id, vibes[1]._id, vibes[5]._id],
    },
    { 
      name: 'Taking Back Autumn',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[3]._id, vibes[6]._id ],
    },
    { 
      name: 'Hospital Strippers',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[8]._id ],
    },
    { 
      name: 'Limp Compass',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[10]._id, vibes[9]._id ],
    },
    { 
      name: 'Apples and Plums',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[9]._id, vibes[13]._id ],
    },
    { 
      name: 'Quiet Purple',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[7]._id, vibes[7]._id, vibes[10]._id ],
    },
    { 
      name: 'Veruca Appleback',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[5]._id, vibes[12]._id, vibes[13]._id, vibes[6]._id ],
    },
    { 
      name: 'Another Quiet Summer',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[9]._id, vibes[6]._id ],
    },
    { 
      name: 'Why Moths',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[13]._id, vibes[12]._id ],
    },
    { 
      name: 'Lucinda Trout',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[6]._id ],
    },
    { 
      name: 'Herman Melville',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[6]._id ],
    },
    { 
      name: 'Aquarius Jones',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[1]._id, vibes[11]._id ],
    },
    { 
      name: 'Czeslaw Davis',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[14]._id, vibes[5]._id ],
    },
    { 
      name: 'Mast General',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[1]._id, vibes[6]._id ],
    },
    { 
      name: 'Melvin Chelmy',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[3]._id, vibes[6]._id ],
    },
    { 
      name: 'Michael Beasley',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[4]._id, vibes[12]._id, vibes[13]._id ],
    },
    { 
      name: 'Musharraf Shaughnessy',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[10]._id, vibes[11]._id ],
    },
    { 
      name: 'Marlow Crawley',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[3]._id, vibes[6]._id ],
    },
    { 
      name: 'Lily Lewis',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[4]._id, vibes[6]._id ],
    },
  ])

  console.log('creators seeded', creators);

  // await Product.deleteMany();

  // const products = await Product.insertMany([
  //   {
  //     name: 'Sample One',
  //     description:
  //       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  //     image: 'sample-one.jpg',
  //     category: categories[0]._id,
  //     price: 2.99,
  //     quantity: 500
  //   },
  //   {
  //     name: 'Sample Two',
  //     description:
  //       'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
  //     image: 'sample-two.jpg',
  //     category: categories[0]._id,
  //     price: 1.99,
  //     quantity: 500
  //   },
  //   {
  //     name: 'Sample Three',
  //     category: categories[1]._id,
  //     description:
  //       'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
  //     image: 'sample-three.jpg',
  //     price: 7.99,
  //     quantity: 20
  //   },
  // ])

  // console.log('products seeded');

  // await User.deleteMany();

  // await User.create({
  //   firstName: 'Pamela',
  //   lastName: 'Washington',
  //   email: 'pamela@testmail.com',
  //   password: 'password12345',
  //   orders: [
  //     {
  //       products: [products[0]._id, products[0]._id, products[1]._id]
  //     }
  //   ]
  // });

  // await User.create({
  //   firstName: 'Elijah',
  //   lastName: 'Holt',
  //   email: 'eholt@testmail.com',
  //   password: 'password12345'
  // });

  // console.log('users seeded');

  process.exit();
});
