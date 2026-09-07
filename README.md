# PRG-Cosmic-Web

Interactive 3D visualisations of the large-scale environments of seven polar-ring galaxies (PRGs), using two complementary representations:

- **3D Voronoi reconstruction** of the local galaxy distribution;
- **DisPerSE filament-skeleton reconstruction** of the cosmic-web environment.

## Included galaxies

- SPRC027
- SPRC056
- SPRC069
- SPRC179
- SPRC260
- UGC7378
- UGC7576

IC1689 and SPRC241 are not included in the interactive environment material because their redshifts are below the range adopted for the SDSS-based three-dimensional reconstruction used here.

## Repository structure

```text
PRG-Cosmic-Web/
├── index.html
├── README.md
├── CITATION.cff
├── .nojekyll
├── voronoi/
│   ├── SPRC027.html
│   ├── SPRC056.html
│   ├── SPRC069.html
│   ├── SPRC179.html
│   ├── SPRC260.html
│   ├── UGC7378.html
│   └── UGC7576.html
└── disperse/
    ├── SPRC027.html
    ├── SPRC056.html
    ├── SPRC069.html
    ├── SPRC179.html
    ├── SPRC260.html
    ├── UGC7378.html
    └── UGC7576.html
```

## GitHub Pages

Once GitHub Pages is enabled for the repository root on the `main` branch, the landing page will be available at:

`https://OlenaKompaniiets.github.io/PRG-Cosmic-Web/`

## Usage

Open the landing page and select either **3D Voronoi** or **DisPerSE** for a galaxy. The Plotly visualisations can be rotated, zoomed, and inspected interactively.

## Citation

If these visualisations are used in scientific work, please cite the associated publication and this repository.
