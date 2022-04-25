
// const header = document.querySelectorAll('div')
// header.forEach((element, index, array) => {
//    console.log(element)
//    console.log(index)
//    console.log(array)
// })

const accordion = () => {
   const programContent = document.querySelectorAll('.program-line__content')
   const contentDescr = document.querySelectorAll('.program-line__descr')


   programContent.forEach((item) => {
      const title = item.querySelector('.program-line__title')
      const descr = item.querySelector('.program-line__descr')

      descr.style.transition = 'height .3s'
      descr.style.overflow = 'hidden'

      title.addEventListener('click', () => {
         contentDescr.forEach((tab) => {
            if (tab === descr) {
               tab.style.height = tab.scrollHeight + 'px'
            }
            else {
               tab.style.height = 0
            }
         })
      });
   });
}
accordion()

