var button = {
    'class': 'hap',
    'id': 'test',
    'name': 'test',
    'type': 'button',
    'value': 'test',
    'content': 'test',
    'action': 'test',
    'icon': 'test'
};
(function() {
    describe('ui.component.button', function() {

        it('expect ui.component.button to be an object', function() {
                expect(ui.component.button).to.be.an('Object');
            }),

            it('expect ui.component.button.render to be a string', function() {

                inputElement = ui.component.button.render(button);
                expect(inputElement).to.be.a('string');
            }),

            it('expect ui.component.button.render to be equal with expected', function() {

                expected = '<button class="hap" id="test" name="test" type="button" value="test" onclick="test">test</button>';
                inputElement = ui.component.button.render(button);
                assert.equal(inputElement, expected);
            });
    });
})();