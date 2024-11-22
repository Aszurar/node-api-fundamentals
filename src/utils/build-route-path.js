/**
 * Constrói uma expressão regular que vai resgatar os Route Params e Query Params.
 *
 * Esta função converte uma rota que contém parâmetros dinâmicos (indicados por `:`) 
 * em uma expressão regular que pode ser usada para identificar e extrair valores dos parâmetros da rota
 * e, opcionalmente, da string de consulta (Query Params).
 *
 * @param {string} path - A rota que pode conter parâmetros dinâmicos no formato `:param`.
 * @returns {RegExp} Retorna uma expressão regular que corresponde à rota, captura os parâmetros nomeados e a string de consulta.
 *
 * @example
 * // Exemplo com parâmetros de rota
 * const regex = buildRoutePath('/users/:id');
 * console.log(regex); // /^\/users\/(?<id>[a-z0-9\-_]+)(?<query>\?(.*))?$/
 *
 * const match = '/users/123'.match(regex);
 * console.log(match.groups.id); // '123'
 *
 * @example
 * // Exemplo com Query Params
 * const regex = buildRoutePath('/products/:category/:productId');
 * console.log(regex); // /^\/products\/(?<category>[a-z0-9\-_]+)\/(?<productId>[a-z0-9\-_]+)(?<query>\?(.*))?$/
 *
 * const match = '/products/electronics/456?color=red&size=M'.match(regex);
 * console.log(match.groups.category); // 'electronics'
 * console.log(match.groups.productId); // '456'
 * console.log(match.groups.query); // '?color=red&size=M'
 */
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithoutParameters = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\\-_]+)');

  const pathRegex = new RegExp(`^${pathWithoutParameters}(?<query>\\?(.*))?$`);

  return pathRegex;
}