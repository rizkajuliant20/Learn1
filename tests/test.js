import {Selector} from 'testcafe';

                        
fixture `Getting Started`// declare the fixture
    .page `http://rngg.my.id`;

    //then create a test and place your code there
    test('Rangga Web Test', async t => {
        await t
            .expect(Selector('#js-btn_primary').innerText).eql('Primary')
            .click(Selector('[href="form-validation.html"]'))
            .wait(3000)
    });
