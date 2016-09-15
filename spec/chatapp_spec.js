describe('chatapp home page chat list', function(){
  it('should add a chat', function(){
    browser.get('http://localhost:3000/');

    element(by.model('chatApp.chatText')).sendKeys('First chatapp test');
    element(by.css('[value="add"]')).click();

    var chatAppList = element.all(by.repeater('chat in chatApp.chatText'));
    expect(chatAppList.count()).toEqual(3);
    expect(chatAppList.get(2).getText()).toEqual('First chatapp test');
  });
});
