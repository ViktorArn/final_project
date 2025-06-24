# Chicken Productions Website

A Flask‐based  site with:
- Video hero section
- Carousel & portfolio lightbox
- Contact form + newsletter signup (SQLite + honeypot)
- SEO blocks (title, meta, Open Graph)
- multiple pages 

## 🔧 Prerequisites

- Python 3.8+  
- (Optional) A virtual environment
- Useful videos for understanding concepts: 
- Here is a video I used to understand Flask, it might be usefull:  https://youtu.be/Z1RJmh_OqeA?si=ebuC6shXuUfOrQlP
- Here is a video I used to create a footer for my 2 sites :  https://youtu.be/lLdzlLL33G8?si=rAcZ370VIjZ2FZXa
-Here is a great video that helped me build flexboxes, so you can use it to understand the properties inside my CSS:  https://www.youtube.com/watch?v=wsTv9y931o8&list=PL5GbLnxmX4E_fPQ7ifWsmVxZnlYRaGrdH&index=9&ab_channel=Coding2GO
- The best video, that served to me as a tutorial and insparation for my code, for some lines I followed the instructions one-to-one and I advise to everyone that wants to work with my project and build this type, at least to check it: https://youtu.be/uTPO6fKtBvM?si=cZB9Vz39zNSOHjas
- Use this to understand the semantic elements of HTML: https://youtu.be/08b6OJbL3Cs?si=qcxQHAg_pyYU7XwB
-The video that showed me how to build a basic carousel image slider, it is not implemented for Jinja, but can be extremely usefull: https://youtu.be/KcdBOoK3Pfw?si=h7JxxE4jI3IKMKrT
- Use this for NavBars, it would show you the basics of building a responsive bar: https://youtu.be/gXkqy0b4M5g?si=rMk78KOSWCMo-xI-
- A resource for favicons, that would explain the process and syntax
- All the resources are my personal designs and videos I made for the project, so ask me for permission before using them


## 🚀 Installation

```bash
git clone https://github.com/ViktorArn/final_project.git
cd final_project
python -m venv .venv
source .venv/bin/activate         
pip install -r requirements.txt

#The structure of the rep

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

