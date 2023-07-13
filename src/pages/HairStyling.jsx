import React, { useEffect } from 'react';

const HairStyling = () => {
    useEffect(() => {
        document.title = 'HairStyling';
    }, []);

    return (
    <div>
         <h1 className='text-center display-4 fw-normal'>HAIR STYLING</h1>
            <p className="lead text-center">
            Welcome to our fun and interactive course on Hair Styling!
          </p>
        <hr />
          <div className="mt-5">
        
          <h3 className='display-6'>Introduction</h3>
          <p>
          The main purpose of hairdressing is to enhance the appearance of the hair and to make it more manageable. Hairdressers use a variety of techniques to achieve this, including cutting, styling, coloring, and chemical treatments.

          </p>
          <p>
          Hairdressing can be a very creative profession, and hairdressers have the opportunity to express their artistic skills through their work. They also have the opportunity to meet new people and to help them feel more confident about their appearance.
        </p>
          <p>
            This course is designed to provide you with a comprehensive understanding of the key concepts and strategies involved in digital marketing. Whether you are a small business owner, aspiring marketer, or someone looking to enhance their digital marketing skills, this course will equip you with the knowledge and tools to succeed in the digital landscape.
            The history of hairdressing dates back to ancient times. The earliest evidence of hairdressing comes from the ancient Egyptians, who used a variety of techniques to style their hair. These techniques included braiding, curling, and coloring.
            In the Middle Ages, hairdressing became more elaborate, and hairstyles became more complex. Hair was often styled in elaborate braids and buns, and it was often decorated with jewels and other ornaments.
          </p>

          <p>
            
          </p>
        
        <hr />


        </div>



        <div>
        
<div className="row text-center">
            <div className="display-6">Video Reference</div>
            <p>internet connection Required!</p>
    
             <div className='mt-4'>
                
             <iframe width="640" height="360" src="https://www.youtube.com/embed/-9_aGpT7CZ4" title="#143. HOW TO CORNROW 4 BEGINNERS ONLY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             
             </div>
        </div>
        </div>
    </div>
    );
};

export default HairStyling;