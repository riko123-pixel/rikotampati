const friendLists = document.getElementById("friend_list");

const element  = (i) => {
  return `
      <li>
        <figure class="card">
          <div class="card_header">
            <div class="card_image">
              <img src="${i.fotoformal}" alt="${i.nama}" width="100%">
            </div>
            <div class="card_description">
              <span>${i.nama}</span>
              <span>${parseInt(i.nim)}</span>
            </div>
          </div>
          <figcaption class="card_content">
            <span>TTL : ${i.ttl}</span>
            <span>Alamat : ${i.alamat}</span>
            <span>NoHP : ${i.no}</span>
          </figcaption>
        </figure>
      </li>
    `
}

async function Load() {
  let  data = await fetch('./data.json')
  data = await data.json()
  let comp = ""
  data.forEach( i => {
    comp += element(i);
  })
  friendLists.innerHTML = comp
}

Load()