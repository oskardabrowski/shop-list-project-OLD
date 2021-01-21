$('.btn').on('click', function() {
    $('.new-item-form')
    .not(':animated')
    .slideToggle()
})

var $listUl = $('ul.items-ul');
var $listUlImportant = $('ul.important');
var $listUlSemiImportant = $('ul.semi-important');
var $listUlLowImportant = $('ul.low-important');
var $listUlNoType = $('ul.no-type');
var $newItem = $('.type-form');


$newItem.on('submit', function(e) {
    e.preventDefault();
    var itemName = $(".item-name").val();
    var type = $(".select-imp").val();
    if (type == 'important') {
        $listUlImportant.append('<li class="' + type + '"><div class="p-div"><p class="new-item-name">' + itemName + '</p></div><div class="remove-container"><img  class="del-btn" src="img/Deleate.png"></div></li>');
        itemName = $(".item-name").val('');
        $('.btn').click();
    } else if (type == 'semi-important') {
        $listUlSemiImportant.append('<li class="' + type + '"><div class="p-div"><p class="new-item-name">' + itemName + '</p></div><div class="remove-container"><img  class="del-btn" src="img/Deleate.png"></div></li>');
        itemName = $(".item-name").val('');
        $('.btn').click();
    } else if (type == 'low-important') {
        $listUlLowImportant.append('<li class="' + type + '"><div class="p-div"><p class="new-item-name">' + itemName + '</p></div><div class="remove-container"><img  class="del-btn" src="img/Deleate.png"></div></li>');
        itemName = $(".item-name").val('');
        $('.btn').click();
    } else if (type == 'no-type') {
        $listUlNoType.append('<li class="' + type + '"><div class="p-div"><p class="new-item-name">' + itemName + '</p></div><div class="remove-container"><img  class="del-btn" src="img/Deleate.png"></div></li>');
        itemName = $(".item-name").val('');
        $('.btn').click();
    }
})

$('.items-ul').on('click', '.remove-container', function(e) {
    e.preventDefault();
    var $thisLi = $(this).parent();
    $thisLi.remove()
})