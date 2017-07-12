suite('2D Primitives', function() {

  var myp5 = new p5(function( p ) {
    p.setup = function() {};
    p.draw = function() {};
  });

  teardown(function() {
    myp5.clear();
  });

  suite('p5.prototype.arc', function() {
    var arc = p5.prototype.arc;
    suite('arc()', function() {
      test('should be a function', function() {
        assert.ok(arc);
        assert.typeOf(arc, 'function');
      });
      test('arc(): no friendly-err-msg', function() {
        assert.doesNotThrow(function() {
            myp5.arc(1, 1, 10.5, 10, 0, Math.PI, 'pie');
          },
          Error, 'got unwanted exception');
      });
      test('arc(): missing param #4, #5', function() {
        assert.doesNotThrow(function() {
            myp5.arc(1, 1, 10.5, 10);
          },
          Error, 'got unwanted exception');
      });
      test('arc(): wrong param type at #0', function() {
        assert.doesNotThrow(function() {
            myp5.arc('1', 1, 10.5, 10, 0, Math.PI, 'pie');
          },
          Error, 'got unwanted exception');
      });
    });
  });

  suite('p5.prototype.ellipse', function() {
    var ellipse = p5.prototype.ellipse;
    suite('ellipse()', function() {
      test('should be a function', function() {
        assert.ok(ellipse);
        assert.typeOf(ellipse, 'function');
      });
      test('should draw', function(done) {
        myp5.background(155);
        myp5.fill(0);
        myp5.ellipse(0, 0, 100, 100);

        testRender('unit/assets/renders/ellipse.png', myp5, function(res) {
          assert.isTrue(res);
          done();
        });
      });
      test('ellipse(): no friendly-err-msg', function() {
        assert.doesNotThrow(function() {
            myp5.ellipse(0, 0, 100);
          },
          Error, 'got unwanted exception');
      });
      test('ellipse(): missing param #2', function() {
        assert.doesNotThrow(function() {
            myp5.ellipse(0, 0);
          },
          Error, 'got unwanted exception');
      });
      test('ellipse(): missing param #2', function() {
        assert.doesNotThrow(function() {
            var size;
            myp5.ellipse(0, 0, size);
          },
          Error, 'got unwanted exception');
      });
      test('ellipse(): wrong param type at #0', function() {
        assert.doesNotThrow(function() {
            myp5.ellipse('0', 0, 100, 100);
          },
          Error, 'got unwanted exception');
      });
    });
  });

  suite('p5.prototype.line', function() {
    var line = p5.prototype.line;
    suite('line()', function() {
      test('should be a function', function() {
        assert.ok(line);
        assert.typeOf(line, 'function');
      });
      test('should draw', function(done) {
        myp5.background(155);
        myp5.fill(0);
        myp5.line(0, 0, 100, 100);

        testRender('unit/assets/renders/line.png', myp5, function(res) {
          assert.isTrue(res);
          done();
        });
      });
    });
  });

  suite('p5.prototype.rect', function() {
    var rect = p5.prototype.rect;
    suite('rect()', function() {
      test('should be a function', function() {
        assert.ok(rect);
        assert.typeOf(rect, 'function');
      });
    });
  });

  suite('p5.prototype.triangle', function() {
    var triangle = p5.prototype.triangle;
    suite('triangle()', function() {
      test('should be a function', function() {
        assert.ok(triangle);
        assert.typeOf(triangle, 'function');
      });
    });
  });

});
