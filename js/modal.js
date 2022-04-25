const modal = () => {
   const modalButton = document.querySelector('.modal__button');
   const courseButton = document.querySelector('.course__button');
   const modal = document.querySelector('.modal');
   const modalInner = document.querySelector('.modal__inner')

   modalButton.addEventListener('click', () => {
      modal.style.display = 'flex'
   });
   courseButton.addEventListener('click', () => {
      modal.style.display = 'flex'
   });

   modal.addEventListener('click', (event) => {
      const modalContent = event.target.closest('.modal__inner');
      if (!modalContent) {
         modal.style.display = ''
      }
   })

   const close = document.createElement('div')
   close.textContent = 'X'
   modalInner.append(close)
   close.style.cssText = `font-size: 18px;
   position: absolute;
   top: 2%;
   right: 32%;
   width: 25px;
   background: rgb(255 255 255 / 30%);
   cursor: pointer;
  `;

   close.addEventListener('click', () => {
      modal.style.display = ''
   })
}
modal()