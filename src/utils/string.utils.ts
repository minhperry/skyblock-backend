const prefix = '[hypixel-api-reborn]'

export const removePrefix = (message: string): string => {
  return message.replace(prefix + ' ', '')
}

export const playerDoesNotExist = (message: string): string => {
  let msg = removePrefix(message)
  if (msg === 'Player does not exist.') return msg
  else return "Internal Server Error."
}
