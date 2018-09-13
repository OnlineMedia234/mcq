var routes=[ // Index page
{
    path: '/', url: './index.html', name: 'index',
}
,
{
    path: '/about/', url: './pages/about.html', name: 'about',
}
,
{
    path: '/login/', componentUrl: './pages/login.html', name: 'login',
}
,
{
    path: '/password/', componentUrl: './pages/password.html', name: 'password',
}
,
{
    path: '/register/', componentUrl: './pages/register.html', name: 'login',
}
,
{
    path: '/home/', componentUrl: './pages/home.html', name: 'home',
}
,
{
    path: '/subjects/', componentUrl: './pages/subject.html', name: 'subject',
},
{
    path: '/quiz/', componentUrl: './pages/quiz.html', name: 'view_student',
}
,
{
    path: '/result/', componentUrl: './pages/new_post.html', name: 'submit_post',
}
,
{
    path: '/profile/', componentUrl: './pages/profile.html', name: 'profile',
}
,
{
    path: '/leaders/', componentUrl: './pages/leaders.html', name: 'leaders',
},
{
    path: '/scores/', componentUrl: './pages/scores.html', name: 'scores',
}

, // Default route (404 page). MUST BE THE LAST
{
    path: '(.*)', url: './pages/404.html',
}

];