(function(){

    function injectResponsiveWidgets() {
     // const targetElement = document.getElementById("urbanvue");
     const targetElement = document.querySelector("[urbanVueId]");
 
     if (!targetElement) {
       console.warn("No element with id 'urbanvue' found.");
       return;
     }
 
     // Get the URL from the 'urban-key' attribute
     // const widgetUrl = targetElement.getAttribute("urban-key");
     const widgetUrl = targetElement.getAttribute("urbanVueId");
 
     if (!widgetUrl) {
       console.error("No 'urban-key' attribute found in the 'urbanvue' element.");
       return;
     }
 
     // Inject the responsive widgets HTML
     targetElement.innerHTML = `
       <div id="widget-portrait" style="display: none;">
         <iframe
           allowfullscreen="true"
           webkitallowfullscreen="true"
           mozallowfullscreen="true"
           msallowfullscreen="true"
           oallowfullscreen="true"
           src="https://${widgetUrl}.urbanvue.in/?widget=portrait"
           style="border: none; margin: auto; width: 100%; height: 100%;"
         ></iframe>
       </div>
       <div id="widget-landscape" style="display: none;">
         <iframe
           allowfullscreen="true"
           webkitallowfullscreen="true"
           mozallowfullscreen="true"
           msallowfullscreen="true"
           oallowfullscreen="true"
           src="https://${widgetUrl}.urbanvue.in/?widget=landscape"
           style="border: none; margin: auto; width: 100%; height: 100%;"
         ></iframe>
       </div>
     `;
 
     // Function to apply styles based on orientation
     function applyStylesBasedOnOrientation() {
       const isPortrait = window.matchMedia("(orientation: portrait)").matches;
 
       const portraitWidget = document.getElementById("widget-portrait");
       const landscapeWidget = document.getElementById("widget-landscape");
 
       if (isPortrait) {
         portraitWidget.style.display = "block";
         portraitWidget.style.margin = "auto";
         portraitWidget.style.marginTop = "12px";
         portraitWidget.style.borderRadius = "48px";
         portraitWidget.style.borderTopRightRadius = "0px";
         portraitWidget.style.borderTopLeftRadius = "0px";
         portraitWidget.style.overflow = "hidden";
         portraitWidget.style.width = "calc(100% - 24px)";
         portraitWidget.style.height = "calc((100vw / 16 * 9) + 100px)";
 
         landscapeWidget.style.display = "none";
       } else {
         landscapeWidget.style.display = "block";
         landscapeWidget.style.height = "auto";
 
         portraitWidget.style.display = "none";
       }
     }
 
     // Apply styles on load
     applyStylesBasedOnOrientation();
 
     // Listen for orientation changes
     window.addEventListener("resize", applyStylesBasedOnOrientation);
   }
 
   // Run the function after the DOM is fully loaded
   document.addEventListener("DOMContentLoaded", injectResponsiveWidgets);
 })()
 