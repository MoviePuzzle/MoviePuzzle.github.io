var dataId = null;
var userId = "";
var testData = null;
var hist = new Array();

const defaultData = [{
    "image": "https://via.placeholder.com/500x500.png?text=1",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=2",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=3",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=4",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=5",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=6",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=7",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=8",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=9",
    "text": ["A: ABC", "B: DEF"]
}, {
    "image": "https://via.placeholder.com/500x500.png?text=10",
    "text": ["A: ABC", "B: DEF"]
}]
init();

$(function () {
    $("#imageListId").sortable({
        update: function (event, ui) {
            getIdsOfImages();
        }//end update         
    });

});

function init() {
    userId = getUUId(8);
    console.log(userId);

    fetch('./game/game_data.json.example')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        testData = JSON.parse(JSON.stringify(json));
        dataId = 0;
        renderData(testData[dataId]["content"]);
        if (dataId < testData.length - 1) {
            $("#nextBtn").prop("disabled", false);
        }
        $("#submitBtn").prop("disabled", false);
    })
    .catch(err => {
        console.log(err);
        renderData(defaultData);
    })

    // renderData(defaultData);
}

function renderData (data) {
        $('#imageListId').empty();
        $.each(data, (index, ele) => {
        var newDiv = '<div id="imageNo' + (index + 1) + '" class = "listitemClass">';
        newDiv += '<img class="img" src="' + ele["image"] + '" alt="">';
        ele["text"].forEach(txt => {
            newDiv += '<p>' + txt + '</p>';
        });
        newDiv += '</div>';
        $('#imageListId').append(newDiv);
    });
    getIdsOfImages();
};



function updateHistory() {
    var values = [];
    $('.listitemClass').each(function (index) {
        values.push($(this).attr("id")
            .replace("imageNo", ""));
    });

    hist.push({
        userId: userId,
        dataId: testData[dataId]["id"],
        values: values
    });
    console.log(hist);

}

function JumpNext() {
    updateHistory();
    dataId += 1;
    if (dataId < testData.length) {
        renderData(testData[dataId]["content"]);
        if (dataId + 1 >= testData.length) {
            $('#nextBtn').prop('disabled', true);
        }
    }
}

function Submit() {
    updateHistory();
    var json = JSON.stringify(hist);
    var blob = new Blob([json], {type : "text/plain;charset=utf-8"});
    const filename = "response_" + userId + ".json";
    var isIE = false || !!document.documentMode;
    if (isIE) {
        window.navigator.msSaveBlob(blob, filename);
    }  else {
        var url = window.URL || window.webkitURL;
        var link = url.createObjectURL(blob);
        var a = $("<a />");
        a.attr("download", filename);
        a.attr("href", link);
        $("body").append(a);
        a[0].click();
        $("body").remove(a);
    }

}

function getIdsOfImages() {
    var values = [];
    $('.listitemClass').each(function (index) {
        values.push($(this).attr("id")
            .replace("imageNo", ""));
    });

    $('#outputvalues').val(values);
}

function getUUId(len, radix) {
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var chars = CHARS, uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
}