'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');

  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);

  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);

  console.log('Routes Loaded');
  fn();
}
