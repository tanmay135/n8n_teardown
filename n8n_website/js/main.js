// Main JavaScript for n8n Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Initialize charts if they exist
    if (typeof Chart !== 'undefined') {
        // Market size chart
        const marketChartEl = document.getElementById('marketChart');
        if (marketChartEl) {
            const marketChart = new Chart(marketChartEl, {
                type: 'bar',
                data: {
                    labels: ['2021', '2026'],
                    datasets: [{
                        label: 'iPaaS Market Size (Billions $)',
                        data: [3.7, 13.9],
                        backgroundColor: [
                            'rgba(255, 107, 74, 0.7)',
                            'rgba(255, 107, 74, 0.9)'
                        ],
                        borderColor: [
                            'rgba(255, 107, 74, 1)',
                            'rgba(255, 107, 74, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Billions USD'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'iPaaS Market Growth Forecast',
                            font: {
                                size: 18
                            }
                        },
                        subtitle: {
                            display: true,
                            text: '30% CAGR from 2021-2026',
                            font: {
                                size: 14
                            }
                        }
                    }
                }
            });
        }
    }
});
