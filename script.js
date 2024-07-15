document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            "title": "Vesta-Arc Resistant Switch Gear",
            "revenue": 277916,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/vesta-ar_0.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/VESTA-AR%20%28no%2040-50kA%29_0.pdf"
        },
        {
            "title": "Low Voltage Switchboards",
            "revenue": 462304,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/switchboards.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Panelboards.pdf"
        },
        {
            "title": "Panelboard",
            "revenue": 446386,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/pannelboards.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Panelboards.pdf"
        },
        {
            "title": "Medium Voltage Switchgear",
            "revenue": 463568,
            "image": "https://www.iemfg.com/wp-content/uploads/2020/07/medium-voltage-switchgear.jpg",
            "link": "https://www.iemfg.com/wp-content/uploads/2020/07/Medium-Voltage-Switchgear-Datasheet.pdf"
        },
        {
            "title": "C&I Low Voltage",
            "revenue": 140128,
            "image": "https://www.iemfg.com/sites/default/files/2023-12/Product_CustAssem.png",
            "link": "https://www.iemfg.com/sites/default/files/2023-12/Custom%20Assemblies_0.pdf"
        }
    ];

    const ctx = document.getElementById('pie-chart').getContext('2d');
    const productImage = document.getElementById('product-image');

    const data = {
        labels: products.map(product => product.title),
        datasets: [{
            data: products.map(product => product.revenue),
            backgroundColor: products.map((_, index) => `hsl(${index * 360 / products.length}, 100%, 50%)`)
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
                    productImage.src = products[index].image;
                    productImage.style.display = 'block';
                    productImage.style.top = `${event.clientY + 15}px`;
                    productImage.style.left = `${event.clientX + 15}px`;
                } else {
                    productImage.style.display = 'none';
                }
            }
        }
    });
});
