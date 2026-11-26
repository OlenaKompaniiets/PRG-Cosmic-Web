const target = document.querySelector('#target');
const method = document.querySelector('#method');
const heading = document.querySelector('#target-title');
const scene = document.querySelector('#scene');
const direct = document.querySelector('#direct-plot');
const status = document.querySelector('#plot-status');
const targets = window.prgTargets;
let openPath;
let plotWatcher;

function targetLabel(id) {
  return id.replace(/^(SPRC|UGC)/, '$1 ');
}

for (const id of targets) {
  target.add(new Option(targetLabel(id), id));
}

function renderScene() {
  const path = `${method.value}/${target.value}.html`;
  if (path === openPath) return;

  clearInterval(plotWatcher);
  openPath = path;
  const label = targetLabel(target.value);
  const methodLabel = method.selectedOptions[0].text;
  heading.textContent = label;
  document.title = `${label} · ${methodLabel} — PRG Cosmic Web`;
  status.textContent = 'Loading 3D scene…';
  status.hidden = false;
  scene.title = `${methodLabel} reconstruction for ${label}`;
  direct.href = path;
  scene.src = path;
}

function readLocation() {
  const query = new URLSearchParams(location.search);
  const id = query.get('target');
  target.value = targets.includes(id) ? id : targets[0];
  method.value = query.get('method') === 'disperse' ? 'disperse' : 'voronoi';
  renderScene();
}

function setLocation() {
  const query = new URLSearchParams({ target: target.value, method: method.value });
  history.replaceState(null, '', `?${query}`);
  renderScene();
}

scene.addEventListener('load', () => {
  const plotDocument = scene.contentDocument;
  const plot = plotDocument?.querySelector('.plotly-graph-div');
  if (!openPath || !plotDocument || plotDocument.URL !== new URL(openPath, location.href).href) return;

  const responsive = plotDocument.createElement('style');
  responsive.textContent = `
    html, body { width: 100%; height: 100%; margin: 0; }
    body > div { height: 100%; }
    .plotly-graph-div { width: 100% !important; height: 100% !important; }
  `;
  plotDocument.head.append(responsive);

  const start = Date.now();
  function fitPlot() {
    const plotly = scene.contentWindow.Plotly;
    if (plotly && plot?._fullLayout) {
      clearInterval(plotWatcher);
      const mobile = plotDocument.documentElement.clientWidth < 620;
      const layout = { autosize: true, width: null, height: null };
      if (mobile) {
        layout['title.font.size'] = 14;
        layout['legend.font.size'] = 10;
        layout['margin.t'] = 72;
      }
      plotly.relayout(plot, layout).then(() => {
        if (scene.contentDocument !== plotDocument) return;
        if (plot.textContent.includes('WebGL is not supported')) {
          status.textContent = 'Interactive 3D requires WebGL in your browser.';
        } else {
          status.hidden = true;
        }
      }).catch(() => {
        if (scene.contentDocument === plotDocument) {
          status.textContent = 'The 3D view could not resize. Open the standalone plot below.';
        }
      });
    } else if (Date.now() - start > 12000) {
      clearInterval(plotWatcher);
      status.textContent = 'The 3D view could not load. Open the standalone plot below.';
    }
  }
  plotWatcher = setInterval(fitPlot, 100);
});

target.addEventListener('change', setLocation);
method.addEventListener('change', setLocation);
for (const selector of ['.viewer-controls', '.viewer-help', '.viewport', '.viewer-tools']) {
  document.querySelector(selector).hidden = false;
}
readLocation();
