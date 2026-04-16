export function getValueAtPath(source, path) {
  const keys = Array.isArray(path) ? path : String(path).split(".");
  return keys.reduce((current, key) => current?.[key], source);
}

function cloneContainer(value) {
  if (Array.isArray(value)) return [...value];
  if (value && typeof value === "object") return { ...value };
  return {};
}

export function updateValueAtPath(source, path, valueOrUpdater) {
  const keys = Array.isArray(path) ? path : String(path).split(".");

  if (keys.length === 0) {
    return typeof valueOrUpdater === "function"
      ? valueOrUpdater(source)
      : valueOrUpdater;
  }

  const [key, ...rest] = keys;
  const currentSource = source ?? {};
  const updatedSource = cloneContainer(currentSource);

  if (rest.length === 0) {
    const currentValue = currentSource?.[key];
    updatedSource[key] =
      typeof valueOrUpdater === "function"
        ? valueOrUpdater(currentValue)
        : valueOrUpdater;
    return updatedSource;
  }

  updatedSource[key] = updateValueAtPath(currentSource?.[key], rest, valueOrUpdater);
  return updatedSource;
}
