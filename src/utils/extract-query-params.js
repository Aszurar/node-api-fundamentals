/**
 * Extrai os parâmetros de consulta (Query Params) de uma string de URL.
 *
 * Esta função converte a string de query (começando com `?`) em um objeto 
 * contendo as chaves e valores 
 * dos parâmetros de consulta. Útil para manipular e acessar os valores de 
 * Query Params em uma URL.
 *
 * @param {string} query - A string de consulta no formato `?key1=value1&key2=value2`.
 * @returns {Record<string, string>} Um objeto onde as chaves representam os 
 * parâmetros e os valores correspondem aos valores da consulta.
 *
 * @example
 * const query = '?name=John&age=30&city=NewYork';
 * const params = extractQueryParams(query);
 * console.log(params); // { name: 'John', age: '30', city: 'NewYork' }
 *
 * @example
 * const query = '?search=react&sort=asc';
 * const params = extractQueryParams(query);
 * console.log(params.search); // 'react'
 * console.log(params.sort); // 'asc'
 */
export function extractQueryParams(query){
  
  const queryArrayByString = query.substr(1).split('&')
  
  const queryParams = queryArrayByString.reduce((queryParams, param) => {
    const [key, value] = param.split('=')
    
    queryParams[key] = value

    return queryParams
  }, {})

  return queryParams

}