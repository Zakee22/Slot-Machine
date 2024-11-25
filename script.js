



// Global variables
var startSeqs = {}; // Track spinning sequences
var startNum = 0; // Counter for main sequences
var grantedNumbers = new Set(); // Track already granted special numbers

// Map index to image filenames for matching
let imageMap = [
    "images/MyAbans.png",
    "images/Store.png",
    "images/Bag.png",
    "images/Cart.png",
    "images/Motorola.png",
    "images/Abans TV.png",
    "images/Mistral-Oven.png",
    "images/Sudio.png",
    "images/Abans Sandwich Maker.png"
];

// Probability configuration for specific symbols
let specialSymbolProbability = {
    "images/Motorola.png": 1,
    // "images/Abans TV.png": 1,
    // "images/Mistral-Oven.png": 1,
    // "images/Sudio.png": 1,
    // "images/Abans Sandwich Maker.png": 1
};

// Extract readable names for special symbols
let symbolNameMap = {
    "images/Motorola.png": "Motorola Phone",
    "images/Abans TV.png": "Abans 19' TV",
    "images/Mistral-Oven.png": "Mistral 23l Electric Oven",
    "images/Sudio.png": "Sudio A1 Pro",
    "images/Abans Sandwich Maker.png": "Abans 3 in 1 Sandwich Maker"
    
};

// Function to determine if a special symbol should be shown
function getSpecialSymbol() {
    const availableSymbols = Object.entries(specialSymbolProbability).filter(
        ([symbol]) => !grantedNumbers.has(symbol)
    );

    if (availableSymbols.length === 0) return null;

    const totalProbability = availableSymbols.reduce(
        (sum, [, probability]) => sum + probability,
        0
    );
    const threshold = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (const [symbol, probability] of availableSymbols) {
        cumulativeProbability += probability;
        if (threshold <= cumulativeProbability) {
            return symbol;
        }
    }

    return null;
}

// Helper function to generate random image symbols
function generateRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * imageMap.length);
    return imageMap[randomIndex];
}

// Updated playSpin function to handle symbols
$.fn.playSpin = function (options) {
    if (this.length) {
        if ($(this).is(':animated')) return;

        startSeqs['mainSeq' + (++startNum)] = {};
        $(this).attr('data-playslot', startNum);

        const total = this.length;
        let thisSeq = 0;

        const specialSymbol = getSpecialSymbol();
        const endSymbols = specialSymbol
            ? new Array(this.length).fill(specialSymbol)
            : Array.from({ length: this.length }, () => generateRandomSymbol());

        if (specialSymbol) {
            grantedNumbers.add(specialSymbol);
        }

        startSeqs['mainSeq' + startNum]['totalSpinning'] = total;

        return this.each(function () {
            options = options || {};
            options.endSymbol = endSymbols[thisSeq];
            startSeqs['mainSeq' + startNum]['subSeq' + (++thisSeq)] = {};
            startSeqs['mainSeq' + startNum]['subSeq' + thisSeq]['spinning'] = true;

            const track = {
                total: total,
                mainSeq: startNum,
                subSeq: thisSeq,
            };

            new slotMachine(this, options, track);
        });
    }
};

// Slot machine constructor updated to use symbols
const slotMachine = function (el, options, track) {
    const slot = this;
    slot.$el = $(el);

    slot.defaultOptions = {
        easing: 'swing',
        time: 3000,
        loops: 6,
        endSymbol: imageMap[0],
        onEnd: $.noop,
        onFinish: $.noop,
    };

    slot.init = function () {
        slot.options = $.extend({}, slot.defaultOptions, options);
        slot.setup();
        slot.startSpin();
    };

    slot.setup = function () {
        slot.liHeight = slot.$el.find('li').first().innerHeight();
        slot.liCount = slot.$el.find('li').length;
        slot.listHeight = slot.liHeight * slot.liCount;

        const $li = slot.$el.find('li').first();
        $li.clone().appendTo(slot.$el);
    };

    slot.startSpin = function () {
        slot.$el
            .css('top', -slot.listHeight)
            .animate({ top: '0px' }, slot.options.time / slot.options.loops, 'linear', function () {
                slot.endSpin();
            });
    };

    slot.endSpin = function () {
        const symbolIndex = imageMap.indexOf(slot.options.endSymbol);
        const finalPos = -(slot.liHeight * symbolIndex);

        slot.$el
            .css('top', -slot.listHeight)
            .animate({ top: finalPos }, slot.options.time, slot.options.easing, function () {
                slot.endAnimation(slot.options.endSymbol);
                startSeqs['mainSeq' + track.mainSeq]['totalSpinning'] -= 1;

                if (startSeqs['mainSeq' + track.mainSeq]['totalSpinning'] === 0) {
                    displayResult();
                }
            });
    };

    slot.endAnimation = function (endSymbol) {
        startSeqs['mainSeq' + track.mainSeq]['subSeq' + track.subSeq]['endSymbol'] = endSymbol;
    };

    slot.init();
};

// Display the result and check for winning conditions
function displayResult() {
    const results = Object.values(startSeqs['mainSeq' + startNum])
    .filter(seq => typeof seq.endSymbol === 'string')
    .map(seq => seq.endSymbol);

const resultText = `Your result is:<br>${results.map(r => r.split('/').pop().replace('.png', '')).join(', ')}`;
const resultContainer = $('#result-display');

if (resultContainer.length) {
    resultContainer.html(resultText);  // Use .html() to insert HTML content
} else {
    $('<div id="result-display"></div>')
        .html(resultText)  // Use .html() to insert HTML content
        .css({
            'text-align': 'center',
            'margin-top': '20px',
            'font-size': '20px',
            'color': 'white',
            'background-color' : '#0E112E'
        })
        .appendTo('.mainContainer');
}


    // Check if all results are identical and match a special symbol
    if (
        results.length === 3 &&
        results[0] === results[1] &&
        results[1] === results[2] &&
        specialSymbolProbability[results[0]]
    ) {
        const winningIconName = symbolNameMap[results[0]]; // Extract the readable name
        showWinningFormPopup(results[0], winningIconName);
    }
}

// Popup logic
function showWinningFormPopup(winningSymbol, winningIconName) {
    // Update popup content
    $('#winner-form-popup h3').text(`Congratulations! You Won a ${winningIconName}!`);

    // Add a non-editable input for the winning icon
    const iconField = $('#winner-icon-field');
    if (iconField.length === 0) {
        // Add the field dynamically if not already present
        $('<label for="winner-icon">Winning Icon:</label><br>')
            .insertBefore('#submit-winner-form');
        $('<input type="text" id="winner-icon-field" name="winner-icon" readonly><br><br>')
            .insertBefore('#submit-winner-form');
    }

    // Set the value of the field
    $('#winner-icon-field').val(winningIconName);

    $('#winner-form').off('submit').on('submit', function (event) {
        event.preventDefault();

        // Get the values of all form fields
        var winnerName = $('#winner-name').val();
        var winnerMobile = $('#winner-mobile').val();
        var winnerEmail = $('#winner-email').val();
        var winnerIcon = $('#winner-icon-field').val(); // This will already be set with the winning icon

        // Prepare the data to send to Google Sheets
        var formData = {
            winnerName: winnerName,
            winnerMobile: winnerMobile,
            winnerEmail: winnerEmail,
            winnerIcon: winnerIcon
        };

        // URL of your Google Apps Script Web App (replace with the URL you got from Apps Script)
        var scriptURL = "https://script.google.com/macros/s/AKfycbx6Z4L-VKdPcbVW7MG9KLCdv7dDKit3IQG2bldBfIVjXAKqJbf3eGnDEveX2JxFdrEf/exec";  // Replace with your actual script URL

        // Send form data to Google Apps Script using AJAX (POST request)
        $.ajax({
            url: scriptURL,
            type: "POST",
            data: formData,
            success: function(response) {
                alert('Form submitted successfully!');
                removeWinningSymbol(winningSymbol); // Assuming you have a function to do that
                $('#winner-form-popup').fadeOut();  // Close the popup
            },
            error: function() {
                alert('There was an error submitting the form.');
            }
        });
    });

    // Show the popup
    $('#winner-form-popup').fadeIn();
}

// Remove the winning symbol from game
function removeWinningSymbol(winningSymbol) {
    // Remove the symbol from all configurations
    delete specialSymbolProbability[winningSymbol];
    delete symbolNameMap[winningSymbol];
    imageMap = imageMap.filter(symbol => symbol !== winningSymbol);

    // Remove the symbol from the UI
    $('.slotwrapper ul li img').each(function () {
        if ($(this).attr('src') === winningSymbol) {
            $(this).closest('li').remove();
        }
    });
}


// Start spin
$('#btn-example1').click(function () {
    $('#example1 ul').playSpin();
});






