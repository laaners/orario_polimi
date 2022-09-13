[
    {
        "name": "DESIGN AND IMPLEMENTATION OF MOBILE APPLICATIONS",
        "list": [
            {
                "label": "WEBEX (BARESI LUCIANO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=7528"
            },
            {
                "label": "OLD WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=910"
            },
            {
                "label": "OLD PLAYLIST",
                "src": "https://www.youtube.com/playlist?list=PLF4udTOd6fde39Es8Bxl0CCMkvvHHCjlR"
            },
            {
                "label": "OLD GITHUB",
                "src": "https://github.com/gioenn/dima"
            }
        ],
        "notes": [
            "MONDAY 9:30-11:00",
            "THURSDAY 8:30-10:00"
        ]
    },
    {
        "name": "IMAGE ANALYSIS AND COMPUTER VISION",
        "list": [
            {
                "label": "WEBEX (CAGLIOTI VINCENZO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=7868"
            }
        ],
        "notes": []
    },
    {
        "name": "NUMERICAL ANALYSIS",
        "list": [
            {
                "label": "WEBEX (PEROTTO SIMONA)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=8537"
            }
        ],
        "notes": []
    },
    {
        "name": "ARTIFICIAL NEURAL NETWORKS AND DEEP LEARNING",
        "list": [
            {
                "label": "WEBEX (MATTEUCCI MATTEO)",
                "src": ""
            },
            {
                "label": "WEBEEP",
                "src": "https://webeep.polimi.it/course/view.php?id=8151"
            },
            {
                "label": "REGISTRAZIONI PASSATE",
                "src": "an2dl.html"
            },
            {
                "label": "SITO PASSATO",
                "src": "http://chrome.deib.polimi.it/index.php?title=Artificial_Neural_Networks_and_Deep_Learning"
            }

        ],
        "notes": []
    }
].forEach((course) => {
    let toAppend = `<p>${course.name}</p><ul>`;
    course.list.forEach((item) => {
        toAppend += `<li><a href="${item.src}" target="_blank">${item.label}</a></li>`
    });
    if(course.notes.length != 0) {
        toAppend += "<ul>";
        course.notes.forEach((note) => {
            toAppend += `<li>${note}</li>`
        });
        toAppend += "</ul>";
    }
    toAppend += "</ul>";
    document.querySelector("#list").innerHTML += toAppend;
});