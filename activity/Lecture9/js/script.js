document.addEventListener('DOMContentLoaded', () => {

  const thingsToListen = [
    document.getElementById('firstName'),
    document.getElementById('lastName'),
    document.getElementById('email')
  ];


  for (let item of thingsToListen) {
    item.addEventListener('focus', () => {
      item.style.backgroundColor = '#fff8dc'; 
    });

    item.addEventListener('blur', () => {
      item.style.backgroundColor = ''; 
    });
  }
});