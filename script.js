document.addEventListener('DOMContentLoaded', () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const messageCustom = urlSearchParams.get('message');

  if (messageCustom) {
    const mainMessageElement = document.querySelector('#mainMessage');
    mainMessageElement.textContent = decodeURI(messageCustom);
  }

  const btnOpenElement = document.querySelector('#open');
  const btnNextElement = document.querySelector('#next');
  const page2Button = document.querySelector('#page2');
  const page3Button = document.querySelector('#page3');
  const page4Button = document.querySelector('#page4');
  const page5Button = document.querySelector('#page5'); // Selecciona el nuevo botón 'Página 5'
  const page6Button = document.querySelector('#page6'); // Nuevo botón 'Página 6'
  const whiteRectangle = document.querySelector('.white-rectangle');
  const newWhiteRectangle = document.querySelector('.new-white-rectangle');
  const anotherWhiteRectangle = document.querySelector('.another-white-rectangle');
  const thirdWhiteRectangle = document.querySelector('.third-white-rectangle');
  const fourthWhiteRectangle = document.querySelector('.fourth-white-rectangle'); // Selecciona el cuarto nuevo rectángulo blanco
  const fifthWhiteRectangle = document.querySelector('.fifth-white-rectangle'); // Nuevo rectángulo blanco para 'Página 6'
  const gifElement = document.querySelector('.centered-gif');
  const newGifElement = document.querySelector('.new-centered-gif');
  const anotherGifElement = document.querySelector('.another-centered-gif');
  const thirdGifElement = document.querySelector('.third-centered-gif');
  const fourthGifElement = document.querySelector('.fourth-centered-gif'); // Selecciona el cuarto nuevo GIF
  const fifthGifElement = document.querySelector('.fifth-centered-gif'); // Nuevo GIF animado para 'Página 6'
  const elementsToZoomOut = document.querySelectorAll('.container-letter, .options');

  btnNextElement.style.display = 'none';
  page2Button.style.display = 'none';
  page3Button.style.display = 'none';
  page4Button.style.display = 'none';
  page5Button.style.display = 'none'; // Oculta el botón 'Página 5' inicialmente
  page6Button.style.display = 'none'; // Oculta el botón 'Página 6' inicialmente
  whiteRectangle.style.display = 'none';
  newWhiteRectangle.style.display = 'none';
  anotherWhiteRectangle.style.display = 'none';
  thirdWhiteRectangle.style.display = 'none';
  fourthWhiteRectangle.style.display = 'none'; // Oculta el cuarto nuevo rectángulo blanco inicialmente
  fifthWhiteRectangle.style.display = 'none'; // Oculta el nuevo rectángulo blanco para 'Página 6' inicialmente
  gifElement.style.display = 'none';
  newGifElement.style.display = 'none';
  anotherGifElement.style.display = 'none';
  thirdGifElement.style.display = 'none';
  fourthGifElement.style.display = 'none'; // Oculta el cuarto nuevo GIF inicialmente
  fifthGifElement.style.display = 'none'; // Oculta el nuevo GIF animado para 'Página 6' inicialmente

  btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
      coverElement.style.zIndex = -1;

      const paperElement = document.querySelector('.paper');
      paperElement.classList.remove('close-paper');
      paperElement.classList.add('open-paper');

      const heartElement = document.querySelector('.heart');
      heartElement.style.display = 'block';

      btnNextElement.style.display = 'inline-block';
    }, 500);
  });

  btnNextElement.addEventListener('click', () => {
    elementsToZoomOut.forEach(element => {
      element.classList.add('zoom-out');
    });

    gifElement.style.display = 'block';
    whiteRectangle.style.display = 'block';
    page2Button.style.display = 'inline-block';
  });

  page2Button.addEventListener('click', () => {
    elementsToZoomOut.forEach(element => {
      element.classList.add('zoom-out');
    });

    whiteRectangle.style.display = 'none';
    gifElement.style.display = 'none';
    page2Button.style.display = 'none';

    newGifElement.style.display = 'block';
    newWhiteRectangle.style.display = 'block';
    page3Button.style.display = 'inline-block';
  });

  page3Button.addEventListener('click', () => {
    elementsToZoomOut.forEach(element => {
      element.classList.add('zoom-out');
    });

    newWhiteRectangle.style.display = 'none';
    newGifElement.style.display = 'none';
    page3Button.style.display = 'none';

    anotherGifElement.style.display = 'block';
    anotherWhiteRectangle.style.display = 'block';
    page4Button.style.display = 'inline-block';
  });

  page4Button.addEventListener('click', () => {
    elementsToZoomOut.forEach(element => {
      element.classList.add('zoom-out');
    });

    anotherWhiteRectangle.style.display = 'none';
    anotherGifElement.style.display = 'none';
    page4Button.style.display = 'none';

    thirdGifElement.style.display = 'block';
    thirdWhiteRectangle.style.display = 'block';
    page5Button.style.display = 'inline-block'; // Muestra el botón 'Página 5'
  });

  page5Button.addEventListener('click', () => {
    elementsToZoomOut.forEach(element => {
      element.classList.add('zoom-out');
    });

    thirdWhiteRectangle.style.display = 'none';
    thirdGifElement.style.display = 'none';
    page5Button.style.display = 'none';

    fourthGifElement.style.display = 'block';
    fourthWhiteRectangle.style.display = 'block';
    // Mostrar el botón "Página 6"
  page6Button.style.display = 'inline-block';
  });

page6Button.addEventListener('click', () => {
  elementsToZoomOut.forEach(element => {
    element.classList.add('zoom-out');
  });

  fourthWhiteRectangle.style.display = 'none';
  fourthGifElement.style.display = 'none';
  page6Button.style.display = 'none';

  fifthGifElement.style.display = 'block';
  fifthWhiteRectangle.style.display = 'block';
});
});