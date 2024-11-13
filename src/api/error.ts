export class ErrorMessage {
  static MOJANG_PLAYER_DOES_NOT_EXIST(name: string) {
    return `Player ${name} does not exist.`
  }

  static PROFILE_CREATION_FAILED() {
    return 'Failed to create profile!'
  }
  
  static PROFILE_NAME_NOT_FOUND(name: string) {
    return `Profile ${name} does not exist.`
  }
}
