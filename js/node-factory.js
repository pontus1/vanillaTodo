// icons
var editIcon = document.createElement('span');
editIcon.classList.add('glyphicon');
editIcon.classList.add('glyphicon-pencil');

var checkIcon = document.createElement('span');
checkIcon.classList.add('glyphicon');
checkIcon.classList.add('glyphicon-ok');

var deleteIcon = document.createElement('span');
deleteIcon.classList.add('glyphicon');
deleteIcon.classList.add('glyphicon-trash');

var uncheckIcon = document.createElement('span');
uncheckIcon.classList.add('glyphicon');
uncheckIcon.classList.add('glyphicon-backward');

/**
 * Create a new button with class btn, containing
 * a span with an icon
 *
 * @param  {object} {string}    the icon or text to be added
 * @return {object}             a BUTTON-node
 */
function createBtn (content) {
    var btn = document.createElement('button');

    if (typeof content === 'object') {
        btn.appendChild(content.cloneNode());
    } else {
        btn.innerHTML = content;
    }

    btn.classList.add('btn');
    return btn;
}
