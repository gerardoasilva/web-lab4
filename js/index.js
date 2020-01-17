function addItem(){
    $('form').submit(function (e) { 
        e.preventDefault();
        
        if( $('input').val() != "" ){
            $('ul').append(`<li>
                                <p>${ $('input').val() }</p>
                                <button class="check-btn">Check</button>
                                <button class="delete-btn">Delete</button>
                            </li>`);
            $('input').val("");
        }
    });
}

function checkItem() {
    $('ul').on('click', '.check-btn', function (e) {
        e.preventDefault();
        $(this).prev().toggleClass("checked");
    });
}

function removeItem() {
    $('ul').on('click', '.delete-btn', function (e) {
        $(this).parent().remove();

    });
}

function init() {
    addItem();
    checkItem();
    removeItem();
}

init();