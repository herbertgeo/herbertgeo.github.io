var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Projeto de app para OJs<br>Usando recursos modernos',
    subtitle: 'Inteligência que gera mais eficiência',
    eventInfo: {
     title: 'Apresentação presidência do TJDFT',
     date: '2/9/2015'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'http://intranet2.tjdft.jus.br/logo.jpg',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Herbert Trindade',
    company: 'Desenvolvedor<br>TJDFT',
    email: 'herbert.trindade@tjdft.jus.br',
 //   gplus: 'http://plus.google.com/1234567890',
    twitter: '@herbertgeo',
 //   www: 'http://www.you.com',
    github: 'http://github.com/herbertgeo'
  }/*, {
    name: 'Second Name',
    company: 'Job Title, Google',
    gplus: 'http://plus.google.com/1234567890',
    twitter: '@yourhandle',
    www: 'http://www.you.com',
    github: 'http://github.com/you'
  }*/]
};
