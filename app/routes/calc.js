'use strict';

exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum!'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum:answer});
};
