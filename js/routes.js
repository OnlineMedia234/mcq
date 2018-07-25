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
    path: '/register/', componentUrl: './pages/register.html', name: 'login',
}
,
{
    path: '/home/', componentUrl: './pages/home.html', name: 'home',
}
,
{
    path: '/subjects/', componentUrl: './pages/students.html', name: 'subject',
},
{
    path: '/quiz/', componentUrl: './pages/view_student.html', name: 'view_student',
}
,
{
    path: '/result/', componentUrl: './pages/new_post.html', name: 'submit_post',
}
,
{
    path: '/profile/', componentUrl: './pages/yearbook.html', name: 'yearbook',
}
,
{
    path: '/leaders/', componentUrl: './pages/yearbook.html', name: 'yearbook',
},
{
    path: '/scores/', componentUrl: './pages/yearbook.html', name: 'yearbook',
}

, // Default route (404 page). MUST BE THE LAST
{
    path: '(.*)', url: './pages/404.html',
}

];