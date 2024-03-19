import React, { useEffect } from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript

    const TooltipComponent = () => {
        useEffect(() => {
         
             // Initialize tooltip
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl);
        });

            // Show modal on tooltip click
        document.getElementById('tooltipButton').addEventListener('click', function () {
            var modal = new bootstrap.Modal(document.getElementById('tooltipModal'));
            modal.show();
          });
      
          // Clean up when the component unmounts
          return () => {
            tooltipList.forEach((tooltip) => tooltip.dispose());
          };
        }, []);
}

export default TooltipComponent;