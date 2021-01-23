$(document).ready(function() {
    $("button").click(function() {
        var countryName = $("input").val();
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${countryName}`,

            success: function(data, statuts, response) {
                $("#img").html(`<img src=" ${data[0].flag}  " alt="  ${data[0].name} + " width="200px"/>`)
                $("#country").html(`Country Name: ${data[0].name}`);
                $("#capital").html(`Capital Name: ${data[0].capital}`);
                $("#region").html(`Region: ${data[0].region}`);
                $("#languages").html(`Language: ${data[0].languages[0].name}`);
                $("#currencies").html(`Currency: ${data[0].currencies[0].name}`);
                $("#area").html(`Area: ${data[0].area}`);
                $("#population").html(`Population: ${data[0].population}`);
            }
        });
    });
});