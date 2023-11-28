import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  /**
   * 添加数据
   * @param {string} key
   * @param {mixed} value
   * @returns {Promise}
   */
  static set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取数据
   * @param {string} key
   * @returns {Promise}
   */
  static get(key) {
    return AsyncStorage.getItem(key)
      .then(value => {
        if (value && value !== '') {
          const jsonValue = JSON.parse(value);
          return jsonValue;
        }
      })
      .catch(() => null);
  }

  /**
   * 更新数据
   * @param {string} key
   * @param {mixed} newValue
   * @returns {Promise}
   */
  static update(key, newValue) {
    return AsyncStorage.get(key).then(oldValue => {
      // Object.assign合并两个对象，并且会把重名属性覆盖
      newValue =
        typeof newValue === 'string'
          ? newValue
          : Object.assign({}, oldValue, newValue);
      return AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  }

  /**
   * 删除指定的key
   * @param {string} key
   * @returns {Promise}
   */
  static delete(key) {
    return AsyncStorage.removeItem(key);
  }

  /**
   * 清空所有的数据
   * @returns {Promise}
   */
  static clear() {
    return AsyncStorage.clear();
  }
}
