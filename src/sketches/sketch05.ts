/* Balls */
import Ball from './utils/ball'

const bouncing = (svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>) => {
    let aBall: Ball
    let bBall: Ball

    const setup = () => {  
        aBall = new Ball(svg)
        bBall = new Ball(svg, window.innerWidth-25, 100)
        animation()
    }

    const animation = () => {     
        aBall.bordi()
        bBall.bordi()
        
        aBall.muovi()
        bBall.muovi()

        aBall.disegna()
        bBall.disegna()
        
        requestAnimationFrame(animation)
    }

    requestAnimationFrame(setup)
}

export default bouncing