# Chicken Productions Website

A Flask‐based single-page marketing site with:
- Video hero section
- Carousel & portfolio lightbox
- Contact form + newsletter signup (SQLite + honeypot)
- SEO blocks (title, meta, Open Graph)

# Prerequisites

- Python 3.8+  
- (Optional) A virtual environment
- Check the requrements file
- Have a laptop, not a toaster

# Installation

git clone https://github.com/ViktorArn/final_project.git
cd final_project
python -m venv .venv
source .venv/bin/activate        
pip install -r requirements.txt

#The structure of the rep (its long)

final_project/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   ├── layout.html
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   └── contact.html
└── static/
    ├── styles.css
    ├── main.js
    └── images/
