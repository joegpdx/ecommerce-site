import renderSpeakers from '../products/render-speakers.js';

const test = QUnit.test;

test('render a speaker', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const wilsonAudio = {
        id: 'Wilson Audio',
        name: 'Magnum Opus',
        image: '../assets/wilson-audio-magnum-opus.png',
        description: 'Floorstanding Loudspeaker',
        category: 'Speakers',
        price: 850000,
        Color: 'Dark Silver'
    };
    const expectedHTML = '<li class="Speakers" title="Floorstanding Loudspeaker"><h3>Magnum Opus</h3><img src="../assets/wilson-audio-magnum-opus.png" alt="Magnum Opus image"><p class="price">$850000.00<button value="Wilson Audio">Add</button></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = renderSpeakers(wilsonAudio);
    const actualHTML = result.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(actualHTML, expectedHTML);
});