describe('chatapp home page chat list', function(){
  it('should add a chat', function(){
    browser.get('http://localhost:3000/');

    element(by.css('.chatInput')).sendKeys('First chatapp test');
    element(by.css('[value="Chat"]')).click();

    var chatFeed = element(by.css('.chatFeed')).getText();

    expect(chatFeed).toEqual('First chatapp test');
  });
});
