var should = require('should');
var Tradutor = require('../../../src/domain/Tradutor');


describe('Tradutor', function(){

  it('traduzir uma palavra', function(){
    var tradutor = new Tradutor([]);
    should.equal('ola', tradutor.traduzir('hello'));
  });

  it('traduzir duas palavra', function(){
    var tradutor = new Tradutor([]);
    should.equal('ola', tradutor.traduzir('hello'));
    should.equal('mundo', tradutor.traduzir('world'));
  });

  it('traduzir três palavra', function(){
    var tradutor = new Tradutor([]);
    should.equal('ola', tradutor.traduzir('hello'));
    should.equal('mundo', tradutor.traduzir('world'));
      should.equal('carro', tradutor.traduzir('car'));
  });

  it('traduzir uma frase', function(){
    var tradutor = new Tradutor([]);
    should.equal('ola mundo', tradutor.traduzir('hello world'));
  });

  it('traduzir uma frase com palavras desconhecidas', function(){
    var tradutor = new Tradutor([]);
    should.equal('ola mundo friends', tradutor.traduzir('hello world friends'));
  });


});
