const result = document.querySelector('.load')
const filter = document.querySelector('.inp')
const about = []
getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const link = await fetch('https://randomuser.me/api?results=50')

    const { results } = await link.json()
    result.innerHTML = ''
    results.forEach(user => {
        const li = document.createElement('li')
        about.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="persons">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>`
        result.appendChild(li)
    })
}

function filterData(search) {
  about.forEach(e => {
        if(e.innerText.toLowerCase().includes(search.toLowerCase())) {
            e.classList.remove('stuff')
        } else {
            e.classList.add('stuff')
        }
    })
}

// ushbu kod fetch API dan 50 ta tasodifiy foydalanuvchi objectlarini oladi va ularni ro'yxatda korsatadi. va u foydalanuvchiga qidiruv sozlari asosida royxatni filtrlash imkonini beruvchi qidiruv filtri funksiyasini taqdim etadi.