# PRG Cosmic Web

[Explore the interactive supplement](https://olenakompaniiets.github.io/PRG-Cosmic-Web/).

The site presents interactive 3D Voronoi tessellations and DisPerSE filament reconstructions for seven polar-ring galaxies. The DisPerSE scenes show the fiducial reconstruction within 50 comoving Mpc at a persistence threshold of 3σ.

## Galaxy sample

SPRC 027, SPRC 056, SPRC 069, SPRC 179, SPRC 260, UGC 7388, and UGC 7576. IC 1689 and SPRC 241 are below the adopted redshift threshold of \(z \geq 0.02\) for this analysis.

## Citation

If you use the results or visualisations, please cite the manuscript.

Kompaniiets, O. V., Pastoven, O. S., Dobrycheva, D. V., Hetmantsev, O. O., Vavilova, I. B., Izviekova, I. O., & Vasylenko, M. Yu. (2026). *Can integrated photometry and large-scale environment constrain the formation of polar rings in galaxies?* Submitted to *Astronomy & Astrophysics*.

## Repository layout

- `index.html` is the sample index. `viewer.html` provides a common viewer with controls for selecting a galaxy and reconstruction method.
- The `voronoi/` and `disperse/` folders hold the standalone Plotly visualisations.
- `assets/` contains the site styles, viewer scripts, and the cover projection derived from the SPRC 260 DisPerSE scene.

To preview the site locally, run `python -m http.server` from the repository root. The DisPerSE scenes load Plotly from its CDN.
