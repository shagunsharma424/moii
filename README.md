24-June
1->On photoDescription heading added a giphy backgound video type to get a running text effect from
 https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWhjY2RobnB2Y3owajd5aGt6eTloamR3bzluNXNjbG1qMmwwMnFucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjojgtiigyloyCg3r9/giphy.webp
 website and used like this 

 .pageTitle h1 {
	background-image: url("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWhjY2RobnB2Y3owajd5aGt6eTloamR3bzluNXNjbG1qMmwwMnFucCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cjojgtiigyloyCg3r9/giphy.webp");

	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text; // if we dont use this it will become a background video but now a text video
}

2-Made a global state in App.js to send prop to chnage the color of header for other then home page becase on home page i want header to be white but for other page i want it to be black on other colors

3-From a website response i got
 const items=[
    {
        "title": "Big George Armchair",
            "author": "Cristián Mohaded",
       "price": "€ 3,953.00",
      "src": "https://cdn.moooi.com/tmp/image-thumbnails/Collection/Big George/Big George Armchair/Photography/Product Images/PNG/85611/image-thumb__85611__header_fullscreen_2x_jpg/Big_George_Armchair_Spectrum_Agave_Product-01.webp",
        isSale: false,
        isInStock: false,
        isStockItem: false,
        isSoldout: false,
        stockQuantity: null,
        "category": "furniture/seating/armchairs",
    }

this response so i copied and to use if (JSON.stringify() ) ans then i can use it

4-added a input type range to set the grid view on xl by changing the number and setting   
<button style={{cursor:"pointer"}}>Grid<input type="range"  min="3" max="6" value={gridView}  class="slider" id="myRange" onChange={changeGridView}/></button> 
like this to a column in Photo description page

5-
