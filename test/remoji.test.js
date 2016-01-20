import Lab from 'lab'
import Code from 'code'
const lab = exports.lab = Lab.script()

import remoji from '../lib/remoji'

lab.describe('remoji', () => {
  
  lab.it('should return emoji shortcode', (done) => {
    Code.expect(remoji()).to.equal(':grinning:')
    done()
  })

})

