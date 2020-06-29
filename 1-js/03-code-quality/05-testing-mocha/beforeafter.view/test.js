describe("test", function() {
  
   // Mocha usually waits for the tests for 2 seconds before considering them wrong
  
  this.timeout(200000); // With this code we increase this - in this case to 200,000 milliseconds

<<<<<<< HEAD
  before(() => alert("Inicio testing – antes de todos los tests"));
  after(() => alert("Final testing – después de todos los tests"));
=======
  // This is because of the "alert" function, because if you delay pressing the "OK" button the tests will not pass!
  
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));
>>>>>>> 340ce4342100f36bb3c4e42dbe9ffa647d8716c8

  beforeEach(() => alert("Antes de un test – entramos al test"));
  afterEach(() => alert("Después de un test – salimos del test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
