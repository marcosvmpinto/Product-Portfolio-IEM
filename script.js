document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            "title": "Vesta-Arc Resistant Switch Gear",
            "revenue": 277916,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/vesta-ar_0.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/VESTA-AR%20%28no%2040-50kA%29_0.pdf",
            "description": "Medium Voltage Metal-Clad Arc-Resistant Switchgear with advanced safety features."
        },
        {
            "title": "Low Voltage Switchboards",
            "revenue": 462304,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/switchboards.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Panelboards.pdf",
            "description": "Reliable and efficient low voltage switchboards for various applications."
        },
        {
            "title": "Panelboard",
            "revenue": 446386,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/pannelboards.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Panelboards.pdf",
            "description": "Versatile and durable panelboards for electrical distribution."
        },
        {
            "title": "Medium Voltage Switchgear",
            "revenue": 463568,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/metlaclad_MV_Switchgear.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/MV%20Switchgear%20Metal%20Clad.pdf",
            "description": "High-performance medium voltage switchgear for demanding environments."
        },
        {
            "title": "C&I Low Voltage",
            "revenue": 140128,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/Product_CustAssem.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Custom%20Assemblies_0.pdf",
            "description": "Custom industrial low voltage solutions for various needs."
        }
    ];

    const ctx = document.getElementById('pie-chart').getContext('2d');
    const productImage = document.getElementById('product-image');
    const revenueInfo = document.getElementById('revenue-info');
    const productName = document.getElementById('product-name');
    const productDescription = document.getElementById('product-description');
    const revenuePercent = document.getElementById('revenue-percent');

    const totalRevenue = products.reduce((sum, product) => sum + product.revenue, 0);

    const data = {
        labels: products.map(product => product.title),
        datasets: [{
            data: products.map(product => product.revenue),
            backgroundColor: products.map((_, index) => `hsla(${index * 360 / products.length}, 100%, 70%, 0.6)`)
        }]
    };

    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    window.open(products[index].link, '_blank');
                }
            },
            onHover: (event, elements) => {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const product = products[index];
                    console.log("Hovered product:", product); // Logging the hovered product
                    productImage.src = product.image;
                    productImage.style.display = 'block';
                    const percent = ((product.revenue / totalRevenue) * 100).toFixed(2);
                    revenueInfo.innerHTML = `<strong>Product Name:</strong> ${product.title}<br>
                                             <strong>Revenue:</strong> $${product.revenue.toLocaleString()}<br>
                                             <strong>Revenue %:</strong> ${percent}%<br>
                                             <strong>Description:</strong> <span id="product-description">${product.description}</span>`;
                } else {
                    console.log("No product hovered"); // Logging when no product is hovered
                    productImage.style.display = 'none';
                    revenueInfo.innerHTML = `<strong>Product Name:</strong> N/A<br>
                                             <strong>Revenue:</strong> $0<br>
                                             <strong>Revenue %:</strong> 0%<br>
                                             <strong>Description:</strong> <span id="product-description"></span>`;
                }
            },
            onHover: function(event, activeElements) {
                if (activeElements.length > 0) {
                    const index = activeElements[0].index;
                    pieChart.data.datasets[0].backgroundColor[index] = `hsla(${index * 360 / products.length}, 100%, 50%, 0.8)`;
                    pieChart.update();
                } else {
                    pieChart.data.datasets[0].backgroundColor = products.map((_, index) => `hsla(${index * 360 / products.length}, 100%, 70%, 0.6)`);
                    pieChart.update();
                }
            }
        }
    });
});
