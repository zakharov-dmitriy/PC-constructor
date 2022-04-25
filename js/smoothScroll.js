const scroll = () => {
   const headerNav = document.querySelector('.header__nav')
   const links = headerNav.querySelectorAll('a')

   links.forEach(link => {
      link.addEventListener('click', (event) => {
         event.preventDefault()
         const section = document.querySelector(link.getAttribute('href'))

         if (section) {
            // section.scrollIntoView({
            //    block: 'start',
            //    behavior: "smooth",
            // })
            seamless.scrollIntoView(section, {
               behavior: "smooth",
               block: "start",
               inline: "center",
            });
         }
      })
   })

}
scroll()