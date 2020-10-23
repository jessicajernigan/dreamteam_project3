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
    { name: 'Blues' },
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
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test1@testmail.com',
      password: 'password123',
      bandName: 'Royal Trux',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Virginia',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[0]._id, vibes[3]._id, vibes[6]._id ]
    },
    { 
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test2@testmail.com',
      password: 'password123',
      bandName: 'Guided By Voices',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Ohio',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [vibes[0]._id, vibes[6]._id ],
    },
    { 
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test3@testmail.com',
      password: 'password123',
      bandName: 'Lee Scratch Perry',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Jamaica',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[2]._id ],
    },
    { 
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test4@testmail.com',
      password: 'password123',
      bandName: 'Johnny Cash',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[4]._id, vibes[6]._id ],
    },
    { 
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test5@testmail.com',
      password: 'password123',
      bandName: 'Outkast',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[1]._id, vibes[3]._id ],
    },
    { 
      firstName: 'John', 
      lastName: 'Doe',
      email: 'test6@testmail.com',
      password: 'password123',
      bandName: 'Miles Davis',
      imgUrl: 'https://source.unsplash.com/300x300/?musician',
      location: 'Austin, TX',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, doloremque? Doloribus quidem facere, non natus quas optio obcaecati distinctio amet aliquam magni expedita soluta iure neque! Voluptas excepturi beatae hic dolorum laborum ad consectetur deserunt modi enim eum assumenda, nihil quia eveniet? Ducimus dicta porro ab totam eum iusto et.',
      vibes: [ vibes[3]._id, vibes[6]._id ],
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
