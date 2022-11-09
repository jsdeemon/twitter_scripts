/*

Twitter autoliker script
Open https://twitter.com/home 

push F12
paste code to console
press Enter

*/

async function scroll() {
    return new Promise(resolve => {
        setTimeout(() => {
            window.scrollTo(0,  document.body.scrollHeight)
            console.log("SCROLL")
            resolve()
            }, Math.floor(Math.random() * 10000));
    })
    } 

async function sleep() {
        return new Promise(resolve => {
            setTimeout(() => {
             console.log("sleeped")
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 

async function singleClick(elem) {
        return new Promise(resolve => {
            setTimeout(() => {
                elem.click()
                resolve()
            }, Math.floor(Math.random() * 10000))
        })
    } 


    async function likeAllPosts() {
        var x = prompt("Enter maximum numbers of likes", "0");
        for (var j = 1; j < parseInt(x); j++) {
            var input = document.querySelectorAll('[data-testid="like"]');
            for (var i = 0; i < input.length; i++) {
                await singleClick(input[i]);
                console.log(`Post ${i} was liked`);
                await sleep();
             window.scrollBy(0, 600); 
          }}
    }

likeAllPosts();





// for (var j = 1; j < 1000; j++) {
//     var input = document.querySelectorAll('[data-testid="like"]');
//     for (var i = 0; i < input.length; i++) {
//      input[i].click();
//      window.scrollBy(0, 600); 
//   }}