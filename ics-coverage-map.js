const data = JSON.parse(document.getElementById('map-data').textContent);
const get = id => document.getElementById(id);
let selectedId = '';
function element(tag, text) {
  const node = document.createElement(tag);
  node.textContent = text;
  return node;
}
function recordLink(record) {
  const link = element('a', record.id + ' · ' + record.title);
  link.href = 'ot-detection-catalog-by-log-source.html#' + record.id;
  return link;
}
function render() {
  const query = get('search').value.trim().toLowerCase();
  const conditional = get('conditional').checked;
  const records = data.records.filter(r => r.id.startsWith(get('kind').value));
  const matches = technique => {
    const techniqueMatch = (technique.id + ' ' + technique.name).toLowerCase().includes(query);
    return records.filter(r => (r.primary.includes(technique.id) ||
      (conditional && r.conditional.includes(technique.id))) &&
      (techniqueMatch || (r.id + ' ' + r.title).toLowerCase().includes(query)));
  };
  const mapped = new Set();
  const matrix = get('matrix');
  matrix.replaceChildren();
  let covered = 0;
  for (const technique of data.techniques) {
    const related = matches(technique);
    if (related.length) covered++;
    for (const record of related) mapped.add(record.id);
  }
  for (const tactic of data.tactics) {
    const column = element('section', '');
    column.className = 'tactic';
    column.append(element('h2', tactic.name));
    for (const technique of data.techniques.filter(t => t.tactics.includes(tactic.key)).sort((a,b) => a.id.localeCompare(b.id))) {
      const related = matches(technique);
      const button = element('button', technique.id + ' · ' + technique.name);
      button.type = 'button';
      button.className = 'technique';
      if (related.some(r => r.primary.includes(technique.id))) button.classList.add('primary');
      else if (related.length) button.classList.add('conditional');
      button.setAttribute('aria-pressed', String(selectedId === technique.id));
      button.append(element('small', related.length + ' matching records'));
      button.onclick = () => { selectedId = technique.id; render(); };
      column.append(button);
    }
    matrix.append(column);
  }
  get('counts').textContent = covered + ' / ' + data.techniques.length +
    ' exact ICS technique IDs associated · ' + mapped.size + ' distinct matching records';
  const detail = get('detail');
  detail.replaceChildren();
  const selected = data.techniques.find(t => t.id === selectedId);
  if (selected) {
    detail.append(element('h2', selected.id + ' · ' + selected.name));
    const official = element('a', 'MITRE technique reference ↗');
    official.href = selected.url;
    official.target = '_blank';
    official.rel = 'noopener';
    detail.append(official);
    const list = element('ul', '');
    for (const record of matches(selected)) {
      const item = element('li', '');
      item.append(recordLink(record), element('small',
        record.primary.includes(selected.id) ? 'Primary association' : 'Conditional association'));
      list.append(item);
    }
    detail.append(list);
    if (!list.children.length) detail.append(element('p','No matching records for this technique.'));
  } else {
    detail.append(element('h2','Technique details'), element('p','Select a technique to inspect its linked detections.'));
  }
  const ids = new Set(data.techniques.map(t => t.id));
  const other = get('unmapped');
  other.replaceChildren();
  for (const record of records.filter(r => ![...r.primary,...r.conditional].some(id => ids.has(id)) &&
    (r.id + ' ' + r.title).toLowerCase().includes(query))) {
    const item = element('li', '');
    item.append(recordLink(record));
    other.append(item);
  }
  get('other').querySelector('h2').textContent = 'Detections without an ICS association · ' + other.children.length;
}
for (const id of ['search','kind','conditional']) get(id).addEventListener(id === 'search' ? 'input' : 'change',render);
render();
