let generate_btn = document.querySelector(".generate_btn");
generate_btn.addEventListener("click", fetchpics);

function fetchpics() {

    fetch("https://api.thecatapi.com/v1/breeds")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(result) {
            displayData(result);
        })
        .catch(function(error) {
            console.log(error);
        });

    function displayData(data) {
        let container = document.querySelector(".container");
        let row = document.createElement("div");
        row.setAttribute("class", "row");

        data.forEach((values) => {
            let column = createMyElement("div", "col-sm-12 col-md-6 col-lg-3 col-xl-4");

            let card = createMyElement("div", "card");
            card.style.border = "1px dashed black"
            card.style.padding = "10px"
            card.style.backgroundColor = "azure"

            let img = createMyElement("img", "card-img-top");


            let cardBody = createMyElement("div", "card-body");


            let h5Tag = createMyElement("h5", "card-title");
            h5Tag.innerHTML = values.name;



            h5Tag.style.backgroundColor = "red";
            h5Tag.style.textAlign = "center";

            let pTag = createMyElement("p", "card-text");
            pTag.innerHTML =
                "<b> Region:</b>" +
                values.origin +
                "<br> <b>Description:</b>" +
                values.description;

            cardBody.append(h5Tag, pTag);

            card.append(img, cardBody);

            column.append(card);

            row.append(column);
            container.append(row);
        });
    }

    function createMyElement(elem, elemClass = "", elemId = "") {
        let element = document.createElement(elem);
        element.setAttribute("class", elemClass);
        element.setAttribute("id", elemId);
        return element;
    }
}