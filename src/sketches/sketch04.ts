/* Cars */
import Car from './utils/car'

const bouncing = (svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>) => {
    let car: Car
    let aCar: Car

    const setup = () => {  
        car = new Car(svg)
        aCar = new Car(svg, 100)
        animation()
    }

    const animation = () => {     
        car.muovi()
        aCar.muovi()

        car.disegna()
        aCar.disegna()
        
        requestAnimationFrame(animation)
    }

    requestAnimationFrame(setup)
}

export default bouncing