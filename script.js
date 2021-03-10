// Toggles all checkboxes when the user clicks the checkbox in the table header
function toggle(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] != source)
          checkboxes[i].checked = source.checked;
  }
}

// Custom Popup
var modal = null
  function pop() {
    if(modal === null) {
      document.querySelector('#box').style.display = "block";
      modal = true
    } else {
      document.querySelector('#box').style.display =  "none";
      modal = null
    }
  }

const btn = document.querySelector('#btn');
// Handle Click Button
btn.onclick = function(data_value) {
  const rbs = document.querySelectorAll('input[name="choice"]');
  let selectedValue;
  for  (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      console.log(selectedValue);
      document.querySelector('#box').style.display =  "none";

      if (selectedValue === 'yes') {
        document.querySelector('.firstName').style.display = "none";
        document.querySelector('.preferredName').style.display = "none";
        document.querySelector('.lastName').style.display = "none";
        document.querySelector('.company').style.display = "none";
        document.querySelector('.onsiteBadgeHolder').style.display = "none";
        document.querySelector('.onsiteAux').style.display = "none";
      } else {
        document.querySelector('#box').style.display = "none";
      }
      break;
    }
  }
  alert(selectedValue);
}

