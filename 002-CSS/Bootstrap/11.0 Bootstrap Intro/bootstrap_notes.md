# Bootsrap Notes
### An open-source CSS Framework that uses pre-made CSS files 
### (via getbootstrap.com)

- Built on top of Flexbox 
- Easily create responsive websites with a 'mobile-first' approach
- Consistent styling
- Good browser compatibility
- if using with custom stlyes.css, add link to stylesheet AFTER bootstrap link

- Class Bloat: a lot of styling going into the html file, making the code look less clean
- Less customization when using an external framework

Use external frameworks when you want to prioritize mobile sites that you want to create quickly, not best for complex designs 

CDN: Content Delivery Network
- Hubs across the world that knows where its users are located. 
- When trying to access a CSS file that contains the Bootstrap code, it will find the location with the shortest server distance with a server that has the desired content
- Delivered and rendered to users quickly

## 12 Column-System
- Start with a div that has a class called 'container'
- Within 'container', add another div called 'row'
- The rows contain the items and are laid out using the colummn system
- Bootstrap automatically trys to give every column in the row equal spacing and space them across the entire width of the container
- Use col-'1-12' to specify how many columns you want a card to occupy

Boostrap has defined breakpoints for responsiveness:
- Small (sm) -> Mobile
- Medium (md) -> iPad
- Large (lg) -> Laptop
- Extra Large (xl) -> Desktop
- When the overall width is less than 576px, the divs default to 100% width, making the divs stack on top of each other like a column.

When using breakpoints, the @media queries arent that necessary

<div class = "container">
    <div class = "row">
        <div class = "col">Hi</div>
    </div>
</div> 