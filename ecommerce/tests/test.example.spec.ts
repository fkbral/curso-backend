import { describe, it, test, expect } from 'vitest'

interface Icecream {
    isCone: boolean,
    scoops: number
}

describe("Tests 101", () => {
  test('1 + 1 should be equal to 2', () => {
    const sum = 1 + 1
    
    expect(sum).toEqual(2)
  })

  test('Ice cream should contain scoop number', () => {
    const chocoIceCreamWithFourScoops: Icecream = {
        isCone: true,
        scoops: 4
    }

    expect(chocoIceCreamWithFourScoops).toEqual(
        expect.objectContaining({
            scoops: 4
        })
    )
  })

  test('Multiple ice cream orders should be served in cones or cups', () => {
    const chocoIceCreamInCup: Icecream = {
        isCone: false,
        scoops: 1
    }

    const chocoIceCreamInCone: Icecream = {
        isCone: true,
        scoops: 3
    }

    const vanilaIceCreamInCup: Icecream = {
        isCone: false,
        scoops: 2
    }

    const IcecreamOrder = [chocoIceCreamInCup, chocoIceCreamInCone, vanilaIceCreamInCup]

    expect(IcecreamOrder).toEqual(
        expect.arrayContaining([
            chocoIceCreamInCup,
        ])
    )

    expect(IcecreamOrder).toEqual(
        [
            expect.objectContaining({isCone: false}),
            expect.objectContaining({isCone: true}),
            expect.objectContaining({isCone: false}),
        ]
    )
  })
})