/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('#CSV').hide()
  $('#XLS').hide()
})

// GH content
// This populates the final display field - Generate button

function mydisplay () {
  $('#creatout').html($('#crein').val())
  $('#contout').html($('#conin').val())
  $('#tiout').html($('#tiin').val())
  $('#createdout').html($('#createdin').val())
  $('#identout').html($('#ident').val())
  $('#descout').html($('#desc').val())

  var filedets1 = 'declare-header:' + $('#decheader').val()
  var filedets2 = 'declare-data:' + $('#decdata').val()
  var filedets3 = 'declare-data:' + $('#decsheet').val()
  $('#filedets').html(filedets3 + '\n' + filedets1 + '\n' + filedets2)
}

// This copies the data

function getMytext () {
  var texty = (
    'creator:' + $('#crein').val() + '\n' +
    'contributor:' + $('#conin').val() + '\n' +
    'title:' + $('#tiin').val() + '\n' +
    'created:' + $('#createdin').val() + '\n' +
    'identifier:' + $('#ident').val() + '\n' +
    'description:' + $('#desc').val() + '\n' +
    'declare-datasheet:' + $('#decsheet').val() + '\n' +
    'declare-header:' + $('#decheader').val() + '\n' +
    'declare-data:' + $('#decdata').val()
  )
return texty
}


function CopyDDF() {
  // eslint-disable-next-line no-undef
  texty = getMytext ()
  var tocopy = $('<textarea>').val(texty).appendTo('body').select()
  tocopy.select()
  document.execCommand('copy')
  alert('Copied to clipboard' + texty)
}

function saveToFile() {
  // eslint-disable-next-line no-undef
  texty = getMytext ()

  alert('Copied to clipboard' + texty)
}



// This downloads the data

// Added for the datatable

$(document).ready(function () {
  $('.add-row').click(function () {
    var col = $('#col').val()
    var dtip = $('#dtip :selected').text()
    var desc = $('#desc').val()
    var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + col + '</td><td>' + dtip + '</td><td>' + desc + '</td></tr>'
    $('table tbody').append(markup)
  })

  // Find and remove selected table rows
  $('.delete-row').click(function () {
    $('table tbody').find('input[name="record"]').each(function () {
      if ($(this).is(':checked')) {
        $(this).parents('tr').remove()
      }
    })
  })
})

// Show hide selection

//$('#filetip').on('change', function () {
//  alert('here');
//})

$(document).ready(function(){
  $("#filetip").change(function(){
   switch (this.value) {
    case '0':
      $('#CSV').show()
      $('#XLS').hide()
      break
    case '1':
      $('#CSV').hide()
      $('#XLS').show()
      break
    case '99':
      $('#CSV').hide()
      $('#XLS').hide()
      break
  };

  });
});

// File import text

function getFilePath () {
  $('input[type=file]').change(function () {
    var filePath = $('#fileUpload').val()
  })
}


//collapsible element

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



function unhide(divID) {
var item = document.getElementById(divID);
if (item) {
item.className=(item.className=='hidden')?'unhidden':'hidden';
}
}