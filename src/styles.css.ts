import { createGlobalTheme, createTheme, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

// export const AppHeader = style(
//   {
//     backgroundColor: '#0d0f11',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: 'calc(10px + 2vmin)',
//     color: 'white',
//   },
//   'AppHeader'
// )

export const AppHeader = style(
  {
    backgroundColor: '#111318',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  'AppHeader'
)

const space = { sm: '10px', lg: '20px' }
const vars = createGlobalTheme(':root', { space })

export const sprinkles = createSprinkles(
  defineProperties({
    properties: {
      backgroundColor: { a: '#101113', b: 'hsl(216, 9%, 22%)', c: { width: '100px' } },
      // width: space,
      // height: space,
      width: vars.space,
      height: vars.space,
      test: { true: {} },
    },
  })
)

// const t = (sprinkles) => {
//   return () => sprinkles
// }

// export const t_ = t(sprinkles)
