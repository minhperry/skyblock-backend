const prefix = '[hypixel-api-reborn]'

export const removePrefix = (message: string): string => {
  return message.replace(prefix + ' ', '')
}

export const playerDoesNotExist = (message: any): [string, number] => {
  let msg = removePrefix(message as string)
  if (msg === 'Player does not exist.') return [msg, 404]
  else return [msg, 500]
}

export function removeDash(uuid: string) {
  return uuid.replace('-', '')
}
