import _ from 'lodash'
import emojilib from 'emojilib'

export default () => {
  const emojiListLength = emojilib.keys.length
  const randomNumber = _.random(0, emojiListLength-1)

  return `:${emojilib.keys[randomNumber]}:`
}

//module.exports = function() {
//  return ":grinning:"
//}
