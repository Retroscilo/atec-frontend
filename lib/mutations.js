export function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

export const removeObjectFromList = (list, objectToRemove) => {
  const newList = list.filter((self) => self !== objectToRemove)
  return newList
}

export const mapPropertyFromList = (list, property) => {
  const values = list.map((self) => self[property])
  return values
}

export const replaceItemFromList = (list, newItem, oldItem) => {
  const filteredList = list.filter((self) => {
    return !shallowEqual(self, oldItem)
  })
  return [ ...filteredList, newItem ]
}