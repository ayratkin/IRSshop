function slider() {
    try {
        new Swiper('.image-slider', {
            navigation: {
                nextEl: '.right-arrow',
                prevEl: '.left-arrow'
            },
            // loop: true,
        
        });
    } catch { 
        console.log('slider error');
    }
   }
   
export default slider;
