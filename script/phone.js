const loodPhone = async (search) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${search}`
  );
  const data = await response.json();
  const phone = data.data;
  phoneLood(phone);
};
loodPhone();

const phoneLood = (phones) => {
  const phoneContainer = document.getElementById("phone_container");
  phoneContainer.textContent =''
  const btn =document.getElementById('More_show');
  if(phones.length >12 ){
    
    btn.classList.remove('hidden')
  }
  else{
    btn.classList.add('hidden')
  }
  phones = phones.slice(0,12)
  phones.forEach((phone) => {
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
              <h2 class="card-title">${phone.phone_name}}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary w-2/3 ">Show More</button>
              </div>
            </div>
    `;
    phoneContainer.appendChild(phoneCard)
  });
};

function searchFild(){
  const input = document.getElementById('inputFild');
  const inputText = input.value;
  loodPhone(inputText)
 
}
