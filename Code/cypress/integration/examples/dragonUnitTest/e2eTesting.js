// describe('outline', function() {
//     it('Outline', function() {
//         cy.visit('https://18020778.github.io/Dragon/Code/Outline/Outline.html');
//         cy.wait(3000);
//         cy.get('div.introduction').click();
//     });
//  })
//  describe('bai1', function() {
//      it('start', function() {
//          cy.visit('https://18020778.github.io/Dragon/Code/Introduction/introduction.html');
//          cy.wait(1000);
//          cy.get('#start').click({force: true});
//          cy.wait(1000);
//          cy.get('#chooseLanguage').click();
//          cy.wait(1000);
//          cy.get('#hindi').click();
//          cy.wait(1000);
//          cy.get('#chooseLanguage').click();
//          cy.wait(1000);
//          cy.get('.Language').contains('English').click();
//          cy.wait(1000);
//      })
//      it('run 1.1', function() {
//          cy.get('#micro_top').click();
//          cy.wait(2000);
//          cy.get('#giraffeScreen1').trigger('mousedown');
//          cy.get('#giraffeScreen1').trigger('mouseleave');
//          cy.wait(8000);
//          cy.get('#giraffeScreen1').trigger('mouseup', {pageX: 175, pageY: 203});
//          cy.get('#micro_bottom').click();
//          cy.wait(3000);
//          cy.get('#button_next').click({force: true});
//          cy.wait(3000);
//      })
//      it('run 1.2', function() {
//          cy.get('#micro_top').click();
//          cy.wait(2000);
//          cy.get('#giraffeScreen2').trigger('mousedown');
//          cy.get('#giraffeScreen2').trigger('mouseleave');
//          cy.wait(5000);
//          cy.get('#giraffeScreen2').trigger('mouseup', {pageX: 380, pageY: 420});
//          cy.get('#micro_bottom').click();
//          cy.wait(3000);
//          cy.get('#button_next').click({force: true});
//          cy.wait(3000);
//      })
//      it('run 1.3', function() {
//          cy.get('#micro_top').click();
//          cy.wait(2000);
//          cy.get('#childScreen3').trigger('mousedown');
//          cy.get('#childScreen3').trigger('mouseleave');
//          cy.wait(5000);
//          cy.get('#childScreen3').trigger('mouseup', {pageX: 580, pageY: 430});
//          cy.get('#micro_bottom').click();
//          cy.wait(3000);
//          cy.get('#button_next').click({force: true});
//          cy.wait(3000);
//      })
//      it('run 1.4', function() {
//          cy.get('#micro_top').click();
//          cy.wait(2000);
//          cy.get('#childScreen4').trigger('mousedown');
//          cy.get('#childScreen4').trigger('mouseleave');
//          cy.wait(5000);
//          cy.get('#childScreen4').trigger('mouseup', {pageX: 380, pageY: 420});
//          cy.get('#micro_bottom').click();
//          cy.wait(3000);
//          cy.get('#button_next').click({force: true});
//     })
// })
// describe('congrat', function(){
//     it('runCongrat', function() {
//         cy.visit('https://18020778.github.io/Dragon/Code/Outline/Congrat.html');
//         cy.wait(3000);
//         cy.get('.complete-button').click();
//     })
//     it('outline2', function(){
//         cy.wait(3000);
//         cy.get('div.placeAnimal').click();
//     })
// })

describe('bai 2', function() {
   it('start2',function() {
        cy.wait(2000);
        cy.get('#start').click({force: true});
        cy.wait(2000);
    })
    it('run 2.1', function(){
        cy.get('#micro_top').click({force: true});
        cy.wait(4000);
        cy.get('#raccoon').trigger('mousedown');
        cy.get('#raccoon').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#raccoon').trigger('mouseup', {pageX: 480, pageY: 280});
        cy.wait(5000);

        cy.get('#micro_top').click({force: true});
        cy.wait(4000);
        cy.get('#wolf').trigger('mousedown');
        cy.get('#wolf').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#wolf').trigger('mouseup', {pageX: 750, pageY: 280});
        cy.wait(5000);
        cy.get('#wolf').trigger('mousedown');
        cy.get('#wolf').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#wolf').trigger('mouseup', {pageX: 190, pageY: 280});
        cy.wait(5000);

        cy.get('#micro_top').click({force: true});
        cy.wait(4000);
        cy.get('#owl').trigger('mousedown');
        cy.get('#owl').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#owl').trigger('mouseup',{pageX: 760, pageY: 280});
        cy.wait(5000);
    })
    it('run 2.2', function(){
        cy.get('#micro_top').click({force: true});
        cy.wait(4000);
        cy.get('#orange').trigger('mousedown');
        cy.get('#orange').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#orange').trigger('mouseup', {pageX: 750, pageY: 280});
        cy.wait(5000);

        cy.get('#micro_top').click({force: true});
        cy.wait(4000);
        cy.get('#grapes').trigger('mousedown');
        cy.get('#grapes').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#grapes').trigger('mouseup', {pageX: 480, pageY: 280});
        cy.wait(5000);
        cy.get('#grapes').trigger('mousedown');
        cy.get('#grapes').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#grapes').trigger('mouseup', {pageX: 330, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#pear').trigger('mousedown');
        cy.get('#pear').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#pear').trigger('mouseup', {pageX: 50, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#watermelon').trigger('mousedown');
        cy.get('#watermelon').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#watermelon').trigger('mouseup', {pageX: 480, pageY: 280});
        cy.wait(5000);
    })
    it('run 2.3', function(){
        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#cup').trigger('mousedown');
        cy.get('#cup').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#cup').trigger('mouseup', {pageX: 330, pageY: 280});
        cy.wait(5000);
        cy.get('#cup').trigger('mousedown');
        cy.get('#cup').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#cup').trigger('mouseup', {pageX: 190, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#ice-cream').trigger('mousedown');
        cy.get('#ice-cream').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#ice-cream').trigger('mouseup', {pageX: 610, pageY: 280});
        cy.wait(5000);
        cy.get('#ice-cream').trigger('mousedown');
        cy.get('#ice-cream').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#ice-cream').trigger('mouseup', {pageX: 330, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#fruice').trigger('mousedown');
        cy.get('#fruice').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#fruice').trigger('mouseup', {pageX: 610, pageY: 280});
        cy.wait(5000);
    })
    it('run 2.4', function(){
        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#bear4').trigger('mousedown');
        cy.get('#bear4').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#bear4').trigger('mouseup', {pageX: 610, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#raccoon4').trigger('mousedown');
        cy.get('#raccoon4').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#raccoon4').trigger('mouseup', {pageX: 480, pageY: 280});
        cy.wait(5000);
        cy.get('#raccoon4').trigger('mousedown');
        cy.get('#raccoon4').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#raccoon4').trigger('mouseup', {pageX: 190, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#fox4').trigger('mousedown');
        cy.get('#fox4').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#fox4').trigger('mouseup', {pageX: 330, pageY: 280});
        cy.wait(2000);

        cy.get('#micro_top').click({force: true});
        cy.wait(2000);
        cy.get('#rabbit4').trigger('mousedown');
        cy.get('#rabbit4').trigger('mouseleave');
        cy.wait(5000);
        cy.get('#rabbit4').trigger('mouseup', {pageX: 480, pageY: 280});
        cy.wait(4000);
    })
})
describe('congrat2', function(){
    it('runCongrat', function() {
        cy.visit('https://18020778.github.io/Dragon/Code/Outline/Congrat.html');
        cy.wait(3000);
        cy.get('.complete-button').click();
    })
})
