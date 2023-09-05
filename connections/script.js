const listOfCategoriesContainer = document.querySelector("#listOfCategoriesContainer");

const getListOfCategories = async () => {
  const response = await fetch("../events.json");
  const data = await response.json();
  if (Object.keys(data).length > 0) {
    
    const availableCategories = new Set();

    data.forEach(it => availableCategories.add(it.category));

    const container = document.createElement("div");
    const header = document.createElement("h1");
    header.innerHTML = "Categories in I-Meet";
    container.appendChild(header);
    
    for (const category of availableCategories) {
       
      const title = document.createElement("h2");
      title.innerHTML = category;

      const listOfCategoriesElement = document.createElement("ul");
      listOfCategoriesElement.classList.add("lead");

      for (const events of data) {
       if(events.category === category){
        const categoryElement = document.createElement("li");
        categoryElement.innerHTML = `
            <a href="../event/event.html?id=${events?.id}">${events?.title}</a>
            `;
        listOfCategoriesElement.appendChild(categoryElement);
       }
      }

      container.appendChild(title);
      container.appendChild(listOfCategoriesElement);

    }
    listOfCategoriesContainer.appendChild(container);
  }
};

getListOfCategories();