
window.addEventListener("load", function (){
    console.log ("document loaded");
    let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function(){
        let testName = document.getElementById("testName");
        let testDate = document.getElementById("testDate");
        let rocketType = document.getElementById('rocketType');
        let numBoosters = document.getElementById('numBoosters');
        let r1 = document.getElementById('r1').checked;
        let r2 = document.getElementById('r2').checked;
        let r3 = document.getElementById('r3').checked;
        let productionGrade = document.getElementById('productionGrade').checked;
        if (testName.value === ""||testDate.value===""||rocketType.value===""||(r1===false&&r2===false&&r3===false)||numBoosters.value===""||productionGrade===false){
            alert("All values MUST be assigned");
            event.preventDefault();
        }
    })
})
