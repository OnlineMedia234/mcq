// Dom7
var $$ = Dom7;

// Theme
var theme = 'md';
// Init App
var app = new Framework7({
  id: 'ng.com.onlinemedia.apptitude',
  name: app_name,
  view: {
    pushState: true,
    stackPages: true
  },
  template7Pages: true, // enable Template7 rendering for Ajax and Dynamic pages
  precompileTemplates: true,
  root: '#app',
  theme: theme,
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  on: {
    pageInit(page) {
       //console.log("page")
    }
  }
});

var mainView = app.views.create('.view-main');