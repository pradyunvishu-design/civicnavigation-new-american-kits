import { uiTranslations } from './generatedUiTranslations';

const textOrigins = new WeakMap();
const attributeOrigins = new WeakMap();
const reverseTranslations = new Map();
const translatedAttributes = ['aria-label', 'alt', 'placeholder', 'title'];

function normalize(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

for (const [english, translations] of Object.entries(uiTranslations)) {
  for (const value of Object.values(translations)) {
    const normalized = normalize(value);
    if (normalized && normalized !== english && !reverseTranslations.has(normalized)) {
      reverseTranslations.set(normalized, english);
    }
  }
}

function resolveOriginal(current, stored) {
  const normalizedCurrent = normalize(current);
  if (!normalizedCurrent) return '';

  if (stored) {
    const knownValues = Object.values(uiTranslations[stored] || {}).map(normalize);
    if (normalizedCurrent === stored || knownValues.includes(normalizedCurrent)) return stored;
  }

  return reverseTranslations.get(normalizedCurrent) || normalizedCurrent;
}

function preserveOuterWhitespace(current, translated) {
  const leading = current.match(/^\s*/)?.[0] || '';
  const trailing = current.match(/\s*$/)?.[0] || '';
  return `${leading}${translated}${trailing}`;
}

function translateTextNode(node, lang) {
  const current = node.nodeValue || '';
  const original = resolveOriginal(current, textOrigins.get(node));
  const translations = uiTranslations[original];
  if (!translations) return;

  textOrigins.set(node, original);
  const translated = translations[lang] || original;
  const nextValue = preserveOuterWhitespace(current, translated);
  if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
}

function translateElementAttributes(element, lang) {
  let origins = attributeOrigins.get(element);
  if (!origins) {
    origins = new Map();
    attributeOrigins.set(element, origins);
  }

  for (const attribute of translatedAttributes) {
    if (!element.hasAttribute(attribute)) continue;
    const current = element.getAttribute(attribute) || '';
    const original = resolveOriginal(current, origins.get(attribute));
    const translations = uiTranslations[original];
    if (!translations) continue;

    origins.set(attribute, original);
    const translated = translations[lang] || original;
    if (current !== translated) element.setAttribute(attribute, translated);
  }
}

function translateSubtree(root, lang) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, lang);
    return;
  }

  if (!(root instanceof Element) && !(root instanceof DocumentFragment)) return;
  if (root instanceof Element) translateElementAttributes(root, lang);

  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, code, pre, [data-no-translate]')) return NodeFilter.FILTER_REJECT;
      return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  let textNode = textWalker.nextNode();
  while (textNode) {
    translateTextNode(textNode, lang);
    textNode = textWalker.nextNode();
  }

  if (root.querySelectorAll) {
    root.querySelectorAll(translatedAttributes.map(attribute => `[${attribute}]`).join(',')).forEach(element => {
      translateElementAttributes(element, lang);
    });
  }
}

export function observeUiTranslations(root, lang) {
  translateSubtree(root, lang);

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') translateTextNode(mutation.target, lang);
      if (mutation.type === 'attributes') translateElementAttributes(mutation.target, lang);
      mutation.addedNodes.forEach(node => translateSubtree(node, lang));
    }
  });

  observer.observe(root, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: translatedAttributes
  });

  return () => observer.disconnect();
}
