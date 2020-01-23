import speakers from '../data/speakers.js';
import carts from '../data/carts.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

test('find by ID', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'Wilson Audio';
    const expected = 'Wilson Audio';
    //Act 
    // Call the function you're testing and set the result to a const
    const foundSpeaker = findById(speakers, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.ok(foundSpeaker);
    assert.equal(foundSpeaker.id, expected);
});

test('calculate line Item', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 850000.00;
    const expected = 2550000.00;
    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(total, expected);
});

test('calculate order total', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 1527999;
    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcOrderTotal(carts, speakers);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(total, expected);
});