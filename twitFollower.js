/*
Twitter autofollower script 
Remember that Twitter has limits upto 400 users to follow per day
But actually can be limited by 50
Instructions
// https://twitter.com/home 
click on show more to open the window with users to follow
span 
Show more 
*/

  function selectShowMore() {
    return [...document.querySelectorAll("span")].filter(a => a.textContent.includes("Show more"))
    } 

  function cancelButton() {
    return [...document.querySelectorAll("span")].filter(a => a.textContent.includes("Cancel"))
    } 

  function selectPeopleToFollow() {
    return [...document.querySelectorAll("span")].filter(a => a.textContent.includes("Follow"))
    } 

// var showMoreButton = selectShowMore()
// console.log(showMoreButton.length)
// showMoreButton[1].click()
// showMoreButton.click()

// PEOPLE TO FOLLOW

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

 function selectPeopleToFollow() {
    return [...document.querySelectorAll("span")].filter(a => a.textContent.includes("Follow"))
    } 

async function followGroupOfPeople(minimum, maximum, elem) {

for (let i = minimum; i < maximum; i++) {
await singleClick(elem[i])
console.log(`Followed ${i} user`)
// проверяем, есть ли окно от отписки, если есть, жмем на отмену
var cancelDialogButton = cancelButton()

if (cancelDialogButton[0] != undefined) {
    await singleClick(cancelDialogButton[0])
} 

await sleep() 
}


}

async function followAllPeople() 
{
var counter = 0;


var peopleToFollow = selectPeopleToFollow() 

if (peopleToFollow.length > counter) {

followGroupOfPeople(counter, peopleToFollow.length, peopleToFollow)  
counter = peopleToFollow.length   
// await scroll() 
// peopleToFollow = selectPeopleToFollow()
}




/*
  for(var i=0;i<Number(peopleToFollow.length);i++) {

await singleClick(peopleToFollow[i])
console.log(`Followed ${i} user`)
// проверяем, есть ли окно от отписки, если есть, жмем на отмену
var cancelDialogButton = cancelButton()

if (!cancelDialogButton) {
) else {
 await singleClick(cancelDialogButton)
}

await sleep() 
counter += 1
}

*/
}



followAllPeople()