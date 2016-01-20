import Lab from 'lab'
import Code from 'code'
const lab = exports.lab = Lab.script()

import remoji from '../lib/remoji'

lab.describe('remoji', () => {
  
  lab.it('should return an emoji shortcode', (done) => {
    Code.expect(remoji().length).to.be.at.least(4)
    Code.expect(remoji()).to.startWith(':')
    Code.expect(remoji()).to.endWith(':')
    done()
  })

})

