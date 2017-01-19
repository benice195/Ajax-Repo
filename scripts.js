var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };
function showCountriesList(resp) {
  	countriesList.empty();
    if (resp.length === 1) {
        var singleCountry = resp[0];
        
   		$('<div id="country">').appendTo(countriesList)
           .append($('<h2>').text('Country: ' + singleCountry.name))
           .append($('<h3>').text('Country data:'))
           .append($('<li>').text('Capital: ' + singleCountry.capital))
           .append($('<li>').text('Region: ' + singleCountry.region))
           .append($('<li>').text('Population: ' + singleCountry.population))
           .append($('<li>').text('Language: ' + singleCountry.languages))
           .append($('<li>').text('Currency: ' + singleCountry.currencies))
       
        
    } else {
        resp.forEach(function(item) {
            var divCountry = $('<div id="country">');
   		    divCountry.appendTo(countriesList)
           .append($('<h2 class="show">').text('Country: ' + item.name))
           .append($('<h3>').text('Country data:'))
           .append($('<li>').text('Capital: ' + item.capital))
           .append($('<li>').text('Region: ' + item.region))
           .append($('<li>').text('Population: ' + item.population))
           .append($('<li>').text('Language: ' + item.languages))
           .append($('<li>').text('Currency: ' + item.currencies))
           $('li').hide();
           $('h3').hide();
           divCountry.click(function() {
               $(this).find('h3').show();
               $(this).find('li').show();
           });
        });
    }
};


        
        
        
        
        */