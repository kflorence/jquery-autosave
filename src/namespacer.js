/* start-build-ignore */
define(function() {
/* end-build-ignore */

  /**
   * Get a hash of namespaced strings.
   * @param namespace The namespace to use.
   * @param items List of strings.
   * @param separator Separator to use when joining items to namespace.
   * @param before True if namespace should be prefixed, false if namespace should be suffixed.
   * @returns Object of key/value pairs representing the item and the namespaced item.
   */
  function namespacer(namespace, items, separator, before) {
  var i, item,
    length = items.length,
    namespaced = {};

  if (length && namespace) {
    if (!separator) {
      separator = ".";
    }

    for (i = 0; i < length; i++) {
      item = items[i];
      namespaced[item] = before ? namespace + separator + item : item + separator + namespace;
    }
  }

  return namespaced;
}

/* start-build-ignore */
return namespacer;

});
/* end-build-ignore */
