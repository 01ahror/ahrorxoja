let input = document.querySelector(".input")
let info = document.querySelector(".info")
//let btn = document.querySelector(".btn")




fetch(`https://raw.githubusercontent.com/diyor011/apibest/master/api.json`)
    .then(res => res.json())
    .then(data => {

        data.map(item => {

            let card = document.createElement("div");
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");

            img.src = item.pic;
            h2.textContent = item.name;
            p1.textContent = item.price;
            p2.textContent = item.fulldesc;

            card.appendChild(img);
            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);


            info.appendChild(card);







        });

        input.addEventListener("change", function () {
            info.innerHTML = ""
            new_arr = data.filter(item => item.name.toLowerCase().includes(input.value))
            new_arr.map((item) => {
                let card = document.createElement("div");
                card.classList.add("card");
                let h2 = document.createElement("h2");
                let img = document.createElement("img");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");

                img.src = item.pic;
                h2.innerHTML = item.name;
                p1.innerHTML = item.price;
                p2.innerHTML = item.fulldesc;
                card.append(img, h2, p1, p2);
                info.appendChild(card);

            }

            )

        })

    })


