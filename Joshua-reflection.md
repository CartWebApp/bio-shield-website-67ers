# Reflection
## Design Process
1. We analyzed other bug repellant websites to see what elements their sites contained (namely *bugsoother.com* and *off.com*). Notable features included:
    1. Home Page
        1. Hero Section
        2. Featured Products Seciton
        3. About Page preview
        4. Customer Testimonials
    2. Products Page
        1. Our Story
    3. Product Page
        1. Grid layout
        2. Filters
    4. About Page
        1. Our Story
    5. General
        1. Footer with social links and newsletter
        2. Navigation bar at the top with brand name
2. Asked AI, **ChatGPT** to make a website layout draft with these elements. This is what we included in Milestone one. We also asked **Chat** to use a nature color scheme, which ended up including brown, green, and yellow

3. Asked **Adobe Firefly** to generate the new Company Logo, also included in milestone one. It was remade later to fit the website's vision, still using **Adobe Firefly**

4. After having created a draft of the website in the programming process, used **Google Gemini** to create images for the products

5. Made manual design changes
    - added a custom hero background, which was the sky with the trees around it
    - added a green overlay to the hero background
    - added a trademark to every mention of Bioshield
    - stuck the footer to the bottom of the page even if the page's content was short
    - modified the people in the testimonials
    - modified the social media icons on the bottom to be accurate, rather than just emoji representations

## Programming Process
1. After drafting the website's layout during the design process, we asked **ChatGPT** to generate four html files, plus a stylesheet and javascript file for animations while taking into account our design requirements. We inlcuded the full design requirements that we established in the first step of the design process within our prompt.

2. There were no images on the website currently linked correctly after the first draft of the website which **Chat** gave us, so we had to create and link the images ourself manually within the code. I did not use AI assistance in helping me add in the images.

3. After getting the draft of the website and the images created with **Google Gemini** integrated within it. All that was left to program was the manual changes we made in step 5 of the design process
    - we downloaded a custom image that we found online and linked it as the hero background in the css file manually
    - in order to add a green overlay over the hero background, I went to find the hero section in the css file, which **ChatGPT** had fortunately commentated for ease of searching, and asked **Github Copilot** to add a green, semi-tranparent overlay over the hero background
    - in order to stick the footer to the bottom of each page no matter the length of the content, I went to the footer section of the css file, and asked **Github Copilot** to reprogram the section to make sure that the footer of each page stuck to the bottom the page even if the page's content was short
    - in order to change the testimonials, I just went to the index.html file and found the testimonial's section, manually changing the items in the <blockquote> tags to our liking
    - in order to change the emoji's which stood in for the social media icons at the footer of each page to the actual social media icon. I asked **Github Copilot** to reprogram the footer, more specifically the part which is contained within <div class="social media">, to include the images of the actual social media platforms they were referring to. **Copilot** generated correct code; however, it could not link the images itself, so I had to download suitable icons and link them in the <img> tags manually.



