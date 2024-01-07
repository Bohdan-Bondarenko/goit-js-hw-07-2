const allLi = document.querySelectorAll(".items");
console.log(`Number of categories: ${allLi.length}`);

allLi.forEach((item) => {
    const titleLi = item.querySelector("h2").textContent;
    const elemLi = item.querySelectorAll("ul li").length;

    console.log(`Category: ${titleLi}`);
    console.log(`Elements: ${elemLi}`);

})
   