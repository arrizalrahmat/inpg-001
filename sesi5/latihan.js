let isEdit = false;

const button = document.getElementById('edit');
const hasil = document.getElementsByTagName('div');

button.addEventListener('click', () => {
  console.log('jalan', isEdit);
  if (isEdit) {
    isEdit = false;
    document
      .getElementById('isEdited')
      .setAttribute('class', 'hidden');
  } else {
    isEdit = true;
    document
      .getElementById('isEdited')
      .setAttribute('class', 'displayed');
  }
});
