db.posts.drop({})

db.posts.insert([
    {
        title: 'Welcome!',
        body: 'First Post! Thanks for checking this out!',
        author: 'Brennan'
    },
    {
        title: 'Holy shit second post',
        body: 'even better than the first',
        author: 'Brennan'
    }
])