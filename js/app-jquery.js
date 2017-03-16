$(function() {

    // example - first (on change)
    var input_name = $('input[name=name]');

    input_name.on('change', function() {
        var name = $(this).val();
        $('#name').html(name);
    });

    // example: 1 - on click
    var weather = {
        city: "Cebu",
        degree: 28,
        description: "Partly cloudy to cloudy"
    }

    $('#get-weather').click(function(e) {
        e.preventDefault();
        var result = '';

        result += '<b>City:</b> ' + weather.city + '<br>';
        result += '<b>Degree:</b> ' + weather.degree + '%<br>';
        result += '<b>Description:</b> ' + weather.description + '<br>';

        $('.weather-result').html(result).fadeIn();
    });

    // example: 2 - on click
    var quotes = [
        "Fast codes is not important. Fast user experience is important.",
        "It's not the end until you've given up.",
        "Tears clean the windows of your soul.",
        "DWYL. Don't waste your life.",
        "Limits and fears are often just an illusion.",
        "Believe something different would happened."
    ];

    $('#get-quote').click(function(e) {
        e.preventDefault();
        var rand_index = Math.floor(Math.random() * (4 - 1) + 1);
        $('.quote').html(quotes[rand_index]);
    });

    // example 3 - string/array manipulation
    $('input[name=p-languages]').on('keyup', function() {
        var languages = $(this).val().split(",");
        var output = languages.map(function(lang) {
            return lang.trim() !='' ? '<li>'+lang.trim()+'</li>' : '';
        });

        $('.languages').html('<ul>'+output.join('').toUpperCase()+'</ul>');
    });
});