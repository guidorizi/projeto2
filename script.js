window.alert("Seja bem-vindo");

confirm("Escolha sua cidade\n");

async function getCities() {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    const cities = await response.json();
    const cityDropdown = document.getElementById("cityDropdown");
    
    cities.forEach(city => {
      const cityLink = document.createElement("a");
      cityLink.textContent = city.nome;
      cityLink.href = "#";
      cityLink.addEventListener("click", function() {
        selectCity(city.nome);
      });
      cityLink.classList.add("city-item");
      cityDropdown.appendChild(cityLink);
    });
  }
  
  function selectCity(cityName) {
    const selectedCitySpan = document.getElementById("selectedCity");
    selectedCitySpan.textContent = "Sua cidade é: " + cityName;
  }
  
  function filterCities() {
    const searchInput = document.getElementById("searchInput");
    const filter = searchInput.value.toUpperCase();
    const cityDropdown = document.getElementById("cityDropdown");
    const cities = cityDropdown.getElementsByTagName("a");
    
    for (let i = 0; i < cities.length; i++) {
      const cityName = cities[i].textContent || cities[i].innerText;
      if (cityName.toUpperCase().indexOf(filter) > -1) {
        cities[i].style.display = "";
      } else {
        cities[i].style.display = "none";
      }
    }
  }
  
  getCities();
  
