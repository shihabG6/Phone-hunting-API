const loodPhone = async (search = 13, showMore) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await response.json();
  const phone = data.data;
  phoneLood(phone, showMore);
};
loodPhone();

const phoneLood = (phones, showMore) => {
  const phoneContainer = document.getElementById("phone_container");
  phoneContainer.textContent = "";
  const btn = document.getElementById("More_show");
  if (phones.length > 12 && !showMore) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
  if (!showMore) {
    phones = phones.slice(0, 12);
  }
  phones.forEach((phone) => {
    // console.log(phone)
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 shadow-xl m-4 p-2`;

    phoneCard.innerHTML = `
              <figure>
                <img
                  src="${phone.image}"
                  alt="Shoes"
                />
              </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <h4 class="">Brand: ${phone.brand}</h4>
              <div class="card-actions justify-center">
                <button onclick="moreDetails('${phone.slug}')" class="btn btn-primary w-2/3 ">Show More</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
  loddedData(false);
};

function searchFild(showMore) {
  loddedData(true);
  const input = document.getElementById("inputFild");
  const inputText = input.value;
  loodPhone(inputText, showMore);
}

function loddedData(islodded) {
  const lood = document.getElementById("lodded");
  if (islodded) {
    lood.classList.remove("hidden");
  } else {
    lood.classList.add("hidden");
  }
}

const showMore = () => {
  searchFild(true);
};

const moreDetails = async (id) => {
  // console.log(id)
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const pureData = data.data;
  showModatDetails(pureData);
};

// <p><span class="font-medium">Storage:</span>${}</p>
const showModatDetails = (phone) => {
  console.log(phone);
  phone_modal_details.showModal();
  const phoneContainer = document.getElementById("details_container");
  phoneContainer.innerHTML = `
  <div class="w-full flex justify-center">
  <img src="${phone.image}" alt="" class="mb-4 bg-gray-200 px-20 py-10 rounded-lg" >
  </div> 
  <h2 class="text-3xl font-medium mb-6">${phone.name}</h2>
  <p><span class="font-medium mb-4">Storage: </span>${phone.mainFeatures.storage}</p>
  <p><span class="font-medium mb-4">Display: </span>${phone.mainFeatures.displaySize}</p>
  <p><span class="font-medium mb-4">Memory : </span>${phone.mainFeatures.memory}</p>
  <p><span class="font-medium mb-4">Slug : </span>${phone.slug}</p>
  <p><span class="font-medium mb-4">Release Date : </span>${phone.releaseDate}</p>
  <p><span class="font-medium mb-4">Brand : </span>${phone.brand}</p>
  <p><span class="font-medium mb-4">GPS : </span>${phone.others.GPS}</p>

  <form method="dialog" class="mt-10 flex justify-end">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
  </form>
  `;
};
