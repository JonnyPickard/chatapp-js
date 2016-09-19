describe('chatapp home page chat list', function(){
  it('should add a chat', function(){
    browser.get('http://localhost:3000');

    //login
    element(by.model('username')).sendKeys('testUser');
    element(by.css('[value="Login"]')).click();

    element(by.css('.chatInput')).sendKeys('First chatapp test');
    element(by.css('[value="Chat"]')).click();

    var chatText = element(by.id('chatText')).getText();
    var chatUser = element(by.id('chatUser')).getText();

    expect(chatText).toEqual('First chatapp test');
    expect(chatUser).toEqual('by: testUser');
  });
});
